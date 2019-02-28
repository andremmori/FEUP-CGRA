function convertAng(ang){
    return (Math.PI*ang/180);
}

/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.triangle = new MyTriangle(this);
        this.diamond = new MyDiamond(this);
        this.parallelogram = new MyParallelogram(this);
        this.triangleSmall = new MyTriangleSmall(this);
        this.triangleBig = new MyTriangleBig(this);
        this.tangram = new MyTangram(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayDiamond = false;
        this.displayTriangle = false;
        this.displayParallelogram = false;
        this.displayTriangleSmall = false;
        this.displayTriangleBig = false;
        this.displayTangram = false;
        this.scaleFactor = 1;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();
        

        this.setDefaultAppearance();

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];
        this.multMatrix(sca);
        
        
        
        
        // ---- BEGIN Primitive drawing section
        if(this.displayTangram){
            // BLUE
            this.pushMatrix();
            this.rotate(convertAng(180), 0, 0, 1);
            this.translate(0,-2,0);
            this.triangleBig.display();
            this.popMatrix();
            // PINK
            this.pushMatrix();
            this.translate(1,3,0);
            this.scale(Math.sqrt(2)/2, Math.sqrt(2)/2, Math.sqrt(2)/2);
            this.rotate(convertAng(-135), 0, 0, 1);
            this.triangleBig.display();
            this.popMatrix();
            // ORANGE
            this.pushMatrix();
            this.rotate(convertAng(-135), 0, 0, 1);
            this.triangleBig.display();
            this.popMatrix();
            // GREEN
            this.pushMatrix();
            this.translate(-0.3335,2.9,0);
            this.rotate(convertAng(20), 0 , 0, 1);
            this.diamond.display();
            this.popMatrix();
            // YELLOW
            this.pushMatrix();
            this.translate(1.40,-1.40,0);
            this.scale(1,-1,1);
            this.rotate(convertAng(135), 0, 0, 1);
            this.parallelogram.display();
            this.popMatrix();
            // RED
            this.pushMatrix();
            this.translate(-1.9, -1.9, 0);
            this.rotate(convertAng(45), 0, 0, 1);
            this.triangleSmall.display();
            this.popMatrix();
            // PURPLE
            this.pushMatrix();
            this.translate(-1.45, -3.5 ,0);
            this.rotate(convertAng(45), 0, 0, 1);
            this.triangleSmall.display();
        }
        if (this.displayDiamond)
            this.diamond.display();
        if (this.displayTriangle)
            this.triangle.display();
        if (this.displayParallelogram)
            this.parallelogram.display();
        if (this.displayTriangleSmall)
            this.triangleSmall.display();
        if (this.displayTriangleBig)
            this.triangleBig.display();      
        
        
        // ---- END Primitive drawing section
    }
}