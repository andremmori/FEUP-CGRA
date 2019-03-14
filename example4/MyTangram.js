/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.triangleBig = new MyTriangleBig(this.scene);
        this.triangleSmall = new MyTriangleSmall(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.diamond = new MyDiamond(this.scene);

        this.colorBlue = new CGFappearance(this.scene);
        this.colorBlue.setAmbient(0.007, 0.6, 1.0, 1.0);
        this.colorBlue.setDiffuse(0.007, 0.6, 1.0, 1.0);
        this.colorBlue.setSpecular(0.007, 0.6, 1.0, 1.0);
        this.colorBlue.setShininess(50.0);

        this.colorPink = new CGFappearance(this.scene);
        this.colorPink.setAmbient(1, 0.61, 0.82, 1.0);
        this.colorPink.setDiffuse(1, 0.61, 0.82, 1.0);
        this.colorPink.setSpecular(1, 0.61, 0.82, 1.0);
        this.colorPink.setShininess(50.0);

        this.colorOrange = new CGFappearance(this.scene);
        this.colorOrange.setAmbient(1, 0.61, 0.003, 1);
        this.colorOrange.setDiffuse(1, 0.61, 0.003, 1);
        this.colorOrange.setSpecular(1, 0.61, 0.003, 1);
        this.colorOrange.setShininess(50.0);

        this.colorGreen = new CGFappearance(this.scene);
        this.colorGreen.setAmbient(0, 1, 0.004, 1);
        this.colorGreen.setDiffuse(0, 1, 0.004, 1);
        this.colorGreen.setSpecular(0, 1, 0.004, 1);
        this.colorGreen.setShininess(50.0);

        this.colorYellow = new CGFappearance(this.scene);
        this.colorYellow.setAmbient(1, 1, 0.004, 1);
        this.colorYellow.setDiffuse(1, 1, 0.004, 1);
        this.colorYellow.setSpecular(1, 1, 0.004, 1);
        this.colorYellow.setShininess(50.0);

        this.colorRed = new CGFappearance(this.scene);
        this.colorRed.setAmbient(1, 0.07, 0.07, 1);
        this.colorRed.setDiffuse(1, 0.07, 0.07, 1);
        this.colorRed.setSpecular(1, 0.07, 0.07, 1);
        this.colorRed.setShininess(50.0);

        this.colorPurple = new CGFappearance(this.scene);
        this.colorPurple.setAmbient(0.66, 0.31, 0.76, 1);
        this.colorPurple.setDiffuse(0.66, 0.31, 0.76, 1);
        this.colorPurple.setSpecular(0.66, 0.31, 0.76, 1);
        this.colorPurple.setShininess(50.0);
    }

    convertAng(ang) {
        return (Math.PI * ang / 180);
    }

    display() {
        // BLUE
        this.scene.pushMatrix();
        this.scene.rotate(this.convertAng(180), 0, 0, 1);
        this.scene.translate(0, -2, 0);
        this.colorBlue.apply();
        this.triangleBig.display();
        this.scene.popMatrix();
        // PINK
        this.scene.pushMatrix();
        this.scene.translate(1, 3, 0);
        this.scene.scale(Math.sqrt(2) / 2, Math.sqrt(2) / 2, Math.sqrt(2) / 2);
        this.scene.rotate(this.convertAng(-135), 0, 0, 1);
        this.colorPink.apply();
        this.triangleBig.display();
        this.scene.popMatrix();
        // ORANGE
        this.scene.pushMatrix();
        this.scene.rotate(this.convertAng(-135), 0, 0, 1);
        this.colorOrange.apply();
        this.triangleBig.display();
        this.scene.popMatrix();
        // GREEN
        this.scene.pushMatrix();
        this.scene.translate(-0.3335, 2.9, 0);
        this.scene.rotate(this.convertAng(20), 0, 0, 1);
        this.scene.customMaterial.apply();
        this.diamond.display();
        this.scene.popMatrix();
        // YELLOW
        this.scene.pushMatrix();
        this.scene.translate(1.40, -1.40, 0);
        this.scene.scale(1, -1, 1);
        this.scene.rotate(this.convertAng(135), 0, 0, 1);
        this.colorYellow.apply();
        this.parallelogram.display();
        this.scene.popMatrix();
        // RED
        this.scene.pushMatrix();
        this.scene.translate(-1.9, -1.9, 0);
        this.scene.rotate(this.convertAng(45), 0, 0, 1);
        this.colorRed.apply();
        this.triangleSmall.display();
        this.scene.popMatrix();
        // PURPLE
        this.scene.pushMatrix();
        this.scene.translate(-1.45, -3.5, 0);
        this.scene.rotate(this.convertAng(45), 0, 0, 1);
        this.colorPurple.apply();
        this.triangleSmall.display();
        this.scene.popMatrix();

        
    }
    enableNormalViz(){
        this.triangleBig.enableNormalViz();
        this.triangleSmall.enableNormalViz();
        this.diamond.enableNormalViz();
        this.parallelogram.enableNormalViz();
    }
    disableNormalViz() {
        this.triangleBig.disableNormalViz();
        this.triangleSmall.disableNormalViz();
        this.diamond.disableNormalViz();
        this.parallelogram.disableNormalViz();
    }
    
}

