const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipesSchema = new Schema({
  recipe:{},
      label:{
        type:String,
      },
      image:{},
      self:{
        type:String,
      },
}, {
    timestamps: { createdAt: 'created_at' }
});

const Recipes = mongoose.model('Recipes', recipesSchema);

module.exports = Recipes;