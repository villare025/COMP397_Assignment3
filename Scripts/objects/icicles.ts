/*
	File Name:             Icicles Object - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
	Last Modified Date:    Saturday, November 19th, 2016
	Website Name:          EV - COMP397 - Assignment 3
	Program Description:   TS/JS file that contains the components that
                           are required to render the game's Icicles (Enemy) object.
    Revision History:      Initial Commit
*/
module objects {
	// Class = OOGIE 
	export class Icicles extends objects.GameObject {
		// Private Instance Variable

		// Constructor Method
		constructor() {
			super("Icicles");

			this._reset(this._topBounds);
			this.name = "icicles";
		}

		// Private Methods
		protected _checkBounds(value: number): void {
			if (this.y >= value) {
				this._reset(this._topBounds);
			}
		}

		protected _reset(value: number): void {
			this._speed.y = Math.floor(Math.random() * 5) + 5;
			this._speed.x = Math.floor(Math.random() * 4) - 2;

			this.y = value;
			this.x = Math.floor(Math.random() * this._rightBounds) + this._leftBounds;
		}

		// Public Methods
		public update(): void {
			this.y += this._speed.y;
			this.x += this._speed.x;
			this._checkBounds(this._bottomBounds);
		}
	}
}