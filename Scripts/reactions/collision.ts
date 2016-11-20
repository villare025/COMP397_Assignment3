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
module reactions {
    // Class = COLLISION 
    export class Collision {
        // Private Instance Variable
        private _santa: objects.Santa;

        // Constructor Method
        constructor(santa: objects.Santa) {
            this._santa = santa;
        }

        // Public Methods
        public distance(startPoint: createjs.Point, endPoint: createjs.Point): number {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2))
        }

        public check(object: objects.GameObject, eventHandler: scenes.Game) {
            var startPnt: createjs.Point = new createjs.Point();
            var endPnt: createjs.Point = new createjs.Point();
            var sntHeightHalf: number = this._santa.height * 0.5;
            var objHeightHalf: number = object.height * 0.5;
            var minDist: number = sntHeightHalf + objHeightHalf;

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
        }
    }
}