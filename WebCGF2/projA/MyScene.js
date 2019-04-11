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
        this.prism = new MyPrism(this, 3, 2);
        this.cylinder = new MyCylinder(this, 6, 2);
        this.tree = new MyTree(this, 6, 1, 2, 1, null, null);
        this.treeGroup = new MyTreeGroupPatch(this);
        this.treeRow = new MyTreeRowPatch(this);
        this.house = new MyHouse(this);
        this.hill = new MyVoxelHill(this, 4);

        //Objects connected to MyInterface


        //Other variables connected to MyInterface
        this.displayAxis = true;
        this.displayNormals = false;
        this.displayObj = false;
        this.selectedObject = 0;

        this.objects = [this.prism, this.cylinder, this.tree , this.treeGroup, this.treeRow, this.house, this.hill];
        // Labels and ID's for object selection on MyInterface
        this.objectIDs = { 'Prism': 0, 'Cylinder': 1, 'Tree':2, 'TreeGroup':3, 'TreeRow':4, 'House':5, 'Hill': 6};

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

        if(this.displayObj){
            this.objects[this.selectedObject].display();
        }

        if (this.displayNormals)
            this.objects[this.selectedObject].enableNormalViz();
        else this.objects[this.selectedObject].disableNormalViz();



        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section


        // ---- END Primitive drawing section
    }
}