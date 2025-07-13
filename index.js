const { initializeDb } = require("./db.connect")
const Recipe = require('./recipe.models')
const express = require("express")
const app = express()

app.use(express.json());

initializeDb();


const newRecipe = 
{
  "title": "Spaghetti Carbonara",
  "author": "Sanjeev Kapoor",
  "difficulty": "Intermediate",
  "prepTime": 20,
  "cookTime": 15,
  "ingredients": [
    "200g spaghetti",
    "100g guanciale or pancetta, diced",
    "2 large eggs",
    "50g grated Pecorino Romano cheese",
    "Salt and black pepper to taste"
  ],
  "instructions": [
    "Cook the spaghetti in boiling salted water until al dente.",
    "Meanwhile, sauté the guanciale or pancetta until crispy.",
    "In a bowl, whisk together eggs and grated cheese.",
    "Drain the spaghetti and immediately toss with the egg mixture and cooked guanciale/pancetta.",
    "Season with salt and pepper. Serve immediately."
  ],
  "imageUrl": "https://example.com/spaghetti_carbonara.jpg"
}

async function createNewRec(newRecipe){
    try{
    const newRec = new Recipe(newRecipe)
    const saveNewRec = await newRec.save()
    // console.log("New Recipe Saved: ", saveNewRec)
    return saveNewRec
    } catch(error){
       throw error
    }
}
// createNewRec(newRecipe)

// app.post("/recipe", async(req, res) => {
//    try{
//     const saveRec = await createNewRec(newRecipe)
//     console.log(saveRec)
//     if(saveRec){
//         res.status(200).json({message: "Recipe added successfully.", newRec:saveRec})
//     }
//    } catch(error){
//     res.status(500).json({error: "Failed to add recipe."})
//    }
// })

// 4. Run your API and create another recipe data in the database.
const newRecipe2 =
{
  "title": "Chicken Tikka Masala",
  "author": "Sanjeev Kapoor",
  "difficulty": "Intermediate",
  "prepTime": 30,
  "cookTime": 30,
  "ingredients": [
    "500g boneless, skinless chicken thighs, cut into bite-sized pieces",
    "1 cup plain yogurt",
    "2 tablespoons vegetable oil",
    "2 onions, finely chopped",
    "4 cloves garlic, minced",
    "1-inch piece of ginger, grated",
    "2 teaspoons ground coriander",
    "1 teaspoon ground cumin",
    "1 teaspoon paprika",
    "1/2 teaspoon turmeric",
    "1/2 teaspoon cayenne pepper (adjust to taste)",
    "1 cup tomato puree",
    "1 cup heavy cream",
    "Salt and cilantro leaves for garnish"
  ],
  "instructions": [
    "Marinate chicken pieces in yogurt and spices for at least 1 hour.",
    "Heat oil in a pan and sauté onions, garlic, and ginger until golden.",
    "Add marinated chicken and cook until browned.",
    "Stir in tomato puree and cook until chicken is cooked through.",
    "Add cream, season with salt, and simmer for a few minutes.",
    "Garnish with cilantro leaves and serve with rice or naan."
  ],
  "imageUrl": "https://example.com/chicken_tikka_masala.jpg"
}

async function add2ndNewRecipe(newRecipe2){
    try{
        const addNewSecRec = new Recipe(newRecipe2)
        const saveRec = await addNewSecRec.save()
        // console.log(saveRec)
        return saveRec
    } catch(error){
        throw error
    }
}
// add2ndNewRecipe(newRecipe2)

// app.post("/recipe", async (req, res) => {
//     try{
//         const addSecNewRes = await add2ndNewRecipe(newRecipe2)
//         console.log(addSecNewRes)
//         if(addSecNewRes){
//             res.status(200).json({message: "recipe added successfully.", addNewSecRec: addSecNewRes})
//         } else{
//             res.status(404).json({error: "Cannot find recipe."})
//         }
//     } catch(error){
//         res.status(500).json({error: "Failed to add recipe."})
//     }
// })

const newRecipe3 = 
{
  title: 'Classic Chocolate Chip Cookies',
  author: 'Baker Betty',
  difficulty: 'Easy',
  prepTime: 15,
  cookTime: 10,
  ingredients: [
    '1 cup (2 sticks) unsalted butter, softened',
    '3/4 cup granulated sugar',
    '3/4 cup packed light brown sugar',
    '1 teaspoon vanilla extract',
    '2 large eggs',
    '2 1/4 cups all-purpose flour',
    '1 teaspoon baking soda',
    '1/2 teaspoon salt',
    '2 cups semisweet chocolate chips'
  ],
  instructions: [
    'Preheat the oven to 375°F (190°C). Line baking sheets with parchment paper.',
    'In a large bowl, cream together the butter, granulated sugar, and brown sugar until smooth.',
    'Beat in the vanilla extract and eggs one at a time until well blended.',
    'Combine the flour, baking soda, and salt; gradually stir into the creamed mixture.',
    'Stir in the chocolate chips by hand using a wooden spoon.',
    'Drop by rounded spoonfuls onto the prepared baking sheets.',
    'Bake for 8 to 10 minutes in the preheated oven, or until edges are golden.',
    'Allow cookies to cool on baking sheet for 5 minutes before transferring to a wire rack to cool completely.'
  ],
  imageUrl: 'https://example.com/classic_chocolate_chip_cookies.jpg'
}

async function addnew3Recipe(newRecipe3){
    try{
        const add3rdRec = new Recipe(newRecipe3)
        const save3rdRec = await add3rdRec.save()
        // console.log(save3rdRec)
        return save3rdRec
    } catch(error){
        throw error
    }
}
// addnew3Recipe(newRecipe3)

// app.post("/recipe", async(req, res) => {
//     try{
//         const save3rdRecipe = await addnew3Recipe(newRecipe3)
//         console.log(save3rdRecipe)
//         if(save3rdRecipe){
//             res.status(200).json({message: "Recipe added successfully.", add3rdRec: save3rdRecipe})
//         } else{
//             res.status(404).json({error: "Cannot find recipe."})
//         }
//     } catch(error){
//         res.status(500).json({error: "Failed to add new recipe."})
//     }
// })


async function getAllRecipes(){
    try{
    const allRecipes = await Recipe.find()
    console.log(allRecipes)
    return allRecipes
    } catch(error){
        throw error
    }
} 
// getAllRecipes()

app.get("/recipes", async(req, res) => {
    try{
        const recipe = await getAllRecipes();
        console.log(recipe)
        if(recipe){
            res.json(recipe)
        } else{
            res.status(404).json({error: "recipe not found."})
        }
    }catch(error){
        res.status(500).json({error: "Cannot fetch recipes."})
    }
})

async function getRecipeDetails(title){
    try{
        const getRec =  await Recipe.findOne({title: title})
        // console.log(getRec)
        return getRec
    } catch(error){
        throw error
    }
}
// getRecipeDetails("Classic Chocolate Chip Cookies")

app.get("/recipes/:title", async(req, res) => {
    try{
        const recipeByTitle = await getRecipeDetails(req.params.title)
        console.log(recipeByTitle)
        if(recipeByTitle){
            res.json(recipeByTitle)
        } else{
            res.status(404).json({error: "Recipe is not found."})
        }

    } catch(error){
        res.status(500).json({error: "Cannot fetch recipe."})
    }
})

async function getRecByAuth(authorName){
    try{
        const recByAut = await Recipe.find({author: authorName})
        console.log(recByAut)
        return recByAut
    } catch(error){
        throw error
    }
}
// getRecByAuth("Baker Betty")

app.get("/recipes/author/:authorName", async(req, res) => {
    try{
    const recipeByAuthor = await getRecByAuth(req.params.authorName)
    console.log(recipeByAuthor)
    if(recipeByAuthor){
        res.json(recipeByAuthor)
    } else{
        res.status(404).json({error: "Recipe is not found."})
    }
    } catch(error){
         res.status(500).json({error: "Cannot fetch recipes."})
    }
})

async function getBydiffLevel(difficulty){
    try{
        const getRecByDiff = await Recipe.find({difficulty: difficulty})
        // console.log(getRecByDiff)
        return getRecByDiff
    } catch(error){
        throw error
    }
}
// getBydiffLevel("Easy")

app.get("/recipes/difficultyLevel/:difficulty", async(req, res) => {
    try{
        const recByDiff = await getBydiffLevel(req.params.difficulty)
        if(recByDiff){
            res.json(recByDiff)
        } else{
            res.status(404).json({error: "Recipe is not found."})
        }
    }catch(error){
        res.status(500).json({error: "Cannot fetch recipes."})
    }
})


async function updRecDiffLevel(recipeId, dataToUpdate){
    try{
        const updDiffRec = await Recipe.findByIdAndUpdate(recipeId, dataToUpdate, {new: true})
        // console.log(updDiffRec)
        return updDiffRec
    } catch(error){
        throw error
    }
}
// updRecDiffLevel("686f49581c123caad5fa72ec", {difficulty: "Intermediate"})

app.post("/recipes/difficultyLevel/:recipeId", async(req, res) => {
    try{
        const updRecipe = await updRecDiffLevel(req.params.recipeId, req.body)
        console.log(updRecipe)
        if(updRecipe){
            res.status(200).json({message: "Movie added successfully.", updDiffRec : updRecipe})
        } else{
            res.status(404).json({error: "Recipe is not found."})
        }
    } catch(error){
        res.status(500).json({error: "Cannot fetch recipes."})
    }
})


async function updRecByTitl(title, dataToUpdate){
    try{
        const updRecipe = await Recipe.findOneAndUpdate({title:title}, dataToUpdate, {new: true})
        // console.log(updRecipe)
        return updRecipe
    } catch(error){
        throw error
    }
}
// updRecByTitl("Spaghetti Carbonara", {prepTime: 40, cookTime: 45})
app.post("/recipes/updateValues/:title", async(req, res) => {
    try{
    const updRecipe = await updRecByTitl(req.params.title, req.body)
    if(updRecipe){
        res.status(200).json({message: "Recipe updated successfully", updRecipe: updRecipe})
    } else{
         res.status(404).json({error: "Recipe not found."})
    }
    } catch(error){
        res.status(500).json({error: "Cannot fetch recipes."})
    }
})

async function delRecById(recipeId){
    try{
        const delRecipe = await Recipe.findByIdAndDelete(recipeId)
        // console.log("This movie was deleted:", delRecipe)
        return delRecipe

    } catch(error){
         console.log("Error in movie deletion", error)
    }
}
// console.log(delRecById("686f4fbd073b256a6fb73669"))

app.delete("/recipes/:recipeId", async (req, res) => {
    try{
    const deleteRecipe = await delRecById(req.params.recipeId)
    if(deleteRecipe){
        res.status(200).json({message: "Recipe deleted successfully.", delRecipe: deleteRecipe})
    } else{
        res.status(404).json({error: "Recipe not found."})
    }
    } catch(error){
        res.status(500).json({error: "Failed to delete recipe."})
    }
    
})



const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server is running on the ${PORT}`)
})
