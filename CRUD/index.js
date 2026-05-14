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

  case "create":
    // const name = process.argv[3];
    // const email = process.argv[4];
    // const status = process.argv[5];

    // destructuring for cleaner code
    const [name, email, status] = process.argv.slice(3);
    User.createUser(name, email, status);
    break;

  case "update":
    {
      const [id, key, value] = process.argv.slice(3);
      User.updateUserById(id, key, value);
    }
    break;

  case "delete":
    {
      const id = process.argv[3];
      User.deleteUserById(id);
    }
    break;

  default:
    console.log("Available command:");
    console.log("- read");
    console.log("- create");
    console.log("- update");
    console.log("- delete");
}
