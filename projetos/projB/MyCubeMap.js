/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
    constructor(scene, topTexture, bottomTexture, sideTextureR, sideTextureL, sideTextureF, sideTextureB) {
        super(scene);
        this.quad = new MyQuad(this.scene);

        this.quadTop = new CGFappearance(this.scene);
        this.quadTop.loadTexture(topTexture);
        this.quadTop.setTextureWrap('REPEAT', 'REPEAT');

        this.quadBottom = new CGFappearance(this.scene);
        this.quadBottom.loadTexture(bottomTexture);
        this.quadBottom.setTextureWrap('REPEAT', 'REPEAT');

        this.quadSideR = new CGFappearance(this.scene);
        this.quadSideR.loadTexture(sideTextureR);
        this.quadSideR.setTextureWrap('REPEAT', 'REPEAT');

        this.quadSideL = new CGFappearance(this.scene);
        this.quadSideL.loadTexture(sideTextureL);
        this.quadSideL.setTextureWrap('REPEAT', 'REPEAT');

        this.quadSideF = new CGFappearance(this.scene);
        this.quadSideF.loadTexture(sideTextureF);
        this.quadSideF.setTextureWrap('REPEAT', 'REPEAT');

        this.quadSideB = new CGFappearance(this.scene);
        this.quadSideB.loadTexture(sideTextureB);
        this.quadSideB.setTextureWrap('REPEAT', 'REPEAT');

    }

    convertAng(ang) {
        return (Math.PI * ang / 180);
    }

    display() {
        //Top
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(this.convertAng(90), 1, 0, 0);
        this.quadTop.apply();
        this.quad.display();
        this.scene.popMatrix();
        //Bottom
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(this.convertAng(-90), 1, 0, 0);
        this.quadBottom.apply();
        this.quad.display();
        this.scene.popMatrix();
        //Sides
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(this.convertAng(-90), 0, 1, 0);
        this.quadSideR.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.quadSideB.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(this.convertAng(90), 0, 1, 0);
        this.quadSideL.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.scene.rotate(this.convertAng(-180), 0, 1, 0);
        this.quadSideF.apply();
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

