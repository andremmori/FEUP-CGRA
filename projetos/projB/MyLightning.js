/**
 * MyLightning
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLightning extends MyLSystem {
    constructor(scene) {
        super(scene);
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

}
