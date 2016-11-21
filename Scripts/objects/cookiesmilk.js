var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    File Name:             Cookies (&) Milk Object - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Sunday, November 20th, 2016
    Website Name:          EV - COMP397 - Assignment 3
    Program Description:   TS/JS file that contains the components that
                           are required to render the game's Cookies (&) Milk (Friend) object.
    Revision History:      Clean up and add more comments
*/
var objects;
(function (objects) {
    // Class = COOKIESMILK 
    var CookiesMilk = (function (_super) {
        __extends(CookiesMilk, _super);
        // Private Instance Variable
        // Constructor Method
        function CookiesMilk() {
            _super.call(this, "CookiesMilk");
            this._repeat(this._boundsRight);
            this.name = "cookiesmilk";
            this._speed.x = -2;
        }
        // Private Methods
        CookiesMilk.prototype._boundsCheck = function (value) {
            if (this.x <= value) {
                this._repeat(this._boundsRight);
            }
        };
        CookiesMilk.prototype._repeat = function (value) {
            this.x = 2 * value;
            this.y = Math.floor(Math.random() * this._boundsDown);
        };
        // Public Methods
        CookiesMilk.prototype.update = function () {
            // Moves right to left
            this.x += this._speed.x;
            this._boundsCheck(this._boundsLeft);
        };
        return CookiesMilk;
    }(objects.GameObject));
    objects.CookiesMilk = CookiesMilk;
})(objects || (objects = {}));
//# sourceMappingURL=cookiesmilk.js.map