const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb+srv://JS:Newsney10@cluster0.pugxr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  /* .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    const indianRecipe =
    {
      title: "Chettinad Chicken Recipe",
      level: "UltraPro Chef",
      ingredients: [
        "500 grams Chicken , (chicken with bones gives better taste)",
        "10 cloves Garlic",
        "2 inch Ginger",
        "1 teaspoon Turmeric powder",
        "1 Lemon(juice extracted)",
        "2 Onion,finely chopped",
        "5 cloves Garlic ,finely chopped",
        "1 inch Ginger , finely chopped",
        "1 Tomato , finely chopped",
        "2 sprig Curry leaves , roughly torn",
        "1 teaspoon Fennel Powder , roasted",
        "1 tablespoon Coriander Powder, roasted",
        "2-1/2 tablespoon Black pepper powder",
        "Salt to taste",
        "Oil as required",
        "Water as required",
        "Coriander Leaves , for garnish",
      ],
      cuisine: "Indian",
      dishType: "main_course",
      image: "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
      duration: 60,
      creator: "Chef Snehith",
    };
    return Recipe.create(indianRecipe)
  }) */
  /* .then(() => {
    // Run your code here, after you have insured that the connection was made
    const manyrecipes = data;
    return Recipe.insertMany(manyrecipes)
  })  */
  /* .then(()=>{
    return Recipe.findOneAndUpdate({title:"Rigatoni alla Genovese"},{duration:100})
  }) */

  /*  .then(()=>{
    return Recipe.deleteOne({title: "Carrot Cake"})
  })  */
  /* .then(()=>{
    return Recipe.deleteOne({_id:ObjectId("618d48ce7650f047a02d953e")})
  }) */
 /*  .then(()=>{
    return Recipe.deleteOne({_id:ObjectId({title:"Rigatoni alla Genovese"})
  }) */
  .then(()=>{
    console.log("it is done")
    mongoose.disconnect();
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
    });
    //disconnect
  
  