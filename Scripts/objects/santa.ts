/*
	File Name:             Santa Object (Player) - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino 
	Last Modified Date:    Sunday, November 20th, 2016
	Website Name:          EV - COMP397 - Assignment 3
	Program Description:   TS/JS file that contains the components that
                           are required to render the game's Santa (Player) object.
    Revision History:      Clean up and add more comments 
*/
module objects {
    // Class = SANTA 
    export class Santa extends createjs.Bitmap {
        // Private Instance Variable
        private _boundsLeft: number;
        private _boundsRight: number;
        private _boundsUp: number;
        private _boundsDown: number;

        // Public Instance Variables
        public width: number;
        public height: number;

        // Constructor Method
        constructor() {
            super(assets.getResult("Santa"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._boundsUp = this.height * 0.5 + 30;
            this._boundsDown = config.Screen.HEIGHT - (this.height * 0.5);
            this._boundsLeft = this.width * 0.5;
            this._boundsRight = config.Screen.WIDTH - (this.width * 0.5);

            this.x = 50;
            this.y = 450;
        }

        // Private Methods
        private _boundsCheck(): void {
            if (this.x < this._boundsLeft) {
                this.x = this._boundsLeft;
            }
            if (this.x > this._boundsRight) {
                this.x = this._boundsRight;
            }
            if (this.y < this._boundsUp) {
                this.y = this._boundsUp;
            }
            if (this.y > this._boundsDown) {
                this.y = this._boundsDown;
            }
        }
        // Public Methods
        public update(): void {
            // Moves wherever the mouse is
            // -- Smooth on browser
            // -- Teleporting Santa on Mobile
            this.x = stage.mouseX;
            this.y = stage.mouseY;
            this._boundsCheck();
        }
    }
}