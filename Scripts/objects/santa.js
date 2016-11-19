var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    File Name:             Santa Object (Player) - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Saturday, November 19th, 2016
    Website Name:          EV - COMP397 - Assignment 3
    Program Description:   TS/JS file that contains the components that
                           are required to render the game's Santa (Player) object.
    Revision History:      Initial Commit
*/
var objects;
(function (objects) {
    // Class = SANTA 
    var Santa = (function (_super) {
        __extends(Santa, _super);
        // Constructor Method
        function Santa() {
            _super.call(this, assets.getResult("Santa"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._topBounds = this.height * 0.5 + 30;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);
            this._leftBounds = this.width * 0.5;
            this._rightBounds = config.Screen.WIDTH - (this.width * 0.5);
            this.x = 50;
            this.y = 450;
        }
        // Private Methods
        Santa.prototype._checkBounds = function () {
            if (this.x < this._leftBounds) {
                this.x = this._leftBounds;
            }
            if (this.x > this._rightBounds) {
                this.x = this._rightBounds;
            }
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }
            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
        };
        // Public Methods
        Santa.prototype.update = function () {
            this.x = stage.mouseX;
            this.y = stage.mouseY;
            this._checkBounds();
        };
        return Santa;
    }(createjs.Bitmap));
    objects.Santa = Santa;
})(objects || (objects = {}));
//# sourceMappingURL=santa.js.map