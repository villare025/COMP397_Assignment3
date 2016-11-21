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
    Revision History:      Clean up and add more comments
*/
var objects;
(function (objects) {
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        // Constructor Method
        function GameObject(bitmapString) {
            _super.call(this, assets.getResult(bitmapString));
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
        GameObject.prototype._boundsCheck = function (value) {
            var _repeatVal = 0;
            // check if y value has met the repeat criteria
            if (this.x >= value) {
                this._repeat(_repeatVal);
            }
        };
        // Repeat Object Off Screen
        GameObject.prototype._repeat = function (value) {
            this.x = value;
        };
        // Public Methods
        GameObject.prototype.update = function () {
            var _boundsVal = 0;
            // Scroll Object Per Frame
            this.x += this._speed.x;
            this._boundsCheck(_boundsVal);
        };
        return GameObject;
    }(createjs.Bitmap));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map