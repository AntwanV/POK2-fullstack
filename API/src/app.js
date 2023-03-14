

import express, { json } from 'express';
import cors from 'cors';
import cookieSession from 'cookie-session';
import { mongoose } from 'mongoose';
import db from './models/index.js';
import { userRoutes } from './routes/user.routes.js';
import { authRoutes } from './routes/auth.routes.js';


const app = express();


var corsOptions = {
  origin: "http://localhost:8081"
};

mongoose.set('strictQuery', false);


const Role = db.role;

db.mongoose.connect('mongodb+srv://antoine:antoine@pok2cluster.vn2uk2a.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() =>{
    console.log('Connexion à MongoDB réussie !');
    initial();
  })
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(json());
app.use(cors(corsOptions));
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
 });

 app.use(
  cookieSession({
    name: "antoine-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true
  })
);

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

userRoutes(app);
authRoutes(app);

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

export default app;