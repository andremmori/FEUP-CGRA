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
        this.gui.add(this.scene, 'displayScenario').name("Display Scenario");
        var f = this.gui.addFolder('Day/Night Mode ');
        f.add(this.scene, 'displayDay').name("Display Day");
        f.add(this.scene, 'displayNight').name("Display Night");
        f.add(this.scene, 'displayNightS').name("Display Fire");

        // a folder for grouping parameters for one of the lights
        var f0 = this.gui.addFolder('Light 1 (Day) Position');
        f0.add(this.scene.lights[0].position, '0', -15.0, 15.0).name("X Position");
        f0.add(this.scene.lights[0].position, '1', -15.0, 15.0).name("Y Position");
        f0.add(this.scene.lights[0].position, '2', -15.0, 15.0).name("Z Position");

        // similar but for light 2
        var f1 = this.gui.addFolder('Light 2 (Night) Position');
        f1.add(this.scene.lights[1].position, '0', -15.0, 15.0).name("X Position");
        f1.add(this.scene.lights[1].position, '1', -15.0, 15.0).name("Y Position");
        f1.add(this.scene.lights[1].position, '2', -15.0, 15.0).name("Z Position");

        // similar but for light 3
        var f2 = this.gui.addFolder('Light 3 (Fire) Position');
        f2.add(this.scene.lights[2].position, '0', -15.0, 15.0).name("X Position");
        f2.add(this.scene.lights[2].position, '1', -15.0, 15.0).name("Y Position");
        f2.add(this.scene.lights[2].position, '2', -15.0, 15.0).name("Z Position");

        return true;
    }
}