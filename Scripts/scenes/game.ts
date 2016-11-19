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
module scenes {
    export class Game extends objects.Scene {

        private _bg: createjs.Bitmap;
        private _next: objects.Button;

        // GO (game object)
        private _scoreGO: objects.Label;
        private _chimney: objects.Chimney;
        private _santa: objects.Santa;
        private _oogie: objects.Oogie[];
        private _oogieCount: number;

        constructor() {
            super();
        }

        public start(): void {
            // Initialize Game Values
            this._oogieCount = 5;

            // Instantiate Blimp array
            this._oogie = new Array<objects.Oogie>();

            // Create BG for scene and add to Game Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BG_HangM"));
            this.addChild(this._bg);

            // added Oogies to the scene
            for (var oogie: number = 0; oogie < this._oogieCount; oogie++) {
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
        }

        // Run on every tick
        public update(): void {
            this._santa.update();

            this._chimney.update();

            this._oogie.forEach(oogie => {
                oogie.update();
            });

            // Update Score
            this._scoreGO.text = "Score: " + globalScore.toString();
        }

        // Function for when NEXT button is pressed
        private _nextBtnClick(event: createjs.MouseEvent) {
            // Set global variable to MENU Scene and call changescene function
            scene = config.Scene.OVER;
            changeScene();
        }
    }
}