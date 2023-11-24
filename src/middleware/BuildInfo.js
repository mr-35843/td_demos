export default class BuildInfo{
    constructor(scene){
        const positionX = 16;
        const positionY = 16;
        const message = "Build 0002, Use arrow keys to scroll Testingggz!";
        const font = "12px monospace";
        const fillColor = "#ffffff";
        const paddingX = 20;
        const paddingY = 10;
        const backgroundColor = "#000000";
        const scrollFactor = 0;
        this.generateBuildInfo(scene, positionX, positionY, message, font, fillColor, paddingX, paddingY, backgroundColor, scrollFactor)
        
    }

    generateBuildInfo(scene, positionX, positionY, message, font, fillColor, paddingX, paddingY, backgroundColor, scrollFactor){
        scene.add
        .text(positionX, positionY, message, {
          font: font,
          // @ts-ignore
          fill: fillColor,
          padding: { x: paddingX, y: paddingY },
          backgroundColor: backgroundColor
        })
        .setScrollFactor(scrollFactor);
    }
}