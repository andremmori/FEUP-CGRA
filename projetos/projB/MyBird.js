/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBird extends CGFobject {
    constructor(scene, orientacao, velocidade, posicao) {
        super(scene);
        this.orientacao = orientacao;
        this.velocidade = velocidade;
        this.posicao = posicao;

        this.cubo = new MyUnitCube(this.scene);
        this.bico = new MyPyramid(this.scene, 4, 2);
        this.tail = new MyCylinder(this.scene, 7, 2);
        this.sobs = new MyQuad(this.scene);
        this.triangle = new MyTriangleSmall(this.scene);

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
        this.scene.translate(this.posicao[0], this.posicao[1]+3, this.posicao[2]);
        this.scene.scale(2, 2, 2);
        this.birdColor.apply();
        this.cubo.display();
        this.scene.popMatrix();

        // Cabeca
        this.scene.pushMatrix();
        this.scene.translate(this.posicao[0] + 1.5, this.posicao[1]+ 4.25, this.posicao[2]);
        this.scene.scale(2, 2, 2);
        this.birdColor.apply();
        this.cubo.display();
        this.scene.popMatrix();

        // 
        this.scene.pushMatrix();
        this.scene.translate(this.posicao[0] + 2.5, this.posicao[1] + 5, this.posicao[2]+0.25);
        this.scene.rotate(this.convertAng(-30), 1, 0, 0);
        this.scene.scale(0.6, 0.1, 0.6);
        this.olhoColor.apply();
        this.cubo.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(this.posicao[0] + 2.5, this.posicao[1] + 5, this.posicao[2] - 0.25);
        this.scene.rotate(this.convertAng(30), 1, 0, 0);
        this.scene.scale(0.6, 0.1, 0.6);
        this.olhoColor.apply();
        this.cubo.display();
        this.scene.popMatrix();

        
        // Olhos
        // Dir
        this.scene.pushMatrix();
        this.scene.translate(this.posicao[0] + 2.5, this.posicao[1]+4.5, this.posicao[2]+0.5);
        this.scene.scale(0.3, 0.3, 0.3);
        this.olhoColor.apply();
        this.cubo.display();
        this.scene.popMatrix();
        // Esq
        this.scene.pushMatrix();
        this.scene.translate(this.posicao[0] + 2.5, this.posicao[1] + 4.5, this.posicao[2] - 0.5);
        this.scene.scale(0.3, 0.3, 0.3);
        this.olhoColor.apply();
        this.cubo.display();
        this.scene.popMatrix();

        // Bico
        this.scene.pushMatrix();
        this.scene.translate(this.posicao[0] + 2.5, this.posicao[1]+4, this.posicao[2]);
        this.scene.rotate(this.convertAng(-90), 0, 0, 1);
        this.scene.scale(0.3, 0.3, 0.3);
        this.bicoColor.apply();
        this.bico.display();
        this.scene.popMatrix();

        // Calda
        this.scene.pushMatrix();
        this.scene.translate(this.posicao[0] - 1, this.posicao[1] + 3.5, this.posicao[2]);
        this.scene.rotate(this.convertAng(60), 0, 0, 1);
        this.scene.scale(0.25, 1, 0.25);
        this.birdColor.apply();
        this.tail.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(this.posicao[0] - 1, this.posicao[1] + 3.5, this.posicao[2]);
        this.scene.rotate(this.convertAng(115), 0, 0, 1);
        this.scene.scale(0.25, 1, 0.25);
        this.birdColor.apply();
        this.tail.display();
        this.scene.popMatrix();

        // Asa
        this.scene.pushMatrix();
        this.scene.translate(this.posicao[0], this.posicao[1]+3, this.posicao[2]-2);
        this.scene.rotate(this.convertAng(15), 1, 0, 0);
        this.scene.scale(2, 0, 2);
        this.birdColor.apply();
        this.cubo.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.posicao[0], this.posicao[1] + 3, this.posicao[2]+2);
        this.scene.rotate(this.convertAng(-15), 1, 0, 0);
        this.scene.scale(2, 0, 2);
        this.birdColor.apply();
        this.cubo.display();
        this.scene.popMatrix();
        //triangulos
        this.scene.pushMatrix();
        this.scene.translate(this.posicao[0], this.posicao[1] + 3.25, this.posicao[2]-3);
        this.scene.rotate(this.convertAng(-60), 1, 0, 0);
        this.scene.scale(1, 1, 1);
        this.birdColor.apply();
        this.triangle.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(this.posicao[0], this.posicao[1] + 3.25, this.posicao[2] + 3);
        this.scene.rotate(this.convertAng(60), 1, 0, 0);
        this.scene.scale(1, 1, 1);
        this.birdColor.apply();
        this.triangle.display();
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

    update(timeFactor, direction){
        if(direction == "W"){
            this.posicao[0]++;
        }
        else if (direction == "S") {
            this.posicao[0]--;
        }
        else if (direction == "A") {
            this.posicao[0]++;
        }
        else if (direction == "D") {
            this.posicao[0]++;
        }

    }
}

