var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    File Name:             Chimney Object - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Saturday, November 19th, 2016
    Website Name:          EV - COMP397 - Assignment 3
    Program Description:   TS/JS file that contains the components that
                           are required to render the game's Chimney (End Goal) object.
    Revision History:      Initial Commit
*/
var objects;
(function (objects) {
    // Class = CHIMNEY 
    var Chimney = (function (_super) {
        __extends(Chimney, _super);
        // Private Instance Variable
        // Constructor Method
        function Chimney() {
            _super.call(this, "Chimney");
            this._speed.x = -1;
            this.name = "chimney";
            this._reset(this._rightBounds);
        }
        // Private Methods
        Chimney.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        Chimney.prototype._reset = function (value) {
            this.x = 2 * value;
            this.y = Math.floor(Math.random() * this._bottomBounds);
            // Test END SCENE Trigger
            scene = config.Scene.OVER;
            changeScene();
        };
        // Public Methods
        Chimney.prototype.update = function () {
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return Chimney;
    }(objects.GameObject));
    objects.Chimney = Chimney;
})(objects || (objects = {}));
//# sourceMappingURL=chimney.js.map