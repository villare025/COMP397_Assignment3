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

module scenes {
    export class Gameover extends objects.Scene {

        // PRIVATE VARIABLES
        private _bg: createjs.Bitmap;
        private _score: objects.Label;
        private _scorePrevious: objects.Label;
        private _scoreNow: objects.Label;
        private _againBtnMenu: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start(): void {
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
        }

        // Run on every tick
        public update(): void {
            // Update objects
        }

        // Function to check Player HighScore
        private _checkHighScore() {
            console.log("Food: " + collectedFood);
            console.log("Presents: " + collectedPresents);
            var localHS = localStorage.getItem("HighScore");
            var nLocal = Number(localHS);
            this._scorePrevious.text = "Previous High Score: " + localHS;

            if (localStorage.getItem("HighScore") === null) {
                localStorage.setItem("HighScore", globalScore.toString());
                this._scorePrevious.text = "";
                this._score.text = "You have set the highscore!";
            } else {
                if (globalScore >= nLocal) {
                    localStorage.setItem("HighScore", globalScore.toString());
                    this._score.text = "You have beaten the highscore!";
                }
                else {
                    this._score.text = "You have not beaten the highscore!";
                }
            }
        }
        // Function for when MENU/REPLAY button is pressed
        private _menuButtonClick(event: createjs.MouseEvent) {
            // Change global scene variable to MENU. Call global changeScene() function
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}