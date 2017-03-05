import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});

export default mongoose.model('Book', BookSchema);