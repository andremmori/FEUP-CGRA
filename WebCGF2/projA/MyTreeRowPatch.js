/**
 * MyTreeRowPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeRowPatch extends CGFobject {
    constructor(scene) {
        super(scene);

        this.tree = new MyTree(this.scene, 3, 1, 2, 2, null, null);
    }


    display() {
        //  1 2 3 4 5 6

        // 1
        this.scene.pushMatrix();
        this.scene.translate(-10, 0, 0);
        this.tree.display();
        this.scene.popMatrix();

        // 2
        this.scene.pushMatrix();
        this.scene.translate(-5.7, 0, 0.5);
        this.tree.display();
        this.scene.popMatrix();

        // 3
        this.scene.pushMatrix();
        this.scene.translate(-1.5, 0, -0.25);
        this.tree.display();
        this.scene.popMatrix();

        // 4
        this.scene.pushMatrix();
        this.scene.translate(2.5, 0, 0);
        this.tree.display();
        this.scene.popMatrix();

        // 5
        this.scene.pushMatrix();
        this.scene.translate(6.7, 0, 0.666);
        this.tree.display();
        this.scene.popMatrix();

        // 6
        this.scene.pushMatrix();
        this.scene.translate(11, 0, -0.89);
        this.tree.display();
        this.scene.popMatrix();

    }

    enableNormalViz() {
        this.tree.enableNormalViz();
    }
    disableNormalViz() {
        this.tree.disableNormalViz();
    }
}

