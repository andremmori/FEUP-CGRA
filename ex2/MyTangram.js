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
        this.cube = new MyUnitCube(this.scene);
    }

    display(){
        // BLUE
        this.scene.pushMatrix();
        this.scene.rotate(this.scene.convertAng(180), 0, 0, 1);
        this.scene.translate(0, -2, 0);
        this.triangleBig.display();
        this.scene.popMatrix();
        // PINK
        this.scene.pushMatrix();
        this.scene.translate(1, 3, 0);
        this.scene.scale(Math.sqrt(2) / 2, Math.sqrt(2) / 2, Math.sqrt(2) / 2);
        this.scene.rotate(this.scene.convertAng(-135), 0, 0, 1);
        this.triangleBig.display();
        this.scene.popMatrix();
        // ORANGE
        this.scene.pushMatrix();
        this.scene.rotate(this.scene.convertAng(-135), 0, 0, 1);
        this.triangleBig.display();
        this.scene.popMatrix();
        // GREEN
        this.scene.pushMatrix();
        this.scene.translate(-0.3335, 2.9, 0);
        this.scene.rotate(this.scene.convertAng(20), 0, 0, 1);
        this.diamond.display();
        this.scene.popMatrix();
        // YELLOW
        this.scene.pushMatrix();
        this.scene.translate(1.40, -1.40, 0);
        this.scene.scale(1, -1, 1);
        this.scene.rotate(this.scene.convertAng(135), 0, 0, 1);
        this.parallelogram.display();
        this.scene.popMatrix();
        // RED
        this.scene.pushMatrix();
        this.scene.translate(-1.9, -1.9, 0);
        this.scene.rotate(this.scene.convertAng(45), 0, 0, 1);
        this.triangleSmall.display();
        this.scene.popMatrix();
        // PURPLE
        this.scene.pushMatrix();
        this.scene.translate(-1.45, -3.5, 0);
        this.scene.rotate(this.scene.convertAng(45), 0, 0, 1);
        this.triangleSmall.display();
        this.scene.popMatrix();
        // CUBE
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.55);
        this.scene.scale(8.5,8.5, 1);        
        this.cube.display();
        this.scene.popMatrix();        

    }
}

