/*
    File Name:             Assets Object - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
	Last Modified Date:    Saturday, November 19th, 2016
	Website Name:          EV - COMP397 - Assignment 3
	Program Description:   TS/JS file that contains the components that
                           are required to render the game's Assets object.
                           Label class provides a clean way of creating 
                           text that will appear on screen.
    Revision History:      Initial Commit
*/

module objects {
    export class Label extends createjs.Text {
        constructor(labelString: string, labelFont: string, labelColor: string, x: number, y: number) {
            // MUST call parent class constructor. Requires text to be displayed, font, and color
            super(labelString, labelFont, labelColor);

            // Set registration point of the text. Used when performing transformations
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;

            // Set initial x,y position of the label
            this.x = x;
            this.y = y;
        }
    }
}