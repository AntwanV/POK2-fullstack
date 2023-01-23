

import express, { json } from 'express';

const app = express();
import { mongoose } from 'mongoose';

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://antoine:antoine@pok2cluster.vn2uk2a.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(json());

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
 });

 const musicSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: true
  },
  dislikes: {
    type: Number,
    required: true
  },
  imageUrl : {
    type: String,
    required: true
  }
});

const Music = mongoose.model('Music', musicSchema);

app.get('/api/musics', (req, res, next) => {
  Music.find({}, function(err, items){
    if (err) throw err;
    res.status(200).json(items);
  })
 });

app.post('/api/newMusic', function(req, res){
  const music = new Music({
    "title": req.body.title, 
    "author": req.body.author, 
    "genre": req.body.genre,
    "description": req.body.description,
    "likes": 0,
    "dislikes": 0,
    "imageUrl": "https://material.angular.io/assets/img/examples/shiba2.jpg"
  });
  music.save( function(err) {
    if (err) throw err
  });
});

app.put('/api/newLike', function(req, res){
  console.log('reareaz');
  Music.findByIdAndUpdate(req.body._id, {likes: 45});
})

export default app;