"use strict";

const BloggifyAdapter = require("../lib");

// Extend a class from the BloggifyAdapter class
class MyAdapter extends BloggifyAdapter {
    getArticleById (id, cb) {
        cb(null, {
            id: id
        });
    }
}

// Create a new instance of this adapter.
let adapter = new MyAdapter();

adapter.getArticleById(123, (err, data) => console.log(err || data));
// => { id: 123 }
