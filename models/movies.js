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

const insertManyDoc = async () => {
  try {
    // creating document
    const m1 = new MovieModel({
      name: "Extarction 2",
      ratings: 4,
      money: 60000,
      genre: ["action", "adveture"],
      isActive: true,
      comments: [{ value: "That was an amazing movie." }],
    });

    const m2 = new MovieModel({
      name: "Jhon Wick",
      ratings: 5,
      money: 23000,
      genre: ["action"],
      isActive: true,
      comments: [{ value: "Jhon doesn't seem that angery any more :(." }],
    });

    const m3 = new MovieModel({
      name: "Mission Impossible - Dead Reckoning Part One",
      ratings: 4,
      money: 60000,
      genre: ["action", "spy", "crime film", "thriller"],
      isActive: true,
      comments: [{ value: "ok that was TOM but where is Jerry." }],
    });

    const m4 = new MovieModel({
      name: "Transformers: Rise of the beasts",
      ratings: 4,
      money: 220000,
      genre: ["action", "adveture", "Science Fiction", "Fantasy"],
      isActive: true,
      comments: [{ value: "That was enough VFX for today." }],
    });

    const m5 = new MovieModel({
      name: "The Expendables 4",
      ratings: 3,
      money: 250000,
      genre: ["action", "adveture"],
      isActive: true,
      comments: [
        { value: "That was enough fighting and blowing stuff for today." },
      ],
    });
    const result = await MovieModel.insertMany([m1, m2, m3, m4, m5]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { insertManyDoc };
