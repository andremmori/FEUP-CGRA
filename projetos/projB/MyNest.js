/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyNest extends CGFobject {
    constructor(scene) {
        super(scene);

        this.branch = new MyTreeBranch(this.scene);
    }
    convertAng(ang) {
        return (Math.PI * ang / 180);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(3, 5, -5.5);
        this.branch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(this.convertAng(90), 0, 1, 0);
        this.scene.translate(3, 5, 1);
        this.branch.display();
        this.scene.popMatrix();

    }
}

