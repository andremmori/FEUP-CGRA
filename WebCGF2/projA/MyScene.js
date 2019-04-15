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

        //Materials
        this.madeira = new CGFappearance(this);
        this.madeira.setAmbient(0.5, 0.25, 0.0, 1);
        this.madeira.setDiffuse(0.3, 0.17, 0.0, 1);
        this.madeira.setSpecular(0.15, 0.1, 0.1, 1);
        this.madeira.setShininess(38.4);
        
        this.stone = new CGFappearance(this);
        this.stone.setAmbient(0.05375, 0.05, 0.06625, 0.82);
        this.stone.setDiffuse(0.18275, 0.17, 0.22525, 0.82);
        this.stone.setSpecular(0.332741, 0.328634, 0.346435, 0.82);
        this.stone.setShininess(38.4);
        
        this.gold = new CGFappearance(this);
        this.gold.setAmbient(0.24725, 0.1995, 0.0745);
        this.gold.setDiffuse(0.75164, 0.60648, 0.22648);
        this.gold.setSpecular(0.628281, 0.555802, 0.366065);
        this.gold.setShininess(0.4);
        
        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.prism = new MyPrism(this, 3, 2);
        this.cylinder = new MyCylinder(this, 6, 2);
        this.tree = new MyTree(this, 2, 1, 2, 2, null, null);
        this.treeGroup = new MyTreeGroupPatch(this);
        this.treeRow = new MyTreeRowPatch(this);
        this.house = new MyHouse(this, 'images/HouseWall.jpg', 'images/HouseDoor.jpg', this.stone, this.gold);
        this.hill = new MyVoxelHill(this, 4);
        this.myQuad = new MyQuad(this);
        this.cubeDay = new MyUnitCube(this, 'images/lake1_up.jpg', 'images/lake1_dn.jpg', 'images/lake1_rt.jpg', 'images/lake1_lf.jpg', 'images/lake1_ft.jpg', 'images/lake1_bk.jpg');
        this.cubeNight = new MyUnitCube(this, 'images/grave_up.png', 'images/grave_dn.png', 'images/grave_rt.png', 'images/grave_lf.png', 'images/grave_ft.png', 'images/grave_bk.png');
        this.fire = new MyFire(this, this.madeira);       
        // Textura myquad
        this.quadTop = new CGFappearance(this);
        this.quadTop.loadTexture('images/mineTop.png');
        this.quadTop.setTextureWrap('REPEAT', 'REPEAT');



        //Other variables connected to MyInterface
        this.displayAxis = true;
        this.displayNormals = false;
        this.displayObj = false;
        this.displayTextures = true;
        this.displayDay = false;
        this.displayNight = false;
        this.displayNightS = false;
        this.selectedObject = 0;
        this.ambientLight = 0.5;
        this.displayScenario = false;


        this.objects = [this.prism, this.cylinder, this.tree , this.treeGroup, this.treeRow, this.house, this.hill, this.fire];
        // Labels and ID's for object selection on MyInterface
        this.objectIDs = { 'Prism': 0, 'Cylinder': 1, 'Tree':2, 'TreeGroup':3, 'TreeRow':4, 'House':5, 'Hill': 6, 'Fire': 7};

    }
    initLights() {
        this.setGlobalAmbientLight(0.3, 0.3, 0.3, 1.0);

        this.lights[0].setPosition(-2.0, 15.0, -10.0, 1.0);
        this.lights[0].setAmbient(1.0, 1.0, 0.0, 1.0);       
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].setSpecular(1.0, 1.0, 1.0, 1.0);
        this.lights[0].setLinearAttenuation(0.00);
        this.lights[0].disable();
        this.lights[0].setVisible(true);
        this.lights[0].update();

        this.lights[1].setPosition(2.0, 15.0, -10.0, 1.0);
        this.lights[1].setAmbient(0.0, 0.5, 0.75, 1.0);
        this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[1].setSpecular(1.0, 1.0, 0.0, 1.0);
        this.lights[1].setLinearAttenuation(0.30);
        this.lights[1].disable();
        this.lights[1].setVisible(true);
        this.lights[1].update();
    
        this.lights[2].setPosition(-3.0, 0.5, 3.0, 1.0);
        this.lights[2].setAmbient(0.925, 0.2, 0.075, 1.0);
        this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[2].setSpecular(1.0, 1.0, 0.0, 1.0);
        this.lights[2].setLinearAttenuation(0.80);
        this.lights[2].disable();
        this.lights[2].setVisible(true);
        this.lights[2].update();

    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    updateAmbientLight() {
        this.setGlobalAmbientLight(this.ambientLight, this.ambientLight, this.ambientLight, 1);
    }
    updateTexCoords() {
        this.cube.updateTexCoords(this.texCoords);
        this.myQuad.updateTexCoords(this.texCoords);
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

        this.lights[0].update();
        this.lights[1].update();
        this.lights[2].update();


        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);

        // Draw axis
        if (this.displayAxis){
            this.axis.display();
        }

        if (this.displayDay){
            this.displayNight = false;
            this.lights[0].enable();
            this.lights[1].disable();
            this.pushMatrix();
            this.scale(100, 100, 100);
            this.cubeDay.display();
            this.popMatrix();
        }
        else if (this.displayNight){
            this.displayDay = false;
            this.lights[1].enable();
            this.lights[0].disable();
            this.pushMatrix();
            this.scale(100, 100, 100);
            this.cubeNight.display();
            this.popMatrix();
        }
        else{
            this.lights[0].disable();
            this.lights[1].disable();
            this.lights[2].disable();
        }

        if(this.displayNightS){
            this.lights[2].enable();
        }
        else
            this.lights[2].disable();

        if(this.displayTextures)
            this.enableTextures(true);
        else
            this.enableTextures(false);

        if(this.displayObj){
            this.objects[this.selectedObject].display();
        }

        if (this.displayNormals)
            this.objects[this.selectedObject].enableNormalViz();
        else this.objects[this.selectedObject].disableNormalViz();


        if(this.displayScenario){
            this.house.display();

            // MyQuad
            this.pushMatrix();
            this.rotate(Math.PI/2, -1, 0, 0);
            this.scale(40,40,1);
            this.quadTop.apply();
            this.myQuad.display();
            this.popMatrix();

            // TreeGroup I
            this.pushMatrix();
            this.translate(-10,0,-10);
            this.treeGroup.display();
            this.popMatrix();

            // TreeGroup II
            this.pushMatrix();
            this.translate(7, 0, -10);
            this.treeGroup.display();
            this.popMatrix();

            // TreeRow I
            this.pushMatrix();
            this.translate(-1, 0, 15);
            this.treeRow.display();
            this.popMatrix();

            // TreeRow II
            this.pushMatrix();
            this.translate(-8, 0, 10);
            this.treeRow.display();
            this.popMatrix();

            // Hill I
            this.pushMatrix();
            this.translate(-10, 0, 3);
            this.hill.display();
            this.popMatrix();

            // Hill II
            this.pushMatrix();
            this.translate(10, 0, 3);
            this.hill.display();
            this.popMatrix();

            // Fire
            this.pushMatrix();
            this.translate(-2, 0, 3);
            this.fire.display();
            this.popMatrix();

        }


        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section


        // ---- END Primitive drawing section
    }
}