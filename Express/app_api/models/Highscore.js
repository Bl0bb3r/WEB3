const mongoose = require("mongoose");

const highscoreSchema = new mongoose.Schema({
    score: { type: Number, required: true},
    clicks: { type: Number, required: true},
    user: { type: String, required: true}
});

const Highscore = mongoose.model("Highscore", highscoreSchema);

module.exports = Highscore;