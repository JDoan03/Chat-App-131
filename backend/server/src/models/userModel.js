const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: { type: "String", required: true },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    email: { type: "String", unique: function() {return this.isAdmin === true}, required: function() {return this.isAdmin === true}},
    password: { type: "String", required: function() {return this.isAdmin === true}},
  },
  { timestaps: true }
);


userSchema.methods.matchPassword = async function (enteredPassword) {

  if (this.isAdmin === true) {
  return await bcrypt.compare(enteredPassword, this.password);
  }
};


userSchema.pre("save", async function (next) {
  if (!this.isModified || this.isAdmin === false) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
