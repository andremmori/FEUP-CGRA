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
        this.heightmap = new CGFtexture(this.scene, "images/heightmap_flat.jpg");
        this.altimetry = new CGFtexture(this.scene, "images/altimetry.png");
        this.appearance.setTexture(this.texture);
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');

        // shader code panels references
        this.shadersDiv = document.getElementById("shaders");
        this.vShaderDiv = document.getElementById("vshader");
        this.fShaderDiv = document.getElementById("fshader");


        this.shader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");
        this.shader.setUniformsValues({  uSampler2: 1 });

        
        this.initBuffers();
    }
    initBuffers() {
    }
    display(){
        this.appearance.setTexture(this.texture);
        this.appearance.apply();
        this.scene.pushMatrix();
        this.heightmap.bind(1);
        this.scene.setActiveShader(this.shader);
        this.scene.rotate(-0.5 * Math.PI, 1, 0, 0);
        this.scene.scale(60, 60, 1);
        this.plane.display();
        this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.popMatrix();
    }
}

