import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

  username: {
    type: String,
    require: [true, "Please provide a username!"],
    unique: true
  },
  email: {
    type: String,
    require: [true, "Please provie a email!"],
    unique: true
  },
  password: {
    type: String,
    require: [true, "Please provide a password"]
  },
  profilePic: {
    type: String,
    require: false
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpire: Date,
  verifyToken: String,
  verifyTkenExpiry: Date

});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
