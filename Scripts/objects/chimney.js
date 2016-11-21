var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    File Name:             Chimney Object - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Sunday, November 20th, 2016
    Website Name:          EV - COMP397 - Assignment 3
    Program Description:   TS/JS file that contains the components that
                           are required to render the game's Chimney (End Goal) object.
    Revision History:      Clean up and add more comments
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
            this._repeat(this._boundsRight);
            this.name = "chimney";
            this._speed.x = -1;
        }
        // Private Methods
        Chimney.prototype._boundsCheck = function (value) {
            if (this.x <= value) {
                this._repeat(this._boundsRight);
            }
        };
        Chimney.prototype._repeat = function (value) {
            this.x = 2 * value;
            this.y = Math.floor(Math.random() * this._boundsDown);
            // END SCENE Trigger
            // -- So game is finite
            scene = config.Scene.OVER;
            changeScene();
        };
        // Public Methods
        Chimney.prototype.update = function () {
            // Moves right to left
            this.x += this._speed.x;
            this._boundsCheck(this._boundsLeft);
        };
        return Chimney;
    }(objects.GameObject));
    objects.Chimney = Chimney;
})(objects || (objects = {}));
//# sourceMappingURL=chimney.js.map