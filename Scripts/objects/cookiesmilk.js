var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    File Name:             Cookies (&) Milk Object - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Saturday, November 19th, 2016
    Website Name:          EV - COMP397 - Assignment 3
    Program Description:   TS/JS file that contains the components that
                           are required to render the game's Cookies (&) Milk (Friend) object.
    Revision History:      Initial Commit
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
            this._reset(this._rightBounds);
            this.name = "cookiesmilk";
            this._speed.x = -2;
        }
        // Private Methods
        CookiesMilk.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        CookiesMilk.prototype._reset = function (value) {
            this.x = 2 * value;
            this.y = Math.floor(Math.random() * this._bottomBounds);
        };
        // Public Methods
        CookiesMilk.prototype.update = function () {
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return CookiesMilk;
    }(objects.GameObject));
    objects.CookiesMilk = CookiesMilk;
})(objects || (objects = {}));
//# sourceMappingURL=cookiesmilk.js.map