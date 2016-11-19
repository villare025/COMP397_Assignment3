/*
    File Name:             Assets Object - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
	Last Modified Date:    Saturday, November 19th, 2016
	Website Name:          EV - COMP397 - Assignment 3
	Program Description:   TS/JS file that contains the components that
                           are required to render the game's Assets object.
                           Asset class defines a typical asset loaded in 
                           such as images, sprites, bitmaps, etc.
    Revision History:      Initial Commit
*/

module objects {
    export class Asset {
        // ID stores a simple identifier that is used to retrieve src path to location of the asset.
        public id:string;
        public src:string;

        constructor(id:string, src:string) {
            this.id = id;
            this.src = src;
        }
    }
}