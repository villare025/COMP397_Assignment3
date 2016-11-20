/*
    File Name:             Scene Game Over - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Sunday, November 20th, 2016
    Website Name:          EV - COMP397 - Assignment 3
    Program Description:   JS file that contains the components that
                           are required to render the game's Game Over scene.
    Revision History:      Add Replay - return to menu, and bring back the mouse
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Gameover = (function (_super) {
        __extends(Gameover, _super);
        // CONSTRUCTOR
        function Gameover() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Gameover.prototype.start = function () {
            // Add objects to the scene
            console.log("Game scene started");
            this._bg = new createjs.Bitmap(assets.getResult("BG_Over"));
            this.addChild(this._bg);
            this._score = new objects.Label("Score: " + globalScore.toString(), "40px Mountains of Christmas", "#000", 175, 220);
            this._score.outline = 2;
            this.addChild(this._score);
            this._scorePrevious = new objects.Label("Previous High Score: ", "40px Mountains of Christmas", "#000", 290, 325);
            this._scorePrevious.outline = 2;
            this.addChild(this._scorePrevious);
            this._scoreNow = new objects.Label("Your High Score: " + globalScore.toString(), "40px Mountains of Christmas", "#000", 270, 375);
            this._scoreNow.outline = 2;
            this.addChild(this._scoreNow);
            this._checkHighScore();
            // Add MENU/REPLAY Button to scene. Register for click callback function
            this._againBtnMenu = new objects.Button("BTN_Menu", config.Screen.CENTER_X, config.Screen.CENTER_Y + 190);
            this.addChild(this._againBtnMenu);
            this._againBtnMenu.on("click", this._menuButtonClick, this);
            // Mousy mouse
            stage.cursor = "arrow"; // Bring back the mouse cuz santa has arrived
            // Add GAME OVER scene to main stage container. 
            stage.addChild(this);
        };
        // Run on every tick
        Gameover.prototype.update = function () {
            // Update objects
        };
        // Function to check Player HighScore
        Gameover.prototype._checkHighScore = function () {
            console.log("Food: " + collectedFood);
            console.log("Presents: " + collectedPresents);
            var localHS = localStorage.getItem("HighScore");
            var nLocal = Number(localHS);
            this._scorePrevious.text = "Previous High Score: " + localHS;
            if (localStorage.getItem("HighScore") === null) {
                localStorage.setItem("HighScore", globalScore.toString());
                this._scorePrevious.text = "";
                this._score.text = "You have set the highscore!";
            }
            else {
                if (globalScore >= nLocal) {
                    localStorage.setItem("HighScore", globalScore.toString());
                    this._score.text = "You have beaten the highscore!";
                }
                else {
                    this._score.text = "You have not beaten the highscore!";
                }
            }
        };
        // Function for when MENU/REPLAY button is pressed
        Gameover.prototype._menuButtonClick = function (event) {
            // Change global scene variable to MENU. Call global changeScene() function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Gameover;
    }(objects.Scene));
    scenes.Gameover = Gameover;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map