/*
	File Name:             Chimney Object - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
	Last Modified Date:    Sunday, November 20th, 2016
	Website Name:          EV - COMP397 - Assignment 3
	Program Description:   TS/JS file that contains the components that
                           are required to render the game's Chimney (End Goal) object.
    Revision History:      Clean up and add more comments 
*/
module objects {
    // Class = CHIMNEY 
    export class Chimney extends objects.GameObject {
        // Private Instance Variable

        // Constructor Method
        constructor() {
            super("Chimney");

            this._repeat(this._boundsRight);

            this.name = "chimney";
            this._speed.x = -1;
        }

        // Private Methods
        protected _boundsCheck(value: number): void {
            if (this.x <= value) {
                this._repeat(this._boundsRight);
            }
        }
        protected _repeat(value: number): void {
            this.x = 2 * value;
            this.y = Math.floor(Math.random() * this._boundsDown);
            // END SCENE Trigger
            // -- So game is finite
            scene = config.Scene.OVER;
            changeScene();
        }
        // Public Methods
        public update(): void {
            // Moves right to left
            this.x += this._speed.x;
            this._boundsCheck(this._boundsLeft);
        }
    }
}