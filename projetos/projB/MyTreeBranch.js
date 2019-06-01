/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeBranch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.cyl = new MyCylinder(this.scene, 6, 2);

        // Cor madeira
        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.5, 0.3, 0, 1.0);
        this.material.setDiffuse(0.3, 0.17, 0, 1.0);
        this.material.setSpecular(0.15, 0.1, 0.1, 1.0);
        this.material.setShininess(50.0);

        this.wood = new CGFappearance(this.scene);
        this.wood.loadTexture('images/treeTrunk.jpg');
        this.wood.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        this.scene.pushMatrix();
        this.scene.rotate(this.scene.convertAng(90), 1, 0, 0);
        this.scene.scale(0.25, 5, 0.25);
        this.material.apply();
        this.wood.apply();
        this.cyl.display();
        this.scene.popMatrix();
    }
}

