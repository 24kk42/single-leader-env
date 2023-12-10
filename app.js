const mongoose = require("mongoose");
const User = require("./src/models/User");

mongoose.connect(
  "mongodb+srv://fatihguzel:b2ak0w17QonCPg5k@atlascluster.xl0lowm.mongodb.net/?retryWrites=true&w=majority"
);

async function run() {
  const user = new User({
    name: "Fatih",
    age: 21,
    hobbies: ["Weight Lifting", "Coding"],
    address: {
      street: "Main St",
    },
  });

  await user.save();
}
// ODM - ORM