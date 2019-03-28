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
            1, 1, 0,	//1
            2, 0, 0,	//2
            3, 1, 0,	//3
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            0, 2, 1,
            1, 2, 3,
            // inverter para aparecer do outro lado
            1, 2, 0,
            3, 2, 1,
        ];
        
        this.normals = [
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
        ];
        

        this.texCoords = [
            0.5, 1,
            1, 1,
            0.25, 0.75,
            0.75, 0.75,
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

