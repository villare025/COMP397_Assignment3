var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    File Name:             Icicles Object - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Sunday, November 20th, 2016
    Website Name:          EV - COMP397 - Assignment 3
    Program Description:   TS/JS file that contains the components that
                           are required to render the game's Icicles (Enemy) object.
    Revision History:      Clean up and add more comments
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
            this._repeat(this._boundsUp);
            this.name = "icicles";
        }
        // Private Methods
        Icicles.prototype._boundsCheck = function (value) {
            if (this.y >= value) {
                this._repeat(this._boundsUp);
            }
        };
        Icicles.prototype._repeat = function (value) {
            this._speed.x = Math.floor(Math.random() * 4) - 2;
            this._speed.y = Math.floor(Math.random() * 5) + 5;
            this.x = Math.floor(Math.random() * this._boundsRight) + this._boundsLeft;
            this.y = value;
        };
        // Public Methods
        Icicles.prototype.update = function () {
            // Moves up to down
            this.y += this._speed.y;
            this.x += this._speed.x;
            this._boundsCheck(this._boundsDown);
        };
        return Icicles;
    }(objects.GameObject));
    objects.Icicles = Icicles;
})(objects || (objects = {}));
//# sourceMappingURL=icicles.js.map