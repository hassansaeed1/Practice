"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist, title, tracks) {
    const album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("The Beatles", "Abbey Road");
var album2 = make_album("Pink Floyd", "The Wall", 26);
var album3 = make_album("Led Zeppelin", "IV", 8);
console.log(album1);
console.log(album2);
console.log(album3);
