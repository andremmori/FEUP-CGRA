/**
 * MyLightning
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLightning extends MyLSystem {
    constructor(scene) {
        super(scene);
        this.deph = 0;
        this.flag = false;
    }
    
    convertAng(ang) {
        return (Math.PI * ang / 180);
    }

    initGrammar() {
        this.grammar = {
            "F": new MyQuad(this.scene),
            "X": new MyQuad(this.scene)
        };
    }

    update(timeFactor){

        if(this.flag)
        {
            if(this.deph <=3)
            {
                this.deph++;
                this.scene.doGenerate();
                this.iterations = this.deph;
                this.iterate();
            }
            else if(this.deph > 3)
            {
                this.flag = false;
                this.deph = 0;
            }
        }
    }

    startAnimation(){
        this.flag = true;
    }

    display(){
        if(this.deph > 0){
            this.scene.pushMatrix();
            this.scene.scale(this.scale, this.scale, this.scale);

            var i;

            // percorre a cadeia de caracteres
            for (i = 0; i < this.axiom.length; ++i) {

                // verifica se sao caracteres especiais
                switch (this.axiom[i]) {
                    case "+":
                        // roda a esquerda
                        this.scene.rotate(this.angle, 0, 0, 1);
                        break;

                    case "-":
                        // roda a direita
                        this.scene.rotate(-this.angle, 0, 0, 1);
                        break;

                    case "[":
                        // push
                        this.scene.pushMatrix();
                        break;

                    case "]":
                        // pop
                        this.scene.popMatrix();
                        break;

                    case "'\'":
                        this.scene.rotate(-this.angle, 1, 0, 0);
                        break;


                    case "/":
                        this.scene.rotate(this.angle, 1, 0, 0);
                        break;

                    case "^":
                        this.scene.rotate(-this.angle, 0, 1, 0);
                        break;

                    case "&":
                        this.scene.rotate(this.angle, 0, 1, 0);
                        break;

                    // processa primitiva definida na gramatica, se existir
                    default:
                        var primitive = this.grammar[this.axiom[i]];

                        if (primitive) {
                            primitive.display();
                            this.scene.translate(0, 1, 0);
                        }
                        break;
                }
            }
            this.scene.popMatrix();
        }
    }
}

