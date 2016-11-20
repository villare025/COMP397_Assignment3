var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var objects;
(function (objects) {
    // Class = OOGIE 
    var Icicles = (function (_super) {
        __extends(Icicles, _super);
        // Private Instance Variable
        // Constructor Method
        function Icicles() {
            _super.call(this, "Icicles");
            this._reset(this._topBounds);
            this.name = "icicles";
        }
        // Private Methods
        Icicles.prototype._checkBounds = function (value) {
            if (this.y >= value) {
                this._reset(this._topBounds);
            }
        };
        Icicles.prototype._reset = function (value) {
            this._speed.y = Math.floor(Math.random() * 5) + 5;
            this._speed.x = Math.floor(Math.random() * 4) - 2;
            this.y = value;
            this.x = Math.floor(Math.random() * this._rightBounds) + this._leftBounds;
        };
        // Public Methods
        Icicles.prototype.update = function () {
            this.y += this._speed.y;
            this.x += this._speed.x;
            this._checkBounds(this._bottomBounds);
        };
        return Icicles;
    }(objects.GameObject));
    objects.Icicles = Icicles;
})(objects || (objects = {}));
//# sourceMappingURL=icicles.js.map