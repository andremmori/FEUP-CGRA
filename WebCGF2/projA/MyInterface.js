/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;
        
        // Displays
        this.gui.add(this.scene, 'displayAxis').name("Display axis");
        this.gui.add(this.scene, 'displayObj').name("Display Object");
        this.gui.add(this.scene, 'selectedObject', this.scene.objectIDs).name('Selected Object');
        this.gui.add(this.scene, 'displayNormals').name("Display normals");
        this.gui.add(this.scene, 'displayTextures').name("Display Textures");
        var f = this.gui.addFolder('Day/Night Mode ');
        f.add(this.scene, 'displayDay').name("Display Day");
        f.add(this.scene, 'displayNight').name("Display Night");
        f.add(this.scene, 'displayNightS').name("Display NightS");

        // a folder for grouping parameters for one of the lights
        var f0 = this.gui.addFolder('Light 1 (Day) ');
        f0.add(this.scene.lights[0], 'enabled').name("Enabled");
        // a subfolder for grouping only the three coordinates of the light
        var sf0 = f0.addFolder('Light 1 Position');
        sf0.add(this.scene.lights[0].position, '0', -5.0, 5.0).name("X Position");
        sf0.add(this.scene.lights[0].position, '1', -5.0, 5.0).name("Y Position");
        sf0.add(this.scene.lights[0].position, '2', -5.0, 5.0).name("Z Position");

        // similar but for light 2
        var f1 = this.gui.addFolder('Light 2 (Night) ');
        f1.add(this.scene.lights[1], 'enabled').name("Enabled");
        var sf1 = f1.addFolder('Light 2 Position');
        sf1.add(this.scene.lights[1].position, '0', -5.0, 5.0).name("X Position");
        sf1.add(this.scene.lights[1].position, '1', -5.0, 5.0).name("Y Position");
        sf1.add(this.scene.lights[1].position, '2', -5.0, 5.0).name("Z Position");
        var sf2 = f1.addFolder('Light 2 Attenuation');
        sf2.add(this.scene.lights[1], 'constant_attenuation', 0.00, 1.00).name("Const. Atten.");
        sf2.add(this.scene.lights[1], 'linear_attenuation', 0.0, 1.0).name("Linear Atten.");
        sf2.add(this.scene.lights[1], 'quadratic_attenuation', 0.0, 1.0).name("Quad. Atten.");

        // similar but for light 3
        var f1 = this.gui.addFolder('Light 3 ');
        f1.add(this.scene.lights[2], 'enabled').name("Enabled");
        var sf1 = f1.addFolder('Light 3 Position');
        sf1.add(this.scene.lights[2].position, '0', -5.0, 5.0).name("X Position");
        sf1.add(this.scene.lights[2].position, '1', -5.0, 5.0).name("Y Position");
        sf1.add(this.scene.lights[2].position, '2', -5.0, 5.0).name("Z Position");
        var sf2 = f1.addFolder('Light 3 Attenuation');
        sf2.add(this.scene.lights[2], 'constant_attenuation', 0.00, 1.00).name("Const. Atten.");
        sf2.add(this.scene.lights[2], 'linear_attenuation', 0.0, 1.0).name("Linear Atten.");
        sf2.add(this.scene.lights[2], 'quadratic_attenuation', 0.0, 1.0).name("Quad. Atten.");

        return true;
    }
}