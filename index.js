const mongoose = require("mongoose")

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model")
// Import of the data from './data.json'
const data = require("./data")

const MONGODB_URI = "mongodb://localhost:27017/recipe-app"

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    console.log(`Connected to the database: "${self.connection.name}"`)
    // Before adding any recipes to the database, let's remove all existing ones
    return //Recipe.deleteMany()
  })
  .then(() => {
    // const newRecipe = {
    //   title: "Asian Glazed Chicken Thighs - JP Copy",
    //   level: "Amateur Chef",
    //   ingredients: [
    //     "1/2 cup rice vinegar",
    //     "5 tablespoons honey",
    //     "1/3 cup soy sauce (such as Silver Swan®)",
    //     "1/4 cup Asian (toasted) sesame oil",
    //     "3 tablespoons Asian chili garlic sauce",
    //     "3 tablespoons minced garlic",
    //     "salt to taste",
    //     "8 skinless, boneless chicken thighs",
    //   ],
    //   cuisine: "Asian",
    //   dishType: "main_course",
    //   image:
    //     "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
    //   duration: 40,
    //   creator: "Chef LePapu",
    // }
    // Recipe.create(newRecipe, (err, newRecipe) => {
    //   if (err) {
    //     console.log(err)
    //     return
    //   }
    //   console.log(newRecipe)
    // })
  })
  .catch((error) => {
    console.error("Error connecting to the database", error)
  })

// Recipe.insertMany(data, (err, allRecipes) => {
//   if (err) {
//     console.log(err)
//     return
//   }

//   for (const recipe of allRecipes) {
//     console.log(recipe.title)
//   }
// })

Recipe.findOneAndUpdate({ title: "Rigatoni alla Genovese" }, { duration: 100 })
  .then((recipe) => {
    console.log("Succesfully changed", recipe)
    mongoose.connection.close(() => process.exit(0))
  })
  .catch((e) => {
    console.log(e)
    mongoose.connection.close(() => process.exit(0))
  })

Recipe.deleteOne({ title: "Carrot Cake" })
  .then((recipe) => {
    console.log("Succesfully deleted", recipe)
    mongoose.connection.close(() => process.exit(0))
  })
  .catch((e) => {
    console.log(e)
    mongoose.connection.close(() => process.exit(0))
  })
