/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [
            -0.5, -0.5, -0.5,	//inferior esquerdo tras		0
            -0.5, -0.5, 0.5,	//inferior esquerdo frente		1
            -0.5, 0.5, -0.5,	//superior esquerdo tras		2
            -0.5, 0.5, 0.5,		//superior esquerdo frente		3
            0.5, -0.5, -0.5,	//inferior direito tras			4
            0.5, -0.5, 0.5,		//inferior direito frente		5
            0.5, 0.5, -0.5,		//superior direito tras			6
            0.5, 0.5, 0.5,		//superior direito frente		7
            //Para Normais
            -0.5, -0.5, -0.5,	//inferior esquerdo tras		0
            -0.5, -0.5, 0.5,	//inferior esquerdo frente		1
            -0.5, 0.5, -0.5,	//superior esquerdo tras		2
            -0.5, 0.5, 0.5,		//superior esquerdo frente		3
            0.5, -0.5, -0.5,	//inferior direito tras			4
            0.5, -0.5, 0.5,		//inferior direito frente		5
            0.5, 0.5, -0.5,		//superior direito tras			6
            0.5, 0.5, 0.5,		//superior direito frente		7

            -0.5, -0.5, -0.5,	//inferior esquerdo tras		0
            -0.5, -0.5, 0.5,	//inferior esquerdo frente		1
            -0.5, 0.5, -0.5,	//superior esquerdo tras		2
            -0.5, 0.5, 0.5,		//superior esquerdo frente		3
            0.5, -0.5, -0.5,	//inferior direito tras			4
            0.5, -0.5, 0.5,		//inferior direito frente		5
            0.5, 0.5, -0.5,		//superior direito tras			6
            0.5, 0.5, 0.5,		//superior direito frente		7

        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            //face esquerda
            2, 0, 1,
            1, 3, 2,
            //face direita
            6, 5, 4,
            5, 6, 7,
            //face inferior
            4, 1, 0,
            4, 5, 1,
            //face superior
            2, 3, 6,
            7, 6, 3,
            //face tras
            0, 2, 4,
            2, 6, 4,
            //face frente
            5, 3, 1,
            5, 7, 3,
        ];

        this.normals = [
			0, 0, -1,
			0, 0, 1,
			0, 0, -1,
			0, 0, 1,
			0, 0, -1,
			0, 0, 1,
			0, 0, -1,
            0, 0, 1,
            
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,

            0, -1, 0,
            0, -1, 0,
            0, 1, 0,
            0, 1, 0,
            0, -1, 0,
            0, -1, 0,
            0, 1, 0,
            0, 1, 0,

		]

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}

