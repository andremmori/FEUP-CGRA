/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyNest extends CGFobject {
    constructor(scene) {
        super(scene);

        this.branch1 = false;
        this.branch2 = false;
        this.branch3 = false;
        this.branch4 = false;

        this.branch = new MyTreeBranch(this.scene, 0, 0, -7);
    }
    convertAng(ang) {
        return (Math.PI * ang / 180);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(0.5, 5, 2.5);
        this.branch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(this.convertAng(90), 0, 1, 0);
        this.scene.translate(3, 5, 5);
        this.branch.display();
        this.scene.popMatrix();

        if (this.branch1) {
            this.scene.pushMatrix();
            this.scene.rotate(this.convertAng(45), 0, 1, 0);
            this.scene.translate(0.5, 5, 2.5);
            this.branch.display();
            this.scene.popMatrix();
        }
        if (this.branch2) {
            this.scene.pushMatrix();
            this.scene.rotate(this.convertAng(-45), 0, 1, 0);
            this.scene.translate(0.5, 5, 2.5);
            this.branch.display();
            this.scene.popMatrix();
         }
        if (this.branch3) {
            this.scene.pushMatrix();
            this.scene.rotate(this.convertAng(-45), 0, 1, 0);
            this.scene.translate(-3.5, 5, 2.5);
            this.branch.display();
            this.scene.popMatrix();
         }
        if (this.branch4) { 
            this.scene.pushMatrix();
            this.scene.rotate(this.convertAng(45), 0, 1, 0);
            this.scene.translate(4.5, 5, 2.5);
            this.branch.display();
            this.scene.popMatrix();
        }


    }
}

