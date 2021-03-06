var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    File Name:             Background Object - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Sunday, November 20th, 2016
    Website Name:          EV - COMP397 - Assignment 3
    Program Description:   TS/JS file that contains the components that
                           are required to render the game's Background (scrolling) object.
    Revision History:      Clean up and add more comments
*/
var objects;
(function (objects) {
    // Class = BACKGROUND 
    var Background = (function (_super) {
        __extends(Background, _super);
        // Private Instance Variable
        // Constructor Method
        function Background() {
            _super.call(this, "BG_Game");
            this._repeat(0);
            this.name = "background";
            // If _speed.x = -1,  loops once.
            // move slower, so image doesn't "loop" before the chimney/end shows update
            this._speed.x = -0.65;
        }
        // Private Methods
        Background.prototype._boundsCheck = function (value) {
            if (this.x <= -2600) {
                this._repeat(0);
            }
        };
        Background.prototype._repeat = function (value) {
            this.x = 0;
        };
        // Public Methods
        Background.prototype.update = function () {
            // Moves right to left
            this.x += this._speed.x;
            this._boundsCheck(this._boundsLeft);
        };
        return Background;
    }(objects.GameObject));
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map