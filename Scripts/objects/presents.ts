/*
	File Name:             Presents Object - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
	Last Modified Date:    Saturday, November 19th, 2016
	Website Name:          EV - COMP397 - Assignment 3
	Program Description:   TS/JS file that contains the components that
                           are required to render the game's Presents (Friend) object.
    Revision History:      Initial Commit
*/
module objects {
	// Class = PRESENTS 
	export class Presents extends objects.GameObject {
		// Private Instance Variable

		// Constructor Method
		constructor() {
			super("Presents");

			this._reset(this._rightBounds);
			
			this.name = "presents";
			this._speed.x = -4;
		}

		// Private Methods
		protected _checkBounds(value: number): void {
			if (this.x <= value) {
				this._reset(this._rightBounds);
			}
		}

		protected _reset(value: number): void {
			this.x = Math.floor(Math.random() + (2 * value));
			this.y = Math.floor(Math.random() * this._bottomBounds);
		}

		// Public Methods
		public update(): void {
			this.x += this._speed.x;
			this._checkBounds(this._leftBounds);
		}
	}
}