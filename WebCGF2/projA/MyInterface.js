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

        return true;
    }
}