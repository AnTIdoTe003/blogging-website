import mongoose from "mongoose";

const { Schema } = mongoose;
if (!mongoose.models.Post) {
    const PostSchema = new Schema(
        {
          title: {
            type: String,
            unique: true,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
          image: {
            type: String,
            required: true,
          },
          content: {
            type: String,
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
        },
        { timestamps: true }
      );
      mongoose.model("Post", PostSchema);
}


const Post = mongoose.model("Post");

export default Post;