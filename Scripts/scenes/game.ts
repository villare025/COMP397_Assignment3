/*
	File Name:             Scene Game - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino 
	Last Modified Date:    Sunday, November 20th, 2016
	Website Name:          EV - COMP397 - Assignment 3
	Program Description:   JS file that contains the components that
                           are required to render the game's Game scene.
    Revision History:      Clean up and add more comments 
*/

module scenes {
    export class Game extends objects.Scene {

        // PRIVATE VARIABLES
        // -- Background
        private _bg: createjs.Bitmap;
        private _background: objects.Background;
        // -- UI 
        private _scoreGO: objects.Label;
        private _healthGO: objects.Label;

        // -- Game Objects (GO)
        private _chimney: objects.Chimney;
        private _santa: objects.Santa;
        private _oogie: objects.Oogie[];
        private _oogieCount: number;
        private _icicles: objects.Icicles[];
        private _iciclesCount: number;
        private _cookiesMilk: objects.CookiesMilk[];
        private _cookiesMilkCount: number;
        private _present: objects.Presents[];
        private _presentCount: number;
        private _present2: objects.Presents;

        // -- Reaction
        private _collision: reactions.Collision;

        // -- Timers
        // --- Present Delay
        private _pseudoTimer: number;
        private _moveExtraPresents: boolean;
        // --- End the Level Delay
        private _endTimer: number;
        private _moveChimney: boolean;

        // CONSTRUCTOR
        constructor() {
            super();
        }
        // PUBLIC FUNCTIONS
        public start(): void {
            // Add objects to the scene

            // Start Game Music -- SLEIGH RIDE
            createjs.Sound.stop();
            var bgAll = createjs.Sound.play("MUSE_Game");
            bgAll.play({ interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1, volume: 0.25 });

            // Initialize Game Values
            // -- UI
            globalScore = 0;
            globalHealth = 500;

            // -- GO
            this._oogieCount = 1;
            this._iciclesCount = 3;
            this._cookiesMilkCount = 2;
            this._presentCount = 1;

            // -- Timers
            this._moveChimney = false;
            this._endTimer = 2000; // Approximately 1 min and 10 seconds for the level to run before ending 
            this._moveExtraPresents = false;
            this._pseudoTimer = 500;

            // Instantiate GO Arrays
            // -- Oogies array
            this._oogie = new Array<objects.Oogie>();
            // -- Icicles array
            this._icicles = new Array<objects.Icicles>();
            // -- CookiesMilk array
            this._cookiesMilk = new Array<objects.CookiesMilk>();
            // -- Presents array
            this._present = new Array<objects.Presents>();

            // BACKGROUNDS 
            // -- Create STATIC BG for scene and add to Game Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BG_Game"));
            this.addChild(this._bg);
            // -- Create SCROLLING BG for scene and add to Game Scene container
            this._background = new objects.Background();
            this.addChild(this._background);
            // --- Blur the SCROLLING Background Image
            var blurFilter = new createjs.BlurFilter(2, 2, 1);
            this._background.filters = [blurFilter];
            var bounds = blurFilter.getBounds();
            // --- Blur EVERYTHING in the image
            this._background.cache(bounds.x, bounds.y, 3236 + bounds.width, 480 + bounds.height);

            // Add GOs to Scene
            // -- Calling all OOGIE BOOGIES to the scene
            for (var oogie: number = 0; oogie < this._oogieCount; oogie++) {
                this._oogie[oogie] = new objects.Oogie();
                this.addChild(this._oogie[oogie]);
            }
            // -- Calling all ICICLES to the scene
            for (var icicle: number = 0; icicle < this._iciclesCount; icicle++) {
                this._icicles[icicle] = new objects.Icicles();
                this.addChild(this._icicles[icicle]);
            }
            // -- Calling all COOKIES AND MILK (for Santa only) to the scene
            for (var cookiesMilk: number = 0; cookiesMilk < this._cookiesMilkCount; cookiesMilk++) {
                this._cookiesMilk[cookiesMilk] = new objects.CookiesMilk();
                this.addChild(this._cookiesMilk[cookiesMilk]);
            }
            // -- Calling all PRESENTS to the scene
            for (var present: number = 0; present < this._presentCount; present++) {
                this._present[present] = new objects.Presents();
                this.addChild(this._present[present]);
            }
            // -- Calling PRESENT2 to the scene
            this._present2 = new objects.Presents();
            this.addChild(this._present2);
            // -- Calling the main man of the night SANTA CLAUS AND HIS SLEIGH RIDE to the scene
            this._santa = new objects.Santa();
            this.addChild(this._santa);
            // --- SANTA has to REACT to other GO; Calling Santa's acting skill
            this._collision = new reactions.Collision(this._santa);
            // -- Calling the goal, CHIMNEY to the scene
            this._chimney = new objects.Chimney();
            this.addChild(this._chimney);

            // Add UI GOs to Scene
            // -- Print SCORE Label to scene.
            this._scoreGO = new objects.Label("Score: " + globalScore.toString(), "Bold 40px Mountains of Christmas", "#FFF", config.Screen.CENTER_X - 225, 45);
            this.addChild(this._scoreGO);
            // -- Print HEALTH Label to scene.
            this._healthGO = new objects.Label("Health: " + globalHealth.toString(), "Bold 40px Mountains of Christmas", "#FFF", config.Screen.CENTER_X + 50, config.Screen.CENTER_Y - 195);
            this.addChild(this._healthGO);

            // Activate reactions to called EVENTS based on collision reaction
            this.on('collideOogieBoogie', this._collideOogieBoogie, this); // OOGIE BOOGIES
            this.on('collideIcyIcicles', this._collideIcyIcicles, this); // ICICLES
            this.on('collideFoodForSanta', this._collideFoodForSanta, this); // COOKIES AND MILK
            this.on('collidePresentsForGoodKids', this._collidePresentsForGoodKids, this); // PRESENTS
            this.on('collideItsTime', this._collideItsTime, this); // CHIMNEY

            // Mousy mouse Controls
            stage.cursor = "none"; // Hide the default mouse cuz santa is the mouse

            // Add GAME scene to main stage container. 
            stage.addChild(this);
        }

        // Run on every tick
        public update(): void {
            // Do the countdown for the Chimney
            if (this._endTimer >= 0) {
                this._endTimer--;
            }
            //console.log(this._endTimer);
            // Countdown has finished, MOVE the Chimney
            if (this._endTimer == 0) {
                this._moveChimney = true;
                //console.log("true")
            }
            if (this._moveChimney) {
                this._chimney.update();
                this._collision.check(this._chimney, this);
            }

            // MOVE GOs
            // -- Scroll the background
            this._background.update();
            // -- Santa rides around the scene
            this._santa.update();
            // -- Oogies are falling
            this._oogie.forEach(oogie => {
                oogie.update();
                this._collision.check(oogie, this);
            });
            // -- Icicles are falling
            this._icicles.forEach(icicle => {
                icicle.update();
                this._collision.check(icicle, this);
            });
            // -- Cookies and Milk are heading "towards" Santa
            this._cookiesMilk.forEach(cookiesMilk => {
                cookiesMilk.update();
                this._collision.check(cookiesMilk, this);
            });
            // -- Presents are heading "towards" Santa
            this._present.forEach(present => {
                present.update();
                this._collision.check(present, this);
            });
            // --- Do the countdown for Present2 
            if (this._pseudoTimer >= 0) {
                this._pseudoTimer--;
            }
            // --- Countdown has finished, MOVE the Present2
            if (this._pseudoTimer == 0) {
                this._moveExtraPresents = true;
                this._pseudoTimer = 500;
            }
            if (this._moveExtraPresents) {
                this._present2.update();
                this._collision.check(this._present2, this);
            }

            // Update UI
            // -- Show current Score
            this._scoreGO.text = "Score: " + globalScore.toString();
            // -- Show current Health
            this._healthGO.text = "Health: " + globalHealth.toString();
        }

        // PRIVATE METHODS
        // -- Function for when _collideOogieBoogie event is called
        private _collideOogieBoogie(): void {
            //console.log("Hit Oogie Boogie..."); // check hit
            // Diminish Santa's Health and Score
            globalHealth--;
            globalScore -= 10;
            // END GAME
            // -- Change global scene variable to OVER. Call global changeScene() function
            if (globalHealth == 0) {
                scene = config.Scene.OVER;
                changeScene();
            }
        }
        // -- Function for when _collideIcyIcicles event is called
        private _collideIcyIcicles(): void {
            //console.log("Hit Icy Icicles..."); // check hit
            // Diminish Santa's Health
            globalHealth--;
            // END GAME
            // -- Change global scene variable to OVER. Call global changeScene() function
            if (globalHealth == 0) {
                scene = config.Scene.OVER;
                changeScene();
            }
        }
        // -- Function for when _collideFoodForSanta event is called
        private _collideFoodForSanta(): void {
            //console.log("Collecting Santa's Favourites..."); // check hit
            // Add to Santa's Score
            globalScore += 50;
        }
        // -- Function for when _collidePresentsForGoodKids event is called
        private _collidePresentsForGoodKids(): void {
            //console.log("Collecting presents..."); // check hit
            // Add to Santa's Score
            globalScore += 100;
        }
        // -- Function for when _collideItsTime event is called
        private _collideItsTime(): void {
            //console.log("INTO the chimney..."); // check hit
            // Add to  Santa's Score
            globalScore += 200;
            // END GAME
            // -- Change global scene variable to OVER. Call global changeScene() function
            scene = config.Scene.OVER;
            changeScene();
        }
    }
}