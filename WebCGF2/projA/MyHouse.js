/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {
    constructor(scene) {
        super(scene);

        this.cube = new MyUnitCubeQuad(this.scene, null, null, null);
        this.pyramid= new MyPyramid(this.scene, 4, 2);
        this.prism = new MyPrism(this.scene, 7, 2);

    }
    convertAng(ang) {
        return (Math.PI * ang / 180);
    }

    display() {
        // Cube
        this.scene.pushMatrix();
        this.scene.scale(2,2,2);
        this.scene.translate(0, 0.5, 0);
        this.cube.display();
        this.scene.popMatrix();

        // Pyramid
        this.scene.pushMatrix();
        this.scene.rotate(this.convertAng(45),0, 1, 0);
        this.scene.scale(2.5, 2, 2.5);
        this.scene.translate(0, 1, 0);
        this.pyramid.display();
        this.scene.popMatrix();

        // GARAGE
        this.scene.pushMatrix();
        this.scene.translate(2, 2, 0);
        this.scene.scale(2.5, 0.25, 2);
        this.scene.translate(0, -0.5, 0);
        this.cube.display();
        this.scene.popMatrix();

        // Column 1
        this.scene.pushMatrix();
        this.scene.translate(3, 0, -0.75);
        this.scene.scale(0.15, 2, 0.15);
        this.prism.display();
        this.scene.popMatrix();

        // Column 2
        this.scene.pushMatrix();
        this.scene.translate(3, 0, 0.75);
        this.scene.scale(0.15, 2, 0.15);
        this.prism.display();
        this.scene.popMatrix();

    }

    enableNormalViz() {
        this.pyramid.enableNormalViz();
        this.cube.enableNormalViz();
        this.prism.enableNormalViz();
    }
    disableNormalViz() {
        this.pyramid.disableNormalViz();
        this.cube.disableNormalViz();
        this.prism.disableNormalViz();
    }
}

