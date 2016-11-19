/*
	File Name:             GameObject Object - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
	Last Modified Date:    Saturday, November 19th, 2016
	Website Name:          EV - COMP397 - Assignment 3
	Program Description:   TS/JS file that contains the components that
                           are required to render the game's GameObject object.
    Revision History:      Initial Commit
*/
module objects {
    export class GameObject extends createjs.Bitmap {

        // Private Instance Variables
        protected _speed: createjs.Point;
        protected _leftBounds: number;
        protected _rightBounds: number;
        protected _topBounds: number;
        protected _bottomBounds: number;

        // Public Instance Variables
        public name: string;
        public width: number;
        public height: number;
        public centerX: number;
        public centerY: number;

        // Constructor Method
        constructor(bitmapString: string) {
            super(assets.getResult(bitmapString));

            this._speed = new createjs.Point(0, 0);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;
            this._topBounds = -this.height;
            this._bottomBounds = config.Screen.HEIGHT - this.height;
            this._leftBounds = 0;
            this._rightBounds = config.Screen.WIDTH + this.width;
        }

        // Private Methods
        protected _checkBounds(value: number): void {
            var resetValue: number = 0;
            // check if y value has met the reset criteria
            if (this.x >= value) {
                this._reset(resetValue);
            }
        }

        // Reset Object Off Screen
        protected _reset(value: number): void {
            this.x = value;
        }

        // Public Methods
        public update(): void {
            var boundValue: number = 0;
            // Scroll Object Per Frame
            this.x += this._speed.x;
            this._checkBounds(boundValue);
        }
    }
}