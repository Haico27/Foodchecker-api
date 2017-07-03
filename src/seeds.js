const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const feathers = require('feathers/client');


const foodItems = [
  {
    title: 'Grapes',
    picture: 'https://groentefruit.files.wordpress.com/2010/04/druiven4.jpg',
    tolerated: false,
    ingredients: 'Pure grapes'
  },
  {
    title: 'Oatmeal',
    picture: 'http://www.prevention.com/sites/prevention.com/files/styles/article_main_image_2200px/public/shutterstock_318957629-oatmeal-oksana-mizina-opener.jpg?itok=i0uMfcgE',
    tolerated: true,
    ingredients: 'Oatmeal'
  },
]

const feathersClient = feathers()

feathersClient
  .configure(hooks())
  .configure(rest('http://localhost:3030').superagent(superagent))

foodItems.map((fooditem) => {
  feathersClient.service('fooditems').create(fooditem)
    .then((result) => {
      console.log('Fooditem seeded', result.title)
    }).catch((error) => {
      console.error('Error seeding fooditem!', error.message)
    })
})
