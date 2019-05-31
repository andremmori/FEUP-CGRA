/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeBranch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.cyl = new MyCylinder(this.scene, 3, 2);

        // Cor madeira
        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.5, 0.3, 0, 1.0);
        this.material.setDiffuse(0.3, 0.17, 0, 1.0);
        this.material.setSpecular(0.15, 0.1, 0.1, 1.0);
        this.material.setShininess(50.0);
    }

    display() {
        this.scene.pushMatrix();
        this.material.apply();
        this.cyl.display();
        this.scene.popMatrix();
    }
}

