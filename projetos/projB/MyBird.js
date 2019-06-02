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
        this.isDown = false;
        this.time;
        this.delta;
        this.hasBranch = 0;


        this.cubo = new MyUnitCube(this.scene);
        this.bico = new MyPyramid(this.scene, 4, 2);
        this.tail = new MyCylinder(this.scene, 7, 2);
        this.sobs = new MyQuad(this.scene);
        this.triangle = new MyTriangleSmall(this.scene);
        this.wingL = new MyWing(this.scene, -2, -2.9, -60);
        this.wingR = new MyWing(this.scene, 2, 2.8, 60);
        this.branch = new MyTreeBranch(this.scene, 0, 0, 0);
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

        if (this.hasBranch) {
            this.scene.pushMatrix();
            this.scene.translate(2.5, this.y + 4, 0);
            this.branch.display();
            this.scene.popMatrix();
        }
        //Asa esquerda
        this.scene.pushMatrix();
        this.scene.translate(0, this.y + 3, 0);
        this.scene.rotate(-this.wingTime, 1, 0, 0);
        this.birdColor.apply();
        this.wingL.display();
        this.scene.popMatrix();

        //Asa Direita
        this.scene.pushMatrix();
        this.scene.translate(0, this.y + 3, 0);
        this.scene.rotate(this.wingTime, 1, 0, 0);
        this.birdColor.apply();
        this.wingR.display();
        this.scene.popMatrix();

        // Corpo
        this.scene.pushMatrix();
        this.scene.translate(0, this.y + 3, 0);
        this.scene.scale(2, 2.5, 2);
        this.birdColor.apply();
        this.cubo.display();
        this.scene.popMatrix();

        // Cabeca
        this.scene.pushMatrix();
        this.scene.translate(0 + 1.5, this.y + 4.25, 0);
        this.scene.scale(2, 2, 2);
        this.birdColor.apply();
        this.cubo.display();
        this.scene.popMatrix();

        // 
        this.scene.pushMatrix();
        this.scene.translate(0 + 2.5, this.y + 5, 0 + 0.25);
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
        this.scene.translate(0 + 2.5, this.y + 4.5, 0 + 0.5);
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
        this.scene.translate(0 + 2.5, this.y + 4, 0);
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

    update(timeFactor, speedFactor, direction) {
        this.velocidade = this.scene.speedFactor;
        if (direction == "W") {
            if (this.velocidade < 3.0)
                this.accelerate(0.1);
        }

        if (direction == "S") {
            if (this.velocidade > 0.1)
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

    turn(v) {
        this.orientacao += this.convertAng(10) * v;
    }

    accelerate(v) {

        this.velocidade += v;
        this.scene.speedFactor += v;
    }

    movement() {
        this.scene.translate((this.x += Math.cos(-this.orientacao) * this.velocidade * 0.1), 0, (this.z += Math.sin(-this.orientacao) * this.velocidade * 0.1));
        this.scene.rotate(this.orientacao, 0, 1, 0);
        if (this.isDown) {
            if (this.time - this.delta <= 1000)
                this.scene.translate(0, this.y -= 0.15, 0);
            else if (this.time - this.delta <= 2000)
                this.scene.translate(0, this.y += 0.15, 0);
            else
                this.isDown = false;

            if (this.hasBranch == 0) {
                if (this.scene.displayBranch1) {
                    if (Math.abs(this.x - this.scene.branch1.x) <= 5)
                        if (Math.abs(this.z - this.scene.branch1.z) <= 5 || Math.abs(this.z - (this.scene.branch1.z+6)) <= 5) {
                            this.hasBranch = 1;
                            this.scene.displayBranch1 = false;
                            return;
                        }
                }

                 if (this.scene.displayBranch2) {
                    if (Math.abs(this.x - this.scene.branch2.x) <= 5)
                        if (Math.abs(this.z - this.scene.branch2.z) <= 5 || Math.abs(this.z - (this.scene.branch2.z + 6)) <= 5) {
                            this.hasBranch = 2;
                            this.scene.displayBranch2 = false;
                            return;
                        }
                }

                 if (this.scene.displayBranch3) {
                    if (Math.abs(this.x - this.scene.branch3.x) <= 5)
                        if (Math.abs(this.z - this.scene.branch3.z) <= 5 || Math.abs(this.z - (this.scene.branch3.z + 6)) <= 5) {
                            this.hasBranch = 3;
                            this.scene.displayBranch3 = false;
                            return;
                        }
                }


                 if (this.scene.displayBranch4) {
                    if (Math.abs(this.x - this.scene.branch4.x) <= 5)
                        if (Math.abs(this.z - this.scene.branch4.z) <= 5 || Math.abs(this.z - (this.scene.branch4.z + 6)) <= 5) {
                            this.hasBranch = 4;
                            this.scene.displayBranch4 = false;
                            return;
                        }
                }
            }
            else if (this.scene.gui.isKeyPressed("KeyP") && this.isOnNest()) {
                if (this.hasBranch == 1) {
                    this.scene.nest.branch1 = true;
                }
                if (this.hasBranch == 2) {
                    this.scene.nest.branch2 = true;
                }
                if (this.hasBranch == 3) {
                    this.scene.nest.branch3 = true;
                }
                if (this.hasBranch == 4) {
                    this.scene.nest.branch4 = true;
                }
                this.hasBranch = 0;
            }
        }
    }

    animation(timeFactor, direction) {
        this.time = timeFactor;
        this.scene.translate(0, (this.y += Math.sin(timeFactor / 100 % 1000) / 15), 0)
        if (this.velocidade != 0)
            this.wingTime = Math.sin(timeFactor / 100 % 1000) / 15 * this.velocidade;
        else
            this.wingTime = Math.sin(timeFactor / 100 % 1000) / 15 * this.scene.speedFactor;
        if (direction == "P") {
            this.down();
        }
    }

    down() {
        if (!this.isDown) {
            this.delta = this.time;
        }
        this.isDown = true;

    }

    isOnNest(){
        if(Math.abs(this.x - 0.5) <= 3 && Math.abs(this.z - (-18.5)) <= 3)
            return true;

        return false;
    }

}

