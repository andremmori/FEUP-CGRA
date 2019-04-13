/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVoxelHill extends CGFobject {
    constructor(scene, height) {
        super(scene);

        this.quad = new MyUnitCubeQuad(this.scene, 'images/mineTop.png', 'images/mineBottom.png', 'images/mineSide.png');
        this.level = height;

    }

    display() {
        
        for(var i = 0; i <= this.level; i++)
        {
            for(var j = 0; j < (2*i-1); j++)
            {
                for (var k = 0; k < (2 * i - 1); k++)
                {
                    this.scene.pushMatrix();
                    this.scene.translate(-i+j+1, (this.level-i+0.5), -i+k+1);
                    this.quad.display();
                    this.scene.popMatrix();
                }
            }
        }

    }

    enableNormalViz() {
        this.quad.enableNormalViz();
    }
    disableNormalViz() {
        this.quad.disableNormalViz();
    }
}

