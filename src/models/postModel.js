import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
  post: {
    type: String,
    require: [true, "Empty post!"],
    unique: false
  },
  author: {
    type: String,
    require: false
  },
  author_id:{
    type: String,
    require: false
  },
  author_pfp:{
    type: String,
    require:false
  }
  
  
});

const Post = mongoose.models.post || mongoose.model("post", postSchema);

export default Post;
