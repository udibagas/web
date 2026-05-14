"use strict";

// built in module
const fs = require("fs");

class User {
  // bulk
  static async getAllUsers() {
    try {
      const data = await fs.promises.readFile("./data.json", "utf-8");
      const parsedData = JSON.parse(data);
      console.table(parsedData);
    } catch (error) {
      console.error(error.message);
    }
  }

  // single data (by id)
  static async getOneUserById(id) {
    try {
      const data = await fs.promises.readFile("./data.json", "utf-8");
      const parsedData = JSON.parse(data);
      const user = parsedData.find((u) => u.id == id);

      if (!user) {
        console.log(`User dengan id ${id} tidak ditemukan`);
      } else {
        console.log(user);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  static async createUser() {}

  static async updateUserById(id) {}

  static async deleteUserById(id) {}
}

module.exports = User;
