/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);

        this.cubo = new MyUnitCube(this.scene);
        this.bico = new MyPyramid(this.scene, 4, 2);
        this.prism = new MyPrism(this.scene, 7, 2);
        this.sobs = new MyQuad(this.scene);

        this.olhoColor = new CGFappearance(this.scene);
        this.olhoColor.setAmbient(0, 0, 0, 1);
        this.olhoColor.setDiffuse(0, 0, 0, 1);
        this.olhoColor.setSpecular(0, 0, 0, 1);
        this.olhoColor.setShininess(10.0);

        this.birdColor = new CGFappearance(this.scene);
        this.birdColor.setAmbient(1, 1, 1, 1);
        this.birdColor.setDiffuse(0.8, 0.8, 0.8, 1);
        this.birdColor.setSpecular(0, 0, 0, 1);
        this.birdColor.setShininess(10.0);

        this.bicoColor = new CGFappearance(this.scene);
        this.bicoColor.setAmbient(0.835, 0.623, 0, 1);
        this.bicoColor.setDiffuse(0.835, 0.623, 0, 1);
        this.bicoColor.setSpecular(0.835, 0.623, 0, 1);
        this.bicoColor.setShininess(50.0);

    }
    convertAng(ang) {
        return (Math.PI * ang / 180);
    }

    display() {
        // Corpo
        this.scene.pushMatrix();
        this.scene.scale(2, 2, 2);
        this.scene.translate(0, 3, 0);
        this.birdColor.apply();
        this.cubo.display();
        this.scene.popMatrix();

        // Cabeca
        this.scene.pushMatrix();
        this.scene.scale(2, 2, 2);
        this.scene.translate(0.75, 3.75, 0);
        this.birdColor.apply();
        this.cubo.display();
        this.scene.popMatrix();

        // 
        this.scene.pushMatrix();
        this.scene.translate(2.5, 8, 0.25);
        this.scene.rotate(this.convertAng(-30), 1, 0, 0);
        this.scene.scale(0.6, 0.1, 0.6);
        this.olhoColor.apply();
        this.cubo.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(2.5, 8, -0.25);
        this.scene.rotate(this.convertAng(30), 1, 0, 0);
        this.scene.scale(0.6, 0.1, 0.6);
        this.olhoColor.apply();
        this.cubo.display();
        this.scene.popMatrix();

        
        // Olhos
        // Dir
        this.scene.pushMatrix();
        this.scene.translate(2.5, 7.5, 0.5);
        this.scene.scale(0.3, 0.3, 0.3);
        this.olhoColor.apply();
        this.cubo.display();
        this.scene.popMatrix();
        // Esq
        this.scene.pushMatrix();
        this.scene.translate(2.5, 7.5, -0.5);
        this.scene.scale(0.3, 0.3, 0.3);
        this.olhoColor.apply();
        this.cubo.display();
        this.scene.popMatrix();

        // Bico
        this.scene.pushMatrix();
        this.scene.translate(2.5, 7, 0);
        this.scene.rotate(this.convertAng(-90), 0, 0, 1);
        this.scene.scale(0.3, 0.3, 0.3);
        this.bicoColor.apply();
        this.bico.display();
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

