import mongoose from "mongoose";

const { Schema } = mongoose;
if (!mongoose.models.User) {
  const userSchema = new Schema(
    {
      name: {
        type: String,
        unique: true,
        required: true,
      },
      email: {
        type: String,
        unique: true,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );
  mongoose.model("User", userSchema);
}

const User = mongoose.model("User");
export default User;
