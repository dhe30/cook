const router = require('express').Router();
let Recipes = require('../models/recipes.model');

router.route('/').get((req, res) => {
    Recipes.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    Recipes.findOne({ recipe : req.body.recipe})
    .select("label")
    .exec(function(err, existingRecipe){
        if (existingRecipe === null){
            const recipe = req.body.recipe;
            const date = Date.parse(req.body.date);
            const newRecipe = new Recipes({
                recipe,
                date,
            });
  
            newRecipe.save()
                .then(() => res.json('Recipe added!'))
                .catch(err => res.status(400).json('Error: ' + err));
        } else {
            res.json('Exists!');
        }
    })
    
});

router.route('/:id').get((req, res) => {
    Recipes.findById(req.params.id)
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Recipes.findByIdAndDelete(req.params.id)
    .then(() => res.json('Recipe deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Recipes.findById(req.params.id)
    .then(recipe => {
        recipe.recipe = req.body.recipe;
        recipe.save()
        .then(() => res.json('Recipe updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;