/**
 * MyLeaf
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLeaf extends CGFobject {
    constructor(scene) {
        super(scene);
        this.triangle = new MyTriangleSmall(this.scene);
        
        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.1412, 0.2745, 0.1373, 1.0);
        this.material.setDiffuse(0.1412, 0.2745, 0.1373, 1.0);
        this.material.setSpecular(0.1412, 0.2745, 0.1373, 1.0);
        this.material.setShininess(50.0);
    }

    display(){
        this.scene.pushMatrix();
        this.material.apply();
        this.triangle.display();
        this.scene.popMatrix();
    }
}