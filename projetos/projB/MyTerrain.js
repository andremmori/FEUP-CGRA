/**
 * MyTerrain
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTerrain extends CGFobject {
    constructor(scene) {
        super(scene);
        this.appearance = new CGFappearance(this.scene);
        this.appearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.appearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.appearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.appearance.setShininess(120);

        this.texture = new CGFtexture(this.scene, "images/terrain.jpg");
        this.altimetry = new CGFtexture(this.scene, "images/altimetry.png");
        this.heightmap = new CGFtexture(this.scene, "images/heightmap.jpg");
        this.appearance.setTexture(this.texture);
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');

        
        this.shader = new CGFshader(this.scene.gl, "terrain.vert", "terrain.frag");
        this.shader.setUniformsValues({ uSampler2: 1 });
        this.shader.setUniformsValues({ timeFactor: 0 });
        this.heightmap.bind(1);

        this.plane = new Plane(this.scene, 32);
        
        this.initBuffers();
    }
    initBuffers() {
    }
    display(){
        this.scene.pushMatrix();
        this.appearance.apply();
        this.plane.display();
        this.scene.popMatrix();
    }
}

