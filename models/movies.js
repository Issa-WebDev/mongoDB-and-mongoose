import mongoose from "mongoose";

// Define Schema
const moviesSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

// Creating Model
const MovieModel = mongoose.model("movies", moviesSchema);

const updateData = async (id) => {
  try {
    const results = await MovieModel.updateOne({_id: id}, {name: "KissCoder 4", ratings: 2});
    console.log(results);
  } catch (error) {
    console.log(error);
  }
};

export { updateData };
