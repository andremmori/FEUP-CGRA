/**
 * MyTree
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTree extends CGFobject {
    constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) {
        super(scene);
        this.trunkHeight = trunkHeight;
        this.trunkRadius = trunkRadius;
        this.trunkTexture = trunkTexture;
        this.treeTopHeight = treeTopHeight;
        this.treeTopRadius = treeTopRadius;
        this.treeTopTexture = treeTopTexture;

        this.trunkTexture = new CGFappearance(this.scene);
        this.trunkTexture.loadTexture('images/treeTrunk.jpg');
        this.trunkTexture.setTextureWrap('REPEAT', 'REPEAT');

        this.topTexture = new CGFappearance(this.scene);
        this.topTexture.loadTexture('images/mineTop.png');
        this.topTexture.setTextureWrap('REPEAT', 'REPEAT');

        this.cylinder = new MyCylinder(this.scene, 8, 2);
        this.cone = new MyCone(this.scene, 8, 2);
        

    }

    convertAng(ang) {
        return (Math.PI * ang / 180);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.scale(this.trunkRadius, this.trunkHeight, this.trunkRadius);
        this.trunkTexture.apply();
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, this.trunkHeight,0);
        this.scene.scale(this.treeTopRadius, this.treeTopHeight, this.treeTopRadius);
        this.topTexture.apply();
        this.cone.display();
        this.scene.popMatrix();
    }

    enableNormalViz() {
        this.cone.enableNormalViz();
        this.cylinder.enableNormalViz();
    }
    disableNormalViz() {
        this.cone.disableNormalViz();
        this.cylinder.disableNormalViz();
    }
}

