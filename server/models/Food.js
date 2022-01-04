const mangoose = require('mongoose');

const FoodSchema = new mangoose.Schema({
    foodName:{
        type: String,
        required: true,
    },
    daysSinceIAte: {
        type: Number,
        required: true,
    }
});

const Food = mangoose.model("Foods",FoodSchema);
module.exports = Food;