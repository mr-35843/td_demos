export default class SettingsScreenResolution {
    constructor() {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
        // @ts-ignore depends on the element/ID of screenResolution
        this.windowResolution = document.getElementById("screenResolution").value;
        this.zoom = 1;
        this.zoomLargeScreenMultiplyer = 1.5;


        switch (this.windowResolution) {

            case "720" || 720:
                this.scale720();
                break;

            case "360" || 360:
                console.log("pre 360")
                this.scale360()
                break;

            default:
                this.scaleAutoFill();
                break;
        }
    }

    scaleAppWindowLargeScreens() {
        this.windowWidth = this.windowWidth * 0.95;
        this.windowHeight = this.windowHeight * 0.9;
    }

    scaleAutoFill() {

        if (this.windowHeight > 720) {
            this.zoom = this.zoom * this.zoomLargeScreenMultiplyer;
            this.windowHeight = this.windowHeight / this.zoom;
            this.windowWidth = this.windowWidth / this.zoom;
            this.scaleAppWindowLargeScreens();
        } else {
            this.windowHeight = this.windowHeight * this.zoom;
            this.windowWidth = this.windowWidth * this.zoom;
        }

    }

    scale360() {
        this.windowHeight = 360;
        this.windowWidth = 480;
    }

    scale720() {
        this.zoom = this.zoom * this.zoomLargeScreenMultiplyer;
        this.windowHeight = 720 / this.zoom;
        this.windowWidth = 1080 / this.zoom;
        this.scaleAppWindowLargeScreens();
    }
}