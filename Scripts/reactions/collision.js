/*
    File Name:             Collision Reactions - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Saturday, November 19th, 2016
    Website Name:          EV - COMP397 - Assignment 3
    Program Description:   TS/JS file that contains the components that
                           are required to render the game's collision reaction.
    Revision History:      Initial Commit
*/
var reactions;
(function (reactions) {
    // Class = COLLISION 
    var Collision = (function () {
        // Constructor Method
        function Collision(santa) {
            this._santa = santa;
        }
        // Public Methods
        Collision.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        Collision.prototype.check = function (object, eventHandler) {
            var startPnt = new createjs.Point();
            var endPnt = new createjs.Point();
            var sntHeightHalf = this._santa.height * 0.5;
            var objHeightHalf = object.height * 0.5;
            var minDist = sntHeightHalf + objHeightHalf;
            startPnt.x = this._santa.x;
            startPnt.y = this._santa.y;
            endPnt.x = object.centerX + object.x;
            endPnt.y = object.centerY + object.y;
            /* Check Santa & Object Distance if less than min distance */
            if (this.distance(startPnt, endPnt) < minDist) {
                // ENEMIES COLLISION CHECK 
                // -- Oogie Boogie
                if (object.name === "oogie") {
                    eventHandler.dispatchEvent("collideOogieBoogie");
                }
                // -- Icicles
                if (object.name === "icicles") {
                    eventHandler.dispatchEvent("collideIcyIcicles");
                }
                // FRIEND COLLISION CHECK
                // -- Cookies and Milk
                if (object.name === "cookiesmilk") {
                    eventHandler.dispatchEvent("collideFoodForSanta");
                }
                // -- Presents
                if (object.name === "presents") {
                    eventHandler.dispatchEvent("collidePresentsForGoodKids");
                }
                // END GOAL COLLISION CHECK
                // -- Chimney
                if (object.name === "chimney") {
                    eventHandler.dispatchEvent("collideItsTime");
                }
            }
        };
        return Collision;
    }());
    reactions.Collision = Collision;
})(reactions || (reactions = {}));
//# sourceMappingURL=collision.js.map