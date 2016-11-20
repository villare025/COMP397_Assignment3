/*
	File Name:             Snowflakes Object - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
	Last Modified Date:    Sunday, November 20th, 2016
	Website Name:          EV - COMP397 - Assignment 3
	Program Description:   TS/JS file that contains the components that
                           are required to render the game's Snowflakes (fancy effect) object.
    Revision History:      Initial Commit
*/
module objects {
	// Class = SNOWFLAKES 
	export class Snowflakes extends objects.GameObject {
		// Private Instance Variable

		// Constructor Method
		constructor() {
			super("Snowflake");

			this._reset(this._topBounds);
            
			this.name = "snowflake";
		}

		// Private Methods
		protected _checkBounds(value: number): void {
			if (this.y >= value) {
				this._reset(this._topBounds);
			}
		}

		protected _reset(value: number): void {
			this._speed.y = Math.floor(Math.random() * 0) + 5;
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