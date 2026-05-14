// custom module
const User = require("./user");

const command = process.argv[2];

switch (command) {
  case "read":
    const id = process.argv[3];
    if (id) {
      User.getOneUserById(id);
    } else {
      User.getAllUsers();
    }
    break;

  // case "create":
  //   break;

  // case "update":
  //   break;

  // case "delete":
  //   break;

  default:
    console.log("Available command:");
    console.log("- read");
    console.log("- create");
    console.log("- update");
    console.log("- delete");
}
