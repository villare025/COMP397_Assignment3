var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    File Name:             Scene Game - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Saturday, November 19th, 2016
    Website Name:          EV - COMP397 - Assignment 3
    Program Description:   JS file that contains the components that
                           are required to render the game's Game scene.
    Revision History:      Add Santa, OOGIES, and chimney
*/
var scenes;
(function (scenes) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this);
        }
        Game.prototype.start = function () {
            // Initialize Game Values
            this._oogieCount = 5;
            // Instantiate Blimp array
            this._oogie = new Array();
            // Create BG for scene and add to Game Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BG_HangM"));
            this.addChild(this._bg);
            // added Oogies to the scene
            for (var oogie = 0; oogie < this._oogieCount; oogie++) {
                this._oogie[oogie] = new objects.Oogie();
                this.addChild(this._oogie[oogie]);
            }
            // added santa to the scene
            this._santa = new objects.Santa();
            this.addChild(this._santa);
            // added chimney to the scene
            this._chimney = new objects.Chimney();
            this.addChild(this._chimney);
            // Add SCORE Label to scene.
            this._scoreGO = new objects.Label("Score: " + globalScore.toString(), "20px Special Elite", "#000", config.Screen.CENTER_X - 225, 50);
            this.addChild(this._scoreGO);
            // Add NEXT Button to scene. Register for click callback function
            this._next = new objects.Button("BTN_Next", 475, 400);
            this._next.on("click", this._nextBtnClick, this);
            // Add GAME scene to main stage container. 
            stage.addChild(this);
        };
        // Run on every tick
        Game.prototype.update = function () {
            this._santa.update();
            this._chimney.update();
            this._oogie.forEach(function (oogie) {
                oogie.update();
            });
            // Update Score
            this._scoreGO.text = "Score: " + globalScore.toString();
        };
        // Function for when NEXT button is pressed
        Game.prototype._nextBtnClick = function (event) {
            // Set global variable to MENU Scene and call changescene function
            scene = config.Scene.OVER;
            changeScene();
        };
        return Game;
    }(objects.Scene));
    scenes.Game = Game;
})(scenes || (scenes = {}));
//# sourceMappingURL=game.js.map