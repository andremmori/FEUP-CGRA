/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyWing extends CGFobject {
    constructor(scene, x, z, ang) {
        super(scene);

        this.cubo = new MyUnitCube(this.scene);
        this.triangle = new MyTriangleSmall(this.scene);
        this.x = x;
        this.z = z;
        this.ang = ang;

    }

    convertAng(ang) {
        return (Math.PI * ang / 180);
    }
    
    display() {
        
        //cubo
        this.scene.pushMatrix();
        this.scene.translate(0,0,this.x);
        this.scene.scale(2, 0, 2);
        this.cubo.display();
        this.scene.popMatrix();

        //triangulos
        this.scene.pushMatrix();
        this.scene.translate(0, 0, this.z);
        this.scene.rotate(this.convertAng(this.ang), 1, 0, 0);
        this.triangle.display();
        this.scene.popMatrix();

        
    }

    enableNormalViz() {
        this.cubo.enableNormalViz();
    }
    disableNormalViz() {
        this.cubo.disableNormalViz();
    }
}

