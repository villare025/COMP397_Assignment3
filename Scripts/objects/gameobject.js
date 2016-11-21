var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var objects;
(function (objects) {
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        // Constructor Method
        function GameObject(bitmapString) {
            // Initialize Object Values
            _super.call(this, assets.getResult(bitmapString)); // Set GO image
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
        GameObject.prototype._boundsCheck = function (value) {
            var _repeatVal = 0;
            // Check if alue has met the repeat criteria
            if (this.x >= value) {
                this._repeat(_repeatVal);
            }
        };
        // Repeat Object Off the Screen 
        // -- Looping magic
        GameObject.prototype._repeat = function (value) {
            this.x = value;
        };
        // Public Methods
        GameObject.prototype.update = function () {
            var _boundsVal = 0;
            // Move Object Per Frame via its speed x
            this.x += this._speed.x;
            // Always check the bounds of the object
            this._boundsCheck(_boundsVal);
        };
        return GameObject;
    }(createjs.Bitmap));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map