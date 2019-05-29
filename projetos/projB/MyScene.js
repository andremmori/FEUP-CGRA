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

        this.appearance = new CGFappearance(this);
        this.appearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.appearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.appearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.appearance.setShininess(120);

        this.texture = new CGFtexture(this, "images/terrain.jpg");
        this.heightmap = new CGFtexture(this, "images/heightmap.jpg");
        this.altimetry = new CGFtexture(this, "images/altimetry.png");
        this.appearance.setTexture(this.texture);
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');


        this.shader = new CGFshader(this.gl, "terrain.vert", "terrain.frag");
        this.shader.setUniformsValues({ uSampler2: 1 });
        this.shader.setUniformsValues({ timeFactor: 0 });

        this.shaderBird = new CGFshader(this.gl, "bird.vert", "bird.frag");
        this.shaderBird.setUniformsValues({ timeFactor: 0 });

        // shader code panels references
        this.shadersDiv = document.getElementById("shaders");
        this.vShaderDiv = document.getElementById("vshader");
        this.fShaderDiv = document.getElementById("fshader");

        //Bird
        this.bird = new MyBird(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayBird = true;
        this.displayPlane = true;
        this.displayLightning = false;
        this.scaleFactor = 1;
        this.speedFactor = 1;

        this.axiom = "X"; // "X"; //
        this.ruleF = "FF"; // "FF"; //
        this.ruleX = "F[-X][X]F[-X]+FX";
        this.angle = 25.0;
        this.iterations = 4;
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


        // set the scene update period 
        // (to invoke the update() method every 50ms or as close as possible to that )
        this.setUpdatePeriod(50);

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
            this.bird.update(t, this.speedFactor, "W");
        }
        else if (this.gui.isKeyPressed("KeyS")) {
            this.bird.update(t, this.speedFactor, "S");
        }
        else if (this.gui.isKeyPressed("KeyD")) {
            this.bird.update(t, this.speedFactor, "D");
        }
        else if (this.gui.isKeyPressed("KeyA")) {
            this.bird.update(t, this.speedFactor, "A");
        }
        //bird
        this.shaderBird.setUniformsValues({timefactor: t / 100 % 1000});
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
        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
            0.0, this.scaleFactor, 0.0, 0.0,
            0.0, 0.0, this.scaleFactor, 0.0,
            0.0, 0.0, 0.0, 1.0];
        this.multMatrix(sca);

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        this.setActiveShader(this.shaderBird);
        // Display objs
        if (this.displayBird) {
            this.pushMatrix();
            this.bird.display();
            this.popMatrix();
        }
        // ---- BEGIN Primitive drawing section
        this.appearance.apply();
        this.setActiveShader(this.shader);
        this.pushMatrix();
        this.heightmap.bind(1);
        //Uncomment following lines in case texture must have wrapping mode 'REPEAT'
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.REPEAT);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.REPEAT);
        
        this.rotate(-0.5 * Math.PI, 1, 0, 0);
        this.scale(60, 60, 1);
        if (this.displayPlane){
            this.terrain.display();
        }
        this.popMatrix();

        if(this.displayLightning)
            this.lightning.display();
        // ---- END Primitive drawing section

        this.setActiveShader(this.defaultShader);
    }
}