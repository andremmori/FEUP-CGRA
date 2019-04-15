/**
 * MyFire
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyFire extends CGFobject {
    constructor(scene, woodText) {
        super(scene);

        this.cylinder = new MyCylinder(this.scene, 6, 2);
        this.woodText = woodText;

    }

    convertAng(ang) {
        return (Math.PI * ang / 180);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.rotate(this.convertAng(30), 0, 0, 1);
        this.scene.scale(1/4,2,1/4);
        this.woodText.apply();
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2, 0, 0);
        this.scene.rotate(this.convertAng(-30), 0, 0, 1);
        this.scene.scale(1/4,2,1/4);
        this.woodText.apply();
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 0, -1);
        this.scene.rotate(this.convertAng(90), 0, 1, 0);
        this.scene.rotate(this.convertAng(30), 0, 0, 1);
        this.scene.scale(1 / 4, 2, 1 / 4);
        this.woodText.apply();
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 1);
        this.scene.rotate(this.convertAng(90), 0, 1, 0);
        this.scene.rotate(this.convertAng(-30), 0, 0, 1);
        this.scene.scale(1 / 4, 2, 1 / 4);
        this.woodText.apply();
        this.cylinder.display();
        this.scene.popMatrix();

        /*
        this.scene.pushMatrix();
        this.scene.scale(this.trunkRadius, this.trunkHeight, this.trunkRadius);
        this.trunkTexture.apply();
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, this.trunkHeight, 0);
        this.scene.scale(this.treeTopRadius, this.treeTopHeight, this.treeTopRadius);
        this.topTexture.apply();
        this.cone.display();
        this.scene.popMatrix(); */
    }

    enableNormalViz() {
        this.cylinder.enableNormalViz();
    }
    disableNormalViz() {
        this.cylinder.disableNormalViz();
    }
}

