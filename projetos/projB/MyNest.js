/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyNest extends CGFobject {
    constructor(scene) {
        super(scene);
    }
    convertAng(ang) {
        return (Math.PI * ang / 180);
    }

    display() {

    }

    enableNormalViz() {
    }
    disableNormalViz() {
    }
}

