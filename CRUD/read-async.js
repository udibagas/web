"use strict";

const fs = require("fs");

// bulk
function getAllUsers() {
  fs.readFile("./data.json", "utf-8", (err, data) => {
    // err => instance dari class Error atau turunannya
    // instance Error dan turunannya punya property message
    if (err) {
      console.error(err.message);
    } else {
      const parsedData = JSON.parse(data);
      console.table(parsedData);
    }
  });
}

// single data (by id)
function getOneUserById(id) {
  fs.readFile("./data.json", "utf-8", (err, data) => {
    if (err) {
      console.error(err.message);
    } else {
      const parsedData = JSON.parse(data);
      // filter 1 data berdasarkan id
      const user = parsedData.find((u) => u.id == id);

      if (!user) {
        console.log(`User dengan id ${id} tidak ditemukan`);
      } else {
        console.log(user);
      }
    }
  });
}

const id = process.argv[2];

if (id) {
  getOneUserById(id);
} else {
  getAllUsers();
}
