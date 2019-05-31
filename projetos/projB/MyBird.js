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
        this.wingTime = 0;
        this.x = 0;
        this.y = 3;
        this.z = 0;

        this.cubo = new MyUnitCube(this.scene);
        this.bico = new MyPyramid(this.scene, 4, 2);
        this.tail = new MyCylinder(this.scene, 7, 2);
        this.sobs = new MyQuad(this.scene);
        this.triangle = new MyTriangleSmall(this.scene);
        this.wingL = new MyWing(this.scene, -2, -2.9, -60);
        this.wingR = new MyWing(this.scene, 2, 2.8, 60);

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
        //Asa esquerda
        this.scene.pushMatrix();
        this.scene.translate(0,6,0);
        this.scene.rotate(-this.wingTime, 1,0,0);
        this.birdColor.apply();
        this.wingL.display();
        this.scene.popMatrix();
        
        //Asa Direita
        this.scene.pushMatrix();
        this.scene.translate(0, 6, 0);
        this.scene.rotate(this.wingTime, 1, 0, 0);
        this.birdColor.apply();
        this.wingR.display();
        this.scene.popMatrix();

        // Corpo
        this.scene.pushMatrix();        
        this.scene.translate(0, this.y+3, 0);
        this.scene.scale(2, 2.5, 2);
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
    
    update(speedFactor, direction){
        
        this.velocidade = this.scene.speedFactor;
        if(direction == "W"){
            this.accelerate(0.1);
        }

        if (direction == "S") {
            if(this.velocidade > 0.1)
                this.accelerate(-0.1);            
        }

        if (direction == "A") {
            this.turn((speedFactor));    
        }

        if (direction == "D") {
            this.turn(-1 * (speedFactor));                
        }

        if (direction == "R") {
            this.orientacao = 0;
            this.scene.speedFactor = 1;
            this.velocidade = 0;
            this.x = 0;
            this.y = 3;
            this.z = 0;
            this.wingTime = 0;
        }

    }

    turn(v){
        this.orientacao += this.convertAng(10)*v;
    }

    accelerate(v){
        if ((this.velocidade <= 3 && this.scene.speedFactor <= 3) && (this.velocidade >= 0 && this.scene.speedFactor >= 0.1))
        {
            this.velocidade += v;
            this.scene.speedFactor += v; 
        }
    }

    movement(){
        this.scene.translate((this.x += Math.cos(-this.orientacao) * this.velocidade * 0.1), 0, (this.z += Math.sin(-this.orientacao) * this.velocidade * 0.1));
        this.scene.rotate(this.orientacao, 0, 1, 0);
    }

    animation(timeFactor){
        this.scene.translate(0, (this.y += Math.sin(timeFactor/100%1000)/15), 0)
        if(this.velocidade != 0)
            this.wingTime = Math.sin(timeFactor / 100 % 1000) / 15 * this.velocidade;
        else
            this.wingTime = Math.sin(timeFactor / 100 % 1000) / 15 * this.scene.speedFactor;
    }
}

