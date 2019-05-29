/**
 * MyTerrain
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTerrain extends CGFobject {
    constructor(scene) {
        super(scene);

        this.plane = new Plane(this.scene, 32);
        
        this.initBuffers();
    }
    initBuffers() {
    }
    display(){
        this.scene.pushMatrix();
        this.scene.appearance.apply();
        this.plane.display();
        this.scene.popMatrix();
    }
}

