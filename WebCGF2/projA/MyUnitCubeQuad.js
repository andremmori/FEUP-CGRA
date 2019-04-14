/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
    constructor(scene, topTexture, bottomTexture, sideTexture) {
        super(scene);
        this.quad = new MyQuad(this.scene);

        this.quadTop = new CGFappearance(this.scene);
        this.quadTop.loadTexture(topTexture);
        this.quadTop.setTextureWrap('REPEAT', 'REPEAT');

        this.quadBottom = new CGFappearance(this.scene);
        this.quadBottom.loadTexture(bottomTexture);
        this.quadBottom.setTextureWrap('REPEAT', 'REPEAT');

        this.quadSide = new CGFappearance(this.scene);
        this.quadSide.loadTexture(sideTexture);
        this.quadSide.setTextureWrap('REPEAT', 'REPEAT');

    }

    convertAng(ang) {
        return (Math.PI * ang / 180);
    }

    display() {
        //Top
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(this.convertAng(90), -1,0,0);
        this.quadTop.apply();
        this.quad.display();
        this.scene.popMatrix();
        //Bottom
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(this.convertAng(-90), -1, 0, 0);
        this.quadBottom.apply();
        this.quad.display();
        this.scene.popMatrix();
        //Sides
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(this.convertAng(-90), 0, -1, 0);
        this.quadSide.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(this.convertAng(90), 0, -1, 0);
        this.quadSide.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.quadSide.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(this.convertAng(-180), 0, -1, 0);
        this.quadSide.apply();
        this.quad.display();
        this.scene.popMatrix();

    }


    enableNormalViz() {
        this.quad.enableNormalViz();
    }
    disableNormalViz() {
        this.quad.disableNormalViz();
    }
}

