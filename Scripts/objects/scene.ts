/*
    File Name:             Assets Object - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
	Last Modified Date:    Saturday, November 19th, 2016
	Website Name:          EV - COMP397 - Assignment 3
	Program Description:   TS/JS file that contains the components that
                           are required to render the game's Assets object.
                           Scene class extends a container object used to 
                           store object associated with a particular scene. 
    Revision History:      Initial Commit
*/

module objects {
    export class Scene extends createjs.Container {
        constructor() {
            super();
            this.start();
        }

        // When this object starts, add it to the current global stage container.
        public start() : void {
            stage.addChild(this);
        }

        public update() : void {
            
        }
    }
}