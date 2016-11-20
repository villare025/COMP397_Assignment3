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
    Revision History:      Hide Default Mouse
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
            this._oogie = new Array();
            // Instantiate Icicles array
            this._icicles = new Array();
            // Instantiate CookiesMilk array
            this._cookiesMilk = new Array();
            // Instantiate Presents array
            this._present = new Array();
            // Create BG for scene and add to Game Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BG_Game"));
            this.addChild(this._bg);
            // added Oogies to the scene
            for (var oogie = 0; oogie < this._oogieCount; oogie++) {
                this._oogie[oogie] = new objects.Oogie();
                this.addChild(this._oogie[oogie]);
            }
            // added Icicles to the scene
            for (var icicle = 0; icicle < this._iciclesCount; icicle++) {
                this._icicles[icicle] = new objects.Icicles();
                this.addChild(this._icicles[icicle]);
            }
            // added CookiesMilk to the scene
            for (var cookiesMilk = 0; cookiesMilk < this._cookiesMilkCount; cookiesMilk++) {
                this._cookiesMilk[cookiesMilk] = new objects.CookiesMilk();
                this.addChild(this._cookiesMilk[cookiesMilk]);
            }
            // added Presents to the scene
            for (var present = 0; present < this._presentCount; present++) {
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
        };
        // Run on every tick
        Game.prototype.update = function () {
            var _this = this;
            this._santa.update();
            this._endTimer--;
            console.log(this._endTimer);
            if (this._endTimer == 0) {
                this._moveChimney = true;
                console.log("true");
            }
            if (this._moveChimney) {
                this._chimney.update();
                this._collision.check(this._chimney, this);
            }
            this._oogie.forEach(function (oogie) {
                oogie.update();
                _this._collision.check(oogie, _this);
            });
            this._icicles.forEach(function (icicle) {
                icicle.update();
                _this._collision.check(icicle, _this);
            });
            this._cookiesMilk.forEach(function (cookiesMilk) {
                cookiesMilk.update();
                _this._collision.check(cookiesMilk, _this);
            });
            this._present.forEach(function (present) {
                present.update();
                _this._collision.check(present, _this);
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
        };
        Game.prototype._collideOogieBoogie = function () {
            console.log("Hit Oogie Boogie...");
            globalHealth--;
            // END GAME
            if (globalHealth == 0) {
                scene = config.Scene.OVER;
                changeScene();
            }
        };
        Game.prototype._collideIcyIcicles = function () {
            console.log("Hit Icy Icicles...");
            globalHealth--;
            // END GAME
            if (globalHealth == 0) {
                scene = config.Scene.OVER;
                changeScene();
            }
        };
        Game.prototype._collideFoodForSanta = function () {
            console.log("Collecting Santa's Favourites...");
            globalScore += 50;
        };
        Game.prototype._collidePresentsForGoodKids = function () {
            console.log("Collecting presents...");
            globalScore += 100;
        };
        Game.prototype._collideItsTime = function () {
            console.log("INTO the chimney...");
            globalScore += 200;
            scene = config.Scene.OVER;
            changeScene();
        };
        return Game;
    }(objects.Scene));
    scenes.Game = Game;
})(scenes || (scenes = {}));
//# sourceMappingURL=game.js.map