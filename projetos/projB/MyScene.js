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
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new Plane(this, 32);
        this.terrain = new MyTerrain(this);
        this.lightning = new MyLightning(this);
        //Bird
        this.bird = new MyBird(this);

        // House
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
        this.house = new MyHouse(this, 'images/HouseWall.jpg', 'images/HouseDoor.jpg', this.stone, this.gold);

        // Branch
        this.branch1 = new MyTreeBranch(this, 9, 5, 0);
        this.branch2 = new MyTreeBranch(this, -2, 5, 3);
        this.branch3 = new MyTreeBranch(this, -9, 5, -5);
        this.branch4 = new MyTreeBranch(this, 18, 5, 0);

        // Nest
        this.nest = new MyNest(this);
        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayBird = true;
        this.displayPlane = false;
        this.displayTerrain = true;
        this.displayLightning = false;
        this.displayHouse = true;
        this.scaleFactor = 1;
        this.speedFactor = 1;
        this.displayBranch1 = true;
        this.displayBranch2 = true;
        this.displayBranch3 = true;
        this.displayBranch4 = true;

        this.axiom = "X"; // "X"; //
        this.ruleF = "FF"; // "FF"; //
        this.ruleX = "F[-X][X]F[-X]+FX";
        this.angle = 25.0;
        this.iterations = 3;
        this.LightScale = 0.5;

        this.doGenerate = function () {
            this.lightning.generate(
                this.axiom,
                {
                    "F": ["FF"],
                    "X": ["F[-X][X]F[-X]+X", "F[-X][X]+X", "F[+X]-X", "F[/X][X]F['\''\'X]+X", "F['\'X][X]/X", "F[/X]'\'X", "F[^X][X]F[&X]^X", "F[^X]&X", "F[&X]^X"]
                },
                this.angle,
                this.iterations,
                this.LightScale
            );
        }

        // do initial generation
        this.doGenerate();

        this.axiomT = "+++X"; // "X"; //
        this.ruleFT = "FF"; // "FF"; //
        this.ruleXT = "F[-X][X]F[-X]+FX";
        this.angleT = 30.0;
        this.iterationsT = 4;
        this.scaleFactorT = 0.5;
        //this.lSystem = new MyLSystem(this);
        this.plant = new MyLSPlant(this);

        this.doGenerate2 = function () {
            this.plant.generate(
                this.axiom,
                {
                    "F": ["FF"],
                    "X": ["F[-X][X]F[-X]+X", "F[-X][X]+X", "F[+X]-X", "F[/X][X]F['\''\'X]+X", "F['\'X][X]/X", "F[/X]'\'X", "F[^X][X]F[&X]^X", "F[^X]&X", "F[&X]^X"]
                },
                this.angleT,
                this.iterationsT,
                this.scaleFactorT
            );
        }

        this.doGenerate2();

        // set the scene update period 
        // (to invoke the update() method every 50ms or as close as possible to that )
        this.setUpdatePeriod(10);

    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    update(t) {
        this.checkKeys();
        if (this.gui.isKeyPressed("KeyW")) {
            this.bird.animation(t,"");

            this.bird.update(t,this.speedFactor, "W");
        }
        else if (this.gui.isKeyPressed("KeyS")) {
            this.bird.animation(t, "");

            this.bird.update(t,this.speedFactor, "S");
        }
        else if (this.gui.isKeyPressed("KeyD")) {
            this.bird.animation(t,"");

            this.bird.update(t,this.speedFactor, "D");
        }
        else if (this.gui.isKeyPressed("KeyA")) {
            this.bird.animation(t,"");

            this.bird.update(t,this.speedFactor, "A");
        }
        else if (this.gui.isKeyPressed("KeyR")) {
            this.bird.animation(t,"");

            this.bird.update(t,this.speedFactor, "R");
        }
        else if (this.gui.isKeyPressed("KeyL")) {
            this.bird.animation(t,"");

            this.lightning.update(t);
        }
        else if(this.gui.isKeyPressed("KeyP")){
            this.bird.animation(t, "P");

            this.bird.update(t,this.speedFactor, "P");
        }
        else 
            this.bird.animation(t, "");
    }
    convertAng(ang) {
        return (Math.PI * ang / 180);
    }

    checkKeys() {
        var text = "Keys pressed: ";
        var keysPressed = false;
        // Check for key codes e.g. in ​https://keycode.info/ 
        if (this.gui.isKeyPressed("KeyW")) {
            text += " W ";
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyS")) {
            text += " S ";
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyA")) {
            text += " A ";
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyD")) {
            text += " D ";
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyR")) {
            text += " R ";
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyL")) {
            text += " L ";
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyP")) {
            text += " P ";
            keysPressed = true;
        }
        if (keysPressed)
            console.log(text);
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

        // Scale
        // var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
        //     0.0, this.scaleFactor, 0.0, 0.0,
        //     0.0, 0.0, this.scaleFactor, 0.0,
        //     0.0, 0.0, 0.0, 1.0];

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // Display objs
        if (this.displayBird) {
            this.pushMatrix();
            this.translate(0,6,0);
            this.scale(0.5 * this.scaleFactor, 0.5 * this.scaleFactor, 0.5 *this.scaleFactor);
            this.bird.display();
            this.popMatrix();
        }
        // ---- BEGIN Primitive drawing section
        this.pushMatrix();
        this.rotate(-0.5 * Math.PI, 1, 0, 0);
        this.scale(60, 60, 1);
        if (this.displayPlane) {
            this.plane.display();
        }
        this.popMatrix();

        if (this.displayLightning)
            this.lightning.display2();

        if (this.displayTerrain)
            this.terrain.display();

        if (this.displayHouse) {
            this.pushMatrix();
            this.translate(0,4.5,0);
            this.house.display();
            this.popMatrix();
        }
        // Nest
        this.pushMatrix();
        this.translate(0,0,-7);
        this.nest.display();
        this.popMatrix();

        // Branches
        if(this.displayBranch1)
            this.branch1.display();

        if(this.displayBranch2)
            this.branch2.display();

        if(this.displayBranch3)
            this.branch3.display();

        if(this.displayBranch4)
            this.branch4.display();
        


        // ---- END Primitive drawing section
    }
}