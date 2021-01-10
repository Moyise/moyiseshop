import bcrypt from "bcryptjs";

const users = [
  {
    name: "Moyise",
    email: "moyisemr@gmail.com",
    password: bcrypt.hashSync("Moyise1996", 10),
    isAdmin: true,
  },
  {
    name: "Ghost",
    email: "ghost@gmail.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "Phantom",
    email: "phantom@gmail.com",
    password: bcrypt.hashSync("12345", 10),
  },
];

export default users;
