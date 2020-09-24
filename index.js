///////////////Menu Items (MVP)///////////////////

const latte = {name: "Cafe Latte", price: 4, category: "Drinks"};
const burger = {name: "Burger", price: 18, category: "Lunch"};
const breakfastBurrito = {name: "Breakfast Burrito", price: 16, category:"Breakfast"};

/* Task 1a: write a function to return more menu items with the same format as the items above. */

    function createMenuItem(itemKey, itemName,itemPrice,itemCategory) {

        let newMenuItem = {};

        newMenuItem.name = itemName;
        newMenuItem.price = itemPrice;
        newMenuItem.category = itemCategory;

        menu = Object.assign(menu, {newMenuItem});
        console.log(menu);  
    }

    createMenuItem("Smoothie", "Strawberry Smoothie", 6, "Drinks");



/* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */

function createMenuItem(itemKey,itemName,itemPrice,itemCategory) {

    let menu = {};
    menu.latte = latte;
    menu.burger = burger;
    menu.breakfastBurrito = breakfastBurrito;

    //console.log(itemKey);
    itemKey = {};

    for (i = 0; i < 3; i++) {

        itemKey.name = itemName;
        itemKey.price = itemPrice;
        itemKey.category = itemCategory;

        menu = Object.assign(menu, {itemKey});
    }

    let newMenu = menu;
    newMenu = Object.assign(newMenu, menu);
    console.log(newMenu);
}

createMenuItem("Fries", "French Fries", 10, "Dinner");

createMenuItem("Shake", "Chocolate Milk Shake", 5, "Drinks");

createMenuItem("Smoothie", "Mango Smoothie", 6, "Drinks");


    
/* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else.
Add a method to your burger object that automatically calculates price given a string as a parameter. 

Your method should accept: 

(1) A string (teacher, student, or public)

and should return a number. 

For example, burger.discount("teacher") would return 13.5 and burger.discount("public") would return 16.2*/

    const burger = {name: "Burger", price: 18, category: "Lunch",
    discount: function(person) {
        if (person === "Teacher") {
            percent = "25%";
            price = 18 - (18 * .25);
            console.log(`You qualify for our ${percent} ${person} discount! Your burger price is ${price}.`)
        }
        else if (person === "Student") {
            let percent = "10%";
            price = 18 - (18 * .10);
            console.log(`You qualify for our ${percent} ${person} discount! Your burger price is ${price}.`)
        }
    }
    };

    burger.discount("Student");



///////////////Reviews (MVP)///////////////////

const reviews = [{name: "Daniela", rating: 5, feedback:"Beautiful atmosphere and wonderful vegan options!"},
    {name: "Jack", rating: 3, feedback:"A little too hipster for my taste, but the burger was decent, if overpriced"},
    {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." },
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."},
    {name:"Reyna", rating: 3.5, feedback: ""},
]

/* Task 3: Console.log just Julius' feedback */

    console.log(reviews[5].feedback);



/* Task 4: Add a new rating with your (fictitious) opinions of the restaurant in the same format as the reviews above. */

    function addNewRating(name,rating,feedback) {

      newReview = {};

      newReview.name = name;
      newReview.rating = rating;
      newReview.feedback = feedback;

      newReviews = Object.assign(reviews, {newReview});

      console.log(newReviews);
    }

    addNewRating("Shenica", 5, "Best Dessert Ever!");



/* Task 5: Add the following feedback to Reyna's rating - "this place is chill with really cool people,
great for getting work done on weekdays" */

    function addNewFeedback(feedback) {

      reviews[7].feedback = feedback;

      console.log(reviews[7].feedback);
    }

    addNewFeedback("this place is chill with really cool people, great for getting work done on weekdays");



/*  Task 6: Write a function to return a review based on the index of the review in the array.

 Your function should take two arguments:

(1) an array which holds all of the reviews
(2) a number which is the desired index in the array.

and should return a string in the format `{name} gave the restaurant a {rating}, and their feedback was: {feedback}`
 * 
 * For example, if getReviewByIndex is invoked with reviews and the number 0
 * it will return `Daniela gave the restaurant a 5 star review and their feedback was: Beautiful atmosphere and wonderful vegan options!`
*/

    const reviews = [{name: "Daniela", rating: 5, feedback:"Beautiful atmosphere and wonderful vegan options!"},
        {name: "Jack", rating: 3, feedback:"A little too hipster for my taste, but the burger was decent, if overpriced"},
        {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
        {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
        {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
        {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." },
        {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."},
        {name:"Reyna", rating: 3.5, feedback: "this place is chill with really cool people, great for getting work done on weekdays"},
    ]

    function getReviewByIndex(array, index) {

      let name = array[index].name;
      let rating = array[index].rating;
      let feedback = array[index].feedback;
        
      console.log(`${name} gave the restaurant a ${rating} star review, and their feedback was: ${feedback}`);
    }

    getReviewByIndex(reviews,3);

/* Task 7: Write a function to get information about the most recent review called `getLastReview`

getLastReview should accept:
  (1) an array of objects 
  
and should return a string in the format `name} gave the restaurant a {rating}, and their feedback was: {feedback}`

For example, if getLastReview is invoked passing the reviews array it will return `Reyna gave the restaurant a 3.5 
star review and their feedback was: "this place is chill with really cool people, great for getting work done on weekdays"`.
*/

    const reviews = [{name: "Daniela", rating: 5, feedback:"Beautiful atmosphere and wonderful vegan options!"},
      {name: "Jack", rating: 3, feedback:"A little too hipster for my taste, but the burger was decent, if overpriced"},
      {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
      {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
      {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
      {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." },
      {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."},
      {name:"Reyna", rating: 3.5, feedback: "this place is chill with really cool people, great for getting work done on weekdays"},
    ]

    function getLastReview(array) {

      let last = reviews.length-1;

      let name = array[last].name;
      let rating = array[last].rating;
      let feedback = array[last].feedback;
      
      console.log(`${name} gave the restaurant a ${rating} star review, and their feedback was: ${feedback}`);
    }

    getLastReview(reviews);



///////////////🍔☕️🍽 STRETCH🍔☕️🍽////////////////////

/** STRETCH 1: Write a function called `getReviewByRating` that returns an array containing all reviews in a
 * certain range. Your function should accept: 

  (1) An array of objects
  (2) A rating

  and should return an array of objects. 

  For example, invoking getReviewByRating(reviews, 4) would return [{name: "Miranda", rating: 4, feedback:"fun 
  trivia and cool vibes"}, {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's
  for this place. Highly reccomend."}, {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke
  Fridays! Food and drink selection is okay."}]
*/

    function getReviewByRating(array, rate) {

      let newReviews = [];

      for(i = 0; i < array.length; i++) {
          if ((array[i].rating < rate + 1) && (array[i].rating >= rate)) {
              newReviews.push(array[i]);
          }
      }

      console.log(newReviews);
    }

    getReviewByRating(reviews, 4);


  
/** STRETCH 2: Write a function called 'getLongestReview' that returns an array containing all reviews longer than 15 words. 
  
Your function should accept: 

  (1) An array of objects

and should return an array of objects. 

  For example, invoking getLongReviews(reviews) would return [
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." }]
*/
    function getLongestReview(array) {

      const stringArray = [];
      let longReview = {};

      // Convert the array to a new string array.
      for(i = 0; i < array.length; i++) {
          if (array[i] !== " ") {
              stringArray.push(array[i]);

              // Count the number of strings in the stringArray.
              const count = stringArray.length;

              // If stringArray contains more than 15 strings, add feedback to longReview object.
              if (stringArray > 15) {
                  longReview.push(array[i]);
              }
          }
      }
      console.log(longReview);
    }

    getLongestReview(reviews);
  

/* STRETCH 3:  This challenge is not related to the data above! 

Write a function called carMarker 

Your function should accept:

(1) a single odometer argument (a number) 

and return an object.

The returned object should have the following characteristics:
     it has an `odometer` property that contains the argument passed in.
     it has a `drive` method that takes a distance as its argument, and
         (1) causes the odometer in the object to be increased by the distance,
         (2) returns the updated value of the `odometer`.
*/


function carMaker(/* code here */) {
    /* code here */
    
}
