"use strict";

// built in module
const fs = require("fs");

class User {
  static async readData() {
    const data = await fs.promises.readFile("./data.json", "utf-8");
    return JSON.parse(data);
  }

  static async writeData(data) {
    const stringData = JSON.stringify(data, null, 2);
    await fs.promises.writeFile("./data.json", stringData);
  }

  static async findUserById(id) {
    const data = await this.readData();
    const user = data.find((u) => u.id == id);

    if (!user) {
      throw new Error(`User dengan id ${id} tidak ditemukan`);
    }

    return user;
  }

  // bulk
  static async getAllUsers() {
    try {
      const data = await this.readData();
      console.table(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  // single data (by id)
  static async getOneUserById(id) {
    try {
      const user = await this.findUserById(id);
      console.log(user);
    } catch (error) {
      console.error(error.message);
    }
  }

  static async createUser(name, email, status) {
    try {
      // 1. read data
      const data = await this.readData();
      // 2. create id based on last data
      // 2a. get last data
      // const lastData = parsedData[parsedData.length - 1];
      const lastData = data.at(-1);
      let id = 1;

      if (lastData) {
        // 2b. increment id
        id = lastData.id + 1;
      }
      // re-assign nilai status dengan tipe data boolean
      // status = status === "true";
      status = status === "true" ? true : false;

      // 3. create new object
      const newData = {
        id,
        name,
        email,
        status,
      };

      // 4. push new element
      data.push(newData); // berubah di memory, belum persistance
      console.log(`Data berhasil ditambahkan`);
      console.table(data);
      // 5. write file
      await this.writeData(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  static async updateUserById(id, key, value) {
    try {
      const validKeys = ["name", "email", "status"];

      if (!validKeys.includes(key)) {
        throw new Error("Invalid key");
      }

      const user = await this.findUserById(id);
      const data = await this.readData();

      if (key === "status") {
        value = value === "true";
      }

      const index = data.findIndex((u) => u.id == id);
      data[index][key] = value;
      await this.writeData(data);
      console.table(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  static async deleteUserById(id) {
    try {
      const data = await this.readData();
      const index = data.findIndex((u) => u.id == id);

      if (index == -1) {
        throw new Error(`Data not found`);
      }

      data.splice(index, 1);
      this.writeData(data);
      console.table(data);
    } catch (error) {
      console.error(error.message);
    }
  }
}

module.exports = User;
