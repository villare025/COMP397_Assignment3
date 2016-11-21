/*
	File Name:             GameObject Object - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
	Last Modified Date:    Sunday, November 20th, 2016
	Website Name:          EV - COMP397 - Assignment 3
	Program Description:   TS/JS file that contains the components that
                           are required to render the game's GameObject object.
    Revision History:      Clean up and add more comments 
*/
module objects {
    export class GameObject extends createjs.Bitmap {

        // Private Instance Variables
        protected _speed: createjs.Point;
        protected _boundsUp: number;
        protected _boundsDown: number;
        protected _boundsLeft: number;
        protected _boundsRight: number;

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
            this._boundsUp = -this.height;
            this._boundsDown = config.Screen.HEIGHT - this.height;
            this._boundsLeft = 0;
            this._boundsRight = config.Screen.WIDTH + this.width;
        }

        // Private Methods
        protected _boundsCheck(value: number): void {
            var _repeatVal: number = 0;
            // check if y value has met the repeat criteria
            if (this.x >= value) {
                this._repeat(_repeatVal);
            }
        }
        // Repeat Object Off Screen
        protected _repeat(value: number): void {
            this.x = value;
        }
        // Public Methods
        public update(): void {
            var _boundsVal: number = 0;
            // Scroll Object Per Frame
            this.x += this._speed.x;
            this._boundsCheck(_boundsVal);
        }
    }
}