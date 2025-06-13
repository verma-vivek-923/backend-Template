import mongoose from "mongoose";

const user_schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required:true
  },
  role: {
    type: String,
    enum: ["admin", "user"],
  },
  password: {
    type: String,
    required: true,
  },
});

export const user_modal = mongoose.model("User", user_schema);
