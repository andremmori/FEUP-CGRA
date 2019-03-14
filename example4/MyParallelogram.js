/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
    constructor(scene, coords) {
        super(scene);
        this.initBuffers();
        if (coords != undefined)
            this.updateTexCoords(coords);
    }
    initBuffers() {
        this.vertices = [
            0, 0, 0,	//0
            1, 0, 0,	//1
            1, 1, 0,	//2
            2, 0, 0,	//3
            2, 1, 0,	//4
            3, 1, 0,	//5
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            0, 1, 2,
            1, 4, 2,
            1, 3, 4,
            3, 5, 4,
            // inverter para aparecer do outro lado
            2, 1, 0,
            2, 4, 1,
            4, 3, 1,
            4, 5, 3,
        ];
        
        this.normals = [
            0, 0, 1,
            0, 0, 0,
            0, 0, 1,
            0, 0, 1,
            0, 0, 0,
            0, 0, 1,
        ];
        

        this.texCoords = [
            1, 1,
            0.75, 1,
            0.75, 0.75,
            0.5, 1,
            0.5, 0.75,
            0.25, 0.75,

        ]   

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();

               
    }
    /**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the quad
	 * @param {Array} coords - Array of texture coordinates
	 */
    updateTexCoords(coords) {
        this.texCoords = [...coords];
        this.updateTexCoordsGLBuffers();
    }
}

