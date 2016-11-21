var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    File Name:             Oogie Object - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Sunday, November 20th, 2016
    Website Name:          EV - COMP397 - Assignment 3
    Program Description:   TS/JS file that contains the components that
                           are required to render the game's Oogie (Enemy) object.
    Revision History:      Clean up and add more comments
*/
var objects;
(function (objects) {
    // Class = OOGIE 
    var Oogie = (function (_super) {
        __extends(Oogie, _super);
        // Private Instance Variable
        // Constructor Method
        function Oogie() {
            _super.call(this, "Oogie");
            this._repeat(this._boundsUp);
            this.name = "oogie";
        }
        // Private Methods
        Oogie.prototype._boundsCheck = function (value) {
            if (this.y >= value) {
                this._repeat(this._boundsUp);
            }
        };
        Oogie.prototype._repeat = function (value) {
            this._speed.x = Math.floor(Math.random() * 4) - 2;
            this._speed.y = Math.floor(Math.random() * 0) + 5;
            this.x = Math.floor(Math.random() * this._boundsRight) + this._boundsLeft;
            this.y = value;
        };
        // Public Methods
        Oogie.prototype.update = function () {
            // Moves up to down
            this.y += this._speed.y;
            this.x += this._speed.x;
            this._boundsCheck(this._boundsDown);
        };
        return Oogie;
    }(objects.GameObject));
    objects.Oogie = Oogie;
})(objects || (objects = {}));
//# sourceMappingURL=oogie.js.map