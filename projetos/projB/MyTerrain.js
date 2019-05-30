/**
 * MyTerrain
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTerrain extends CGFobject {
    constructor(scene) {
        super(scene);

        this.plane = new Plane(this.scene, 32);

        this.appearance = new CGFappearance(this.scene);
        this.appearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.appearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.appearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.appearance.setShininess(120);

        this.texture = new CGFtexture(this.scene, "images/terrain.jpg");
        this.heightmap = new CGFtexture(this.scene, "images/heightmap.jpg");
        this.altimetry = new CGFtexture(this.scene, "images/altimetry.png");
        this.appearance.setTexture(this.texture);
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');


        this.shader = new CGFshader(this.scene.gl, "terrain.vert", "terrain.frag");
        this.shader.setUniformsValues({ uSampler2: 1 });

        
        this.initBuffers();
    }
    initBuffers() {
    }
    display(){
        this.scene.setActiveShader(this.shader);
        this.appearance.setTexture(this.texture);
        this.appearance.apply();
        this.heightmap.bind(1);
        this.scene.pushMatrix();
        this.scene.rotate(-0.5 * Math.PI, 1, 0, 0);
        this.scene.scale(60, 60, 1);
        this.plane.display();
        this.scene.popMatrix();
    }
}

