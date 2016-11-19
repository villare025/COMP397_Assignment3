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
var objects;
(function (objects) {
    var Asset = (function () {
        function Asset(id, src) {
            this.id = id;
            this.src = src;
        }
        return Asset;
    }());
    objects.Asset = Asset;
})(objects || (objects = {}));
//# sourceMappingURL=asset.js.map