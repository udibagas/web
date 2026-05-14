"use strict";
const fs = require("fs");

// CRUD = create, read, update, delete

Read(sync);
const data = fs.readFileSync("./data.json", "utf-8");
// ubah json string menjadi object
const parsedData = JSON.parse(data);
console.log(parsedData);
