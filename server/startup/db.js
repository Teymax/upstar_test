const mongoose = require("mongoose");

module.exports = function () {
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    mongoose.set("useUnifiedTopology", true);

    mongoose
        .connect(
            "mongodb+srv://Benik:Karapetyan006262@cluster0-vvxir.mongodb.net/Motkan?retryWrites=true&w=majority"
        )
        .then(() => console.log("Connected to MongoDB..."))
        .catch(err => console.error("Could not connect to MongoDB...", err));
};
