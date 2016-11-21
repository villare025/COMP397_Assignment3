/*
	File Name:             GameObject Object - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
	Last Modified Date:    Sunday, November 20th, 2016
	Website Name:          EV - COMP397 - Assignment 3
	Program Description:   TS/JS file that contains the components that
                           are required to render the game's GameObject object.
    Revision History:      Add last of the comments 
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
            // Initialize Object Values
            super(assets.getResult(bitmapString)); // Set GO image

            this._speed = new createjs.Point(0, 0); // Add movement speed
            this.width = this.getBounds().width; // get bounds width of object
            this.height = this.getBounds().height; // get bounds height of object
            this.centerX = this.width * 0.5; // get the X center through the width of object
            this.centerY = this.height * 0.5; // get the y center through the width of object
            // Figure the bounds of the image
            this._boundsUp = -this.height; // Up Bound
            this._boundsDown = config.Screen.HEIGHT - this.height; // Down Bound
            this._boundsLeft = 0; // Left Bound
            this._boundsRight = config.Screen.WIDTH + this.width; // Right Bound
        }

        // Private Methods
        protected _boundsCheck(value: number): void {
            var _repeatVal: number = 0;
            // Check if alue has met the repeat criteria
            if (this.x >= value) {
                this._repeat(_repeatVal);
            }
        }
        // Repeat Object Off the Screen 
        // -- Looping magic
        protected _repeat(value: number): void {
            this.x = value;
        }
        // Public Methods
        public update(): void {
            var _boundsVal: number = 0;
            // Move Object Per Frame via its speed x
            this.x += this._speed.x;
            // Always check the bounds of the object
            this._boundsCheck(_boundsVal);
        }
    }
}