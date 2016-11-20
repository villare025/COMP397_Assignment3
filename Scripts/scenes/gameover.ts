/*
	File Name:             Scene Game Over - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino 
	Last Modified Date:    Saturday, November 19th, 2016
	Website Name:          EV - COMP397 - Assignment 3
	Program Description:   JS file that contains the components that
                           are required to render the game's Game Over scene.
    Revision History:      Initial Commit
*/

module scenes {
    export class Gameover extends objects.Scene {

        // PRIVATE VARIABLES
        private _bg: createjs.Bitmap;
        private _score: objects.Label;
        private _scorePrevious: objects.Label;
        private _scoreNow: objects.Label;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start(): void {
            // Add objects to the scene
            console.log("Game scene started");

            this._bg = new createjs.Bitmap(assets.getResult("BG_Title"));
            this.addChild(this._bg);

            this._score = new objects.Label("Score: " + globalScore.toString(), "30px Mountains of Christmas", "#FFF", 125, 200);
            this.addChild(this._score);

            this._scorePrevious = new objects.Label("Previous High Score: ", "30px Mountains of Christmas", "#FFF", 205, 300);
            this.addChild(this._scorePrevious);

            this._scoreNow = new objects.Label("Your High Score: " + globalScore.toString(), "30px Mountains of Christmas", "#FFF", 190, 350);
            this.addChild(this._scoreNow);

            this._checkHighScore();

            // Add GAME OVER scene to main stage container. 
            stage.addChild(this);
        }

        public update(): void {
            // Update objects
        }

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
    }
}