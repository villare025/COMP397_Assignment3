/*
	File Name:             Scene Game - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino 
	Last Modified Date:    Sunday, November 20th, 2016
	Website Name:          EV - COMP397 - Assignment 3
	Program Description:   JS file that contains the components that
                           are required to render the game's Game scene.
    Revision History:      Add scolling background 
*/
module scenes {
    export class Game extends objects.Scene {

        private _bg: createjs.Bitmap;
        private _next: objects.Button;

        // GO (game object)
        private _background: objects.Background;
        private _scoreGO: objects.Label;
        private _healthGO: objects.Label;
        private _chimney: objects.Chimney;
        private _santa: objects.Santa;
        private _collision: reactions.Collision;
        private _oogie: objects.Oogie[];
        private _oogieCount: number;
        private _icicles: objects.Icicles[];
        private _iciclesCount: number;
        private _cookiesMilk: objects.CookiesMilk[];
        private _cookiesMilkCount: number;
        private _present2: objects.Presents;
        private _present: objects.Presents[];
        private _presentCount: number;

        private _pseudoTimer: number;
        private _moveExtraPresents: boolean;

        private _endTimer: number;
        private _moveChimney: boolean;

        constructor() {
            super();
        }

        public start(): void {
            // Initialize Game Values
            globalScore = 0;
            globalHealth = 500;

            this._moveChimney = false;
            this._endTimer = 2000;
            this._moveExtraPresents = false;
            this._pseudoTimer = 500;
            this._oogieCount = 1;
            this._iciclesCount = 3;
            this._cookiesMilkCount = 2;
            this._presentCount = 1;

            // Instantiate Oogies array
            this._oogie = new Array<objects.Oogie>();

            // Instantiate Icicles array
            this._icicles = new Array<objects.Icicles>();

            // Instantiate CookiesMilk array
            this._cookiesMilk = new Array<objects.CookiesMilk>();

            // Instantiate Presents array
            this._present = new Array<objects.Presents>();

            // Create BG for scene and add to Game Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BG_Game"));
            this.addChild(this._bg);
            
            // Create SCROLLING BG for scene and add to Game Scene container
            this._background = new objects.Background();
            this.addChild(this._background);

            // added Oogies to the scene
            for (var oogie: number = 0; oogie < this._oogieCount; oogie++) {
                this._oogie[oogie] = new objects.Oogie();
                this.addChild(this._oogie[oogie]);
            }

            // added Icicles to the scene
            for (var icicle: number = 0; icicle < this._iciclesCount; icicle++) {
                this._icicles[icicle] = new objects.Icicles();
                this.addChild(this._icicles[icicle]);
            }

            // added CookiesMilk to the scene
            for (var cookiesMilk: number = 0; cookiesMilk < this._cookiesMilkCount; cookiesMilk++) {
                this._cookiesMilk[cookiesMilk] = new objects.CookiesMilk();
                this.addChild(this._cookiesMilk[cookiesMilk]);
            }

            // added Presents to the scene
            for (var present: number = 0; present < this._presentCount; present++) {
                this._present[present] = new objects.Presents();
                this.addChild(this._present[present]);
            }
            this._present2 = new objects.Presents();
            this.addChild(this._present2);

            // added santa to the scene
            this._santa = new objects.Santa();
            this.addChild(this._santa);

            // added collision reaction to the scene
            this._collision = new reactions.Collision(this._santa);

            // added chimney to the scene
            this._chimney = new objects.Chimney();
            this.addChild(this._chimney);

            // Add SCORE Label to scene.
            this._scoreGO = new objects.Label("Score: " + globalScore.toString(), "Bold 40px Mountains of Christmas", "#000", config.Screen.CENTER_X - 225, 45);
            this.addChild(this._scoreGO);

            // Add HEALTH Label to scene.
            this._healthGO = new objects.Label("Health: " + globalHealth.toString(), "Bold 40px Mountains of Christmas", "#000", config.Screen.CENTER_X + 50, config.Screen.CENTER_Y - 195);
            this.addChild(this._healthGO);

            //specific names given for event handlers for callback in collision.ts
            this.on('collideOogieBoogie', this._collideOogieBoogie, this);

            this.on('collideIcyIcicles', this._collideIcyIcicles, this);

            this.on('collideFoodForSanta', this._collideFoodForSanta, this);

            this.on('collidePresentsForGoodKids', this._collidePresentsForGoodKids, this);

            this.on('collideItsTime', this._collideItsTime, this);

            // Mousy mouse
            stage.cursor = "none"; // Hide the default mouse cuz santa is the mouse

            // Add GAME scene to main stage container. 
            stage.addChild(this);
        }

        // Run on every tick
        public update(): void {
            this._background.update();
            this._santa.update();


            this._endTimer--;
            console.log(this._endTimer);

            if (this._endTimer == 0) {
                this._moveChimney = true;
                console.log("true")
            }

            if (this._moveChimney) {
                this._chimney.update();
                this._collision.check(this._chimney, this);
            }

            this._oogie.forEach(oogie => {
                oogie.update();
                this._collision.check(oogie, this);
            });

            this._icicles.forEach(icicle => {
                icicle.update();
                this._collision.check(icicle, this);
            });

            this._cookiesMilk.forEach(cookiesMilk => {
                cookiesMilk.update();
                this._collision.check(cookiesMilk, this);
            });

            this._present.forEach(present => {
                present.update();
                this._collision.check(present, this);
            });

            // Update Score
            this._scoreGO.text = "Score: " + globalScore.toString();

            // Update Health
            this._healthGO.text = "Health: " + globalHealth.toString();

            if (this._pseudoTimer >= 0) {
                this._pseudoTimer--;
            }

            if (this._pseudoTimer == 0) {
                this._moveExtraPresents = true;
                this._pseudoTimer = 500;
            }

            if (this._moveExtraPresents) {
                this._present2.update();
                this._collision.check(this._present2, this);
            }
            //console.log(this._pseudoTimer);
        }

        private _collideOogieBoogie(): void {
            console.log("Hit Oogie Boogie...");
            globalHealth--;
            // END GAME
            if (globalHealth == 0) {
                scene = config.Scene.OVER;
                changeScene();
            }
        }

        private _collideIcyIcicles(): void {
            console.log("Hit Icy Icicles...");
            globalHealth--;
            // END GAME
            if (globalHealth == 0) {
                scene = config.Scene.OVER;
                changeScene();
            }
        }

        private _collideFoodForSanta(): void {
            console.log("Collecting Santa's Favourites...");
            globalScore += 50;
        }

        private _collidePresentsForGoodKids(): void {
            console.log("Collecting presents...");
            globalScore += 100;
        }

        private _collideItsTime(): void {
            console.log("INTO the chimney...");
            globalScore += 200;
            scene = config.Scene.OVER;
            changeScene();
        }
    }
}