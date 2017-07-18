// fooditems-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');

  const { Schema } = mongooseClient;
  
  const fooditems = new mongooseClient.Schema({
    title: { type: String, required: true },
    picture: { type: String, required: true },
    ingredients: { type: String, required: true },
    tolerated: { type: Boolean, required: true, 'default' : false },
    authorId: { type: Schema.Types.ObjectId, ref: 'users' },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('fooditems', fooditems);
};
