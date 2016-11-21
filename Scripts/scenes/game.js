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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Game = (function (_super) {
        __extends(Game, _super);
        // CONSTRUCTOR
        function Game() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Game.prototype.start = function () {
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
            this._oogie = new Array();
            // -- Icicles array
            this._icicles = new Array();
            // -- CookiesMilk array
            this._cookiesMilk = new Array();
            // -- Presents array
            this._present = new Array();
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
            for (var oogie = 0; oogie < this._oogieCount; oogie++) {
                this._oogie[oogie] = new objects.Oogie();
                this.addChild(this._oogie[oogie]);
            }
            // -- Calling all ICICLES to the scene
            for (var icicle = 0; icicle < this._iciclesCount; icicle++) {
                this._icicles[icicle] = new objects.Icicles();
                this.addChild(this._icicles[icicle]);
            }
            // -- Calling all COOKIES AND MILK (for Santa only) to the scene
            for (var cookiesMilk = 0; cookiesMilk < this._cookiesMilkCount; cookiesMilk++) {
                this._cookiesMilk[cookiesMilk] = new objects.CookiesMilk();
                this.addChild(this._cookiesMilk[cookiesMilk]);
            }
            // -- Calling all PRESENTS to the scene
            for (var present = 0; present < this._presentCount; present++) {
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
        };
        // Run on every tick
        Game.prototype.update = function () {
            var _this = this;
            // Do the countdown for the Chimney
            if (this._endTimer >= 0) {
                this._endTimer--;
            }
            //console.log(this._endTimer);
            // Countdown has finished, MOVE the Chimney
            if (this._endTimer == 0) {
                this._moveChimney = true;
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
            this._oogie.forEach(function (oogie) {
                oogie.update();
                _this._collision.check(oogie, _this);
            });
            // -- Icicles are falling
            this._icicles.forEach(function (icicle) {
                icicle.update();
                _this._collision.check(icicle, _this);
            });
            // -- Cookies and Milk are heading "towards" Santa
            this._cookiesMilk.forEach(function (cookiesMilk) {
                cookiesMilk.update();
                _this._collision.check(cookiesMilk, _this);
            });
            // -- Presents are heading "towards" Santa
            this._present.forEach(function (present) {
                present.update();
                _this._collision.check(present, _this);
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
        };
        // PRIVATE METHODS
        // -- Function for when _collideOogieBoogie event is called
        Game.prototype._collideOogieBoogie = function () {
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
        };
        // -- Function for when _collideIcyIcicles event is called
        Game.prototype._collideIcyIcicles = function () {
            //console.log("Hit Icy Icicles..."); // check hit
            // Diminish Santa's Health
            globalHealth--;
            // END GAME
            // -- Change global scene variable to OVER. Call global changeScene() function
            if (globalHealth == 0) {
                scene = config.Scene.OVER;
                changeScene();
            }
        };
        // -- Function for when _collideFoodForSanta event is called
        Game.prototype._collideFoodForSanta = function () {
            //console.log("Collecting Santa's Favourites..."); // check hit
            // Add to Santa's Score
            globalScore += 50;
        };
        // -- Function for when _collidePresentsForGoodKids event is called
        Game.prototype._collidePresentsForGoodKids = function () {
            //console.log("Collecting presents..."); // check hit
            // Add to Santa's Score
            globalScore += 100;
        };
        // -- Function for when _collideItsTime event is called
        Game.prototype._collideItsTime = function () {
            //console.log("INTO the chimney..."); // check hit
            // Add to  Santa's Score
            globalScore += 200;
            // END GAME
            // -- Change global scene variable to OVER. Call global changeScene() function
            scene = config.Scene.OVER;
            changeScene();
        };
        return Game;
    }(objects.Scene));
    scenes.Game = Game;
})(scenes || (scenes = {}));
//# sourceMappingURL=game.js.map