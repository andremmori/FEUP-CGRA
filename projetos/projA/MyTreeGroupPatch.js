/**
 * MyTreeGroupPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeGroupPatch extends CGFobject {
    constructor(scene) {
        super(scene);
        
        this.tree = new MyTree(this.scene, 3,1,2,2,null,null);


    }


    display() {
        //  7 8 9
        //  4 5 6
        //  1 2 3

        // 5
        this.scene.pushMatrix();
        this.tree.display();
        this.scene.popMatrix();

        // 6
        this.scene.pushMatrix();
        this.scene.scale(1,1.5,1);
        this.scene.translate(5,0, 0.333);
        this.tree.display();
        this.scene.popMatrix();

        // 4
        this.scene.pushMatrix();
        this.scene.scale(1.5, 1.5, 1.5);
        this.scene.translate(-3, 0, -0.1);
        this.tree.display();
        this.scene.popMatrix();

        //8
        this.scene.pushMatrix();
        this.scene.scale(1, 0.7, 1.5);
        this.scene.translate(0.25, 0, -4);
        this.tree.display();
        this.scene.popMatrix();

        // 2
        this.scene.pushMatrix();
        this.scene.scale(0.75, 1.75, 1.2);
        this.scene.translate(-0.24, 0, 4.5);
        this.tree.display();
        this.scene.popMatrix();

        // 1
        this.scene.pushMatrix();
        this.scene.scale(0.75, 1.1, 1);
        this.scene.translate(-5, 0, 5);
        this.tree.display();
        this.scene.popMatrix();

        // 3
        this.scene.pushMatrix();
        this.scene.scale(1.1, 0.89, 1);
        this.scene.translate(4.8, 0, 5);
        this.tree.display();
        this.scene.popMatrix();

        // 7
        this.scene.pushMatrix();
        this.scene.scale(Math.PI/2, Math.PI/2, Math.PI/2);
        this.scene.translate(-3.5, 0, -3.75);
        this.tree.display();
        this.scene.popMatrix();

        // 9
        this.scene.pushMatrix();
        this.scene.scale(Math.E / 2, Math.PI / 2, Math.E / 2);
        this.scene.translate(3.5, 0, -3.75);
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

