/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);
        this.orientacao = 0;
        this.velocidade = 0;
        this.x = 0;
        this.y = 3;
        this.z = 0;

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
       
        this.movement();
        // Corpo
        this.scene.pushMatrix();
        
        this.scene.translate(0, this.y+3, 0);
        this.scene.scale(2, 2, 2);
        this.birdColor.apply();
        this.cubo.display();
        this.scene.popMatrix();

        // Cabeca
        this.scene.pushMatrix();
        
        this.scene.translate(0 + 1.5, this.y+ 4.25, 0);
        this.scene.scale(2, 2, 2);
        this.birdColor.apply();
        this.cubo.display();
        this.scene.popMatrix();

        // 
        this.scene.pushMatrix();
        
        this.scene.translate(0 + 2.5, this.y + 5, 0+0.25);
        this.scene.rotate(this.convertAng(-30), 1, 0, 0);
        this.scene.scale(0.6, 0.1, 0.6);
        this.olhoColor.apply();
        this.cubo.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        
        this.scene.translate(0 + 2.5, this.y + 5, 0 - 0.25);
        this.scene.rotate(this.convertAng(30), 1, 0, 0);
        this.scene.scale(0.6, 0.1, 0.6);
        this.olhoColor.apply();
        this.cubo.display();
        this.scene.popMatrix();

        
        // Olhos
        // Dir
        this.scene.pushMatrix();
        
        this.scene.translate(0 + 2.5, this.y+4.5, 0+0.5);
        this.scene.scale(0.3, 0.3, 0.3);
        this.olhoColor.apply();
        this.cubo.display();
        this.scene.popMatrix();
        // Esq
        this.scene.pushMatrix();
        
        this.scene.translate(0 + 2.5, this.y + 4.5, 0 - 0.5);
        this.scene.scale(0.3, 0.3, 0.3);
        this.olhoColor.apply();
        this.cubo.display();
        this.scene.popMatrix();

        // Bico
        this.scene.pushMatrix();
        
        this.scene.translate(0 + 2.5, this.y+4, 0);
        this.scene.rotate(this.convertAng(-90), 0, 0, 1);
        this.scene.scale(0.3, 0.3, 0.3);
        this.bicoColor.apply();
        this.bico.display();
        this.scene.popMatrix();

        // Calda
        this.scene.pushMatrix();
        
        this.scene.translate(0 - 1, this.y + 3.5, 0);
        this.scene.rotate(this.convertAng(60), 0, 0, 1);
        this.scene.scale(0.25, 1, 0.25);
        this.birdColor.apply();
        this.tail.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        
        this.scene.translate(0 - 1, this.y + 3.5, 0);
        this.scene.rotate(this.convertAng(115), 0, 0, 1);
        this.scene.scale(0.25, 1, 0.25);
        this.birdColor.apply();
        this.tail.display();
        this.scene.popMatrix();

        // Asa
        this.scene.pushMatrix();
        
        this.scene.translate(0, this.y+3, 0-2);
        this.scene.rotate(this.convertAng(15), 1, 0, 0);
        this.scene.scale(2, 0, 2);
        this.birdColor.apply();
        this.cubo.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        
        this.scene.translate(0, this.y + 3, 0+2);
        this.scene.rotate(this.convertAng(-15), 1, 0, 0);
        this.scene.scale(2, 0, 2);
        this.birdColor.apply();
        this.cubo.display();
        this.scene.popMatrix();
        //triangulos
        this.scene.pushMatrix();
        
        this.scene.translate(0, this.y + 3.25, 0-3);
        this.scene.rotate(this.convertAng(-60), 1, 0, 0);
        this.scene.scale(1, 1, 1);
        this.birdColor.apply();
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        
        this.scene.translate(0, this.y + 3.25, 0 + 3);
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
            this.x += Math.cos(-this.orientacao);
            this.z += Math.sin(-this.orientacao);
        }

        else if (direction == "S") {
            this.x -= Math.cos(-this.orientacao);
            this.z -= Math.sin(-this.orientacao);
        }

        else if (direction == "A") {
            this.turn((timeFactor / 100 % 1000));    
        }

        else if (direction == "D") {
            this.turn(-1*(timeFactor / 100 % 1000));                
        }

    }

    turn(v){
        this.orientacao += this.convertAng(0.5)*v/3.5;
    }

    accelerate(v){

    }

    movement(){
        this.scene.translate(this.x, 0, this.z);
        this.scene.rotate(this.orientacao, 0, 1, 0);
    }
}

