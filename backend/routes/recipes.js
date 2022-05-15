const router = require('express').Router();
const { useCallback } = require('react');
let Recipes = require('../models/recipes.model');

router.route('/').get((req, res) => {
    Recipes.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    Recipes.findOne({ label : req.body.recipe.uri}, function (err, existingRecipe){
        if (err){
           console.log(err);
        }
        else if (existingRecipe === null){
            const label = req.body.recipe.uri;
            const recipe = req.body.recipe;
            const newRecipe = new Recipes({
               recipe,
                label,
            });
  
            newRecipe.save()
                .then(() => res.json('Recipe added!'))
                .catch(err => res.status(400).json('Error: ' + err));
        } else {
            console.log(req.body.recipe.label);
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