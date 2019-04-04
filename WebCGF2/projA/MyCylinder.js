/**
* MyCylinder
* @constructor
*/
class MyCylinder extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        
        var alphaAng = 2 * Math.PI / this.slices;
        var step = 1 / this.stacks;
        
        for (let i = 0; i <= this.slices; ++i) {
                        
            for (let j = 0; j <= this.stacks; ++j) {
                
                this.vertices.push(
                    Math.cos(alphaAng * i), j * step, -Math.sin(alphaAng * i)
                );

             /*   this.texCoords.push(
                    i * 1 / this.slices, j * 1 / this.stacks
                ); */

                this.normals.push(
                    Math.cos(alphaAng * i), 0, -Math.sin(alphaAng * i)
                );
           }
        }

        for (let i = 0; i < this.slices; ++i) {
            for (let j = 0; j < this.stacks; ++j) {
                this.indices.push(
                    (i + 1) * (this.stacks + 1) + j, i * (this.stacks + 1) + j + 1, i * (this.stacks + 1) + j,
                    i * (this.stacks + 1) + j + 1, (i + 1) * (this.stacks + 1) + j, (i + 1) * (this.stacks + 1) + j + 1
                );
            }
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    updateBuffers(complexity) {
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


