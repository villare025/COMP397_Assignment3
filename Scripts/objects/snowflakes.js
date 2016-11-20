var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var objects;
(function (objects) {
    // Class = SNOWFLAKES 
    var Snowflakes = (function (_super) {
        __extends(Snowflakes, _super);
        // Private Instance Variable
        // Constructor Method
        function Snowflakes() {
            _super.call(this, "Snowflake");
            this._reset(this._topBounds);
            this.name = "snowflake";
        }
        // Private Methods
        Snowflakes.prototype._checkBounds = function (value) {
            if (this.y >= value) {
                this._reset(this._topBounds);
            }
        };
        Snowflakes.prototype._reset = function (value) {
            this._speed.y = Math.floor(Math.random() * 0) + 5;
            this._speed.x = Math.floor(Math.random() * 4) - 2;
            this.y = value;
            this.x = Math.floor(Math.random() * this._rightBounds) + this._leftBounds;
        };
        // Public Methods
        Snowflakes.prototype.update = function () {
            this.y += this._speed.y;
            this.x += this._speed.x;
            this._checkBounds(this._bottomBounds);
        };
        return Snowflakes;
    }(objects.GameObject));
    objects.Snowflakes = Snowflakes;
})(objects || (objects = {}));
//# sourceMappingURL=snowflakes.js.map