/*
	File Name:             Background Object - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
	Last Modified Date:    Sunday, November 20th, 2016
	Website Name:          EV - COMP397 - Assignment 3
	Program Description:   TS/JS file that contains the components that
                           are required to render the game's Background (scrolling) object.
    Revision History:      Clean up and add more comments 
*/
module objects {
    // Class = BACKGROUND 
    export class Background extends objects.GameObject {
        // Private Instance Variable

        // Constructor Method
        constructor() {
            super("BG_Game");

            this._repeat(0);

            this.name = "background";
            // If _speed.x = -1,  loops once.
            // move slower, so image doesn't "loop" before the chimney/end shows update
            this._speed.x = -0.65;  
        }

        // Private Methods
        protected _boundsCheck(value: number): void {
            if (this.x <= -2600) { // original val = -2596
                this._repeat(0);
            }
        }
        protected _repeat(value: number): void {
            this.x = 0;
        }
        // Public Methods
        public update(): void {
            // Moves right to left
            this.x += this._speed.x;
            this._boundsCheck(this._boundsLeft);
        }
    }
}