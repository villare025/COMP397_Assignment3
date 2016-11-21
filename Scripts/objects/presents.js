var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    File Name:             Presents Object - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Sunday, November 20th, 2016
    Website Name:          EV - COMP397 - Assignment 3
    Program Description:   TS/JS file that contains the components that
                           are required to render the game's Presents (Friend) object.
    Revision History:      Clean up and add more comments
*/
var objects;
(function (objects) {
    // Class = PRESENTS 
    var Presents = (function (_super) {
        __extends(Presents, _super);
        // Private Instance Variable
        // Constructor Method
        function Presents() {
            _super.call(this, "Presents");
            this._repeat(this._boundsRight);
            this.name = "presents";
            this._speed.x = -4;
        }
        // Private Methods
        Presents.prototype._boundsCheck = function (value) {
            if (this.x <= value) {
                this._repeat(this._boundsRight);
            }
        };
        Presents.prototype._repeat = function (value) {
            this.x = Math.floor(Math.random() + (2 * value));
            this.y = Math.floor(Math.random() * this._boundsDown);
        };
        // Public Methods
        Presents.prototype.update = function () {
            // Moves right to left
            this.x += this._speed.x;
            this._boundsCheck(this._boundsLeft);
        };
        return Presents;
    }(objects.GameObject));
    objects.Presents = Presents;
})(objects || (objects = {}));
//# sourceMappingURL=presents.js.map