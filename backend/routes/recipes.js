const router = require('express').Router();
let Recipes = require('../models/recipes.model');

router.route('/').get((req, res) => {
    Recipes.aggregate([{ $sample:{size:2}}])
    .then(recipes => res.json({first: recipes[0].self, second: recipes[1].self}))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    Recipes.findOne({ label : req.body.recipe.uri}, function (err, existingRecipe){
        if (err){
           console.log(err);
        }
        else if (existingRecipe === null){
            const label = req.body.recipe.uri.substr(req.body.recipe.uri.lastIndexOf("_"));
            console.log(label);
            const recipe = req.body.recipe;
            const image = req.body.recipe.image;
            const self = req.body._links.self.href;
            const newRecipe = new Recipes({
               recipe,
                label,
                image,
                self,
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

router.route('/:uri').get((req, res) => {
    Recipes.findOne({ label : req.params.uri})
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
    });

module.exports = router;