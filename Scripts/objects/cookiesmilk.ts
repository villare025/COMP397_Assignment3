/*
	File Name:             Cookies (&) Milk Object - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
	Last Modified Date:    Sunday, November 20th, 2016
	Website Name:          EV - COMP397 - Assignment 3
	Program Description:   TS/JS file that contains the components that
                           are required to render the game's Cookies (&) Milk (Friend) object.
    Revision History:      Clean up and add more comments 
*/
module objects {
    // Class = COOKIESMILK 
    export class CookiesMilk extends objects.GameObject {
        // Private Instance Variable

        // Constructor Method
        constructor() {
            super("CookiesMilk");

            this._repeat(this._boundsRight);
            
            this.name = "cookiesmilk";
            this._speed.x = -2;
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
        }
        // Public Methods
        public update(): void {
            // Moves right to left
            this.x += this._speed.x;
            this._boundsCheck(this._boundsLeft);
        }
    }
}