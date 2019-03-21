/**
* MyPrism
* @constructor
*/
class MyPrism extends CGFobject {
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

        for (let i = 0; i < this.slices; i++) {

            var sa = Math.sin(alphaAng * i);
            var saa = Math.sin(alphaAng * (i + 1));
            var ca = Math.cos(alphaAng * i);
            var caa = Math.cos(alphaAng * (i + 1));

            for (let j = 0; j < this.stacks; j++) {

                this.vertices.push(
                    ca, sa, j * step,
                    caa, saa, j * step,
                    ca, sa, (j + 1) * step,
                    caa, saa, (j + 1) * step
                );

                
                this.indices.push(
                    4 * i * this.stacks + 4 * j + 0, 4 * i * this.stacks + 4 * j + 1, 4 * i * this.stacks + 4 * j + 2, 
                    4 * i * this.stacks + 4 * j + 3, 4 * i * this.stacks + 4 * j + 2, 4 * i * this.stacks + 4 * j + 1
                ); 

            }

            // triangle normal computed by cross product of two edges
            var normal = [
                saa - sa,
                ca * saa - sa * caa,
                caa - ca
            ];

            // normalization
            var nsize = Math.sqrt(
                normal[0] * normal[0] +
                normal[1] * normal[1] +
                normal[2] * normal[2]
            );
            normal[0] /= nsize;
            normal[1] /= nsize;
            normal[2] /= nsize;

            // push normal once for each vertex of this triangle
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);

           
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


