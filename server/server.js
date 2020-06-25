const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const config = require('./config/config').get(process.env.NODE_ENV)
const app = express();
mongoose.Promise = global.Promise
mongoose.connect(config.DATABASE)

const { User } = require('./models/user')
const { Book } = require('./models/book')
const { auth } = require('./middleware/auth.js')

app.use(bodyParser.json())
app.use(cookieParser())

//GET REQUESTS//
app.get('/api/auth', auth,(req,res) => {
    res.json({
        isAuth: true,
        id: req.user._id,
    })
})



//before logging out the user we need to check if the user is logged in:
app.get('/api/logout', auth, (req, res) => {
    req.user.deleteToken(req.token, (err, user) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({
            message:"working"
        })
 })
})

app.get('/api/getBook', (req, res) => {
    let id = req.query.id;
    //from www......com?id=''
    Book.findById(id,(err, doc) => {
        if (err) return res.status(400).send(err)
        res.send(doc)
        
    })
})

app.get('/api/getBooks', (req, res) => {
    //localhost:3000/api/getBooks?skip=3&limit=2&order=asc
    let skip = parseInt(req.query.skip)
    let limit = parseInt(req.query.limit)
    let order = req.query.order

    //order = asc || desc
    Book.find().skip(skip).sort({ _id: order }).limit(limit).exec((err, doc) => {
        if (err) return res.status(400).send(err)
        res.send(doc);
    })
})

app.get('/api/getReviewer', (req, res) => {
    let id = req.query.id;
    User.findById(id, (err, doc) => {
        if (err) return res.status(400).send(err)
        res.json({
            name: doc.name,
            lastname:doc.lastname
        })
    })
})

app.get('/api/users', (req, res) => {
    User.find({}, (err, doc) => {
        res.status(200).send(doc);
    });
})

app.get('/api/user_posts', (req, res) => {
    Book.find({ ownerId: req.query.user }).exec((err, doc) => {
      if (err) return res.status(400).send(err);
      res.send(doc)
    });
})
 
//POST REQUESTS//
app.post('/api/book', (req,res) => {
    const book = new Book(req.body) 
    book.save((err, doc) => {
        if (err) return res.status(400).json({
            message:"something went wrong"
        })
        res.status(200).json({
            post: true,
            bookId:doc._id
        })
    })
    
})

app.post('/api/register', (req, res) => {
    const user = new User(req.body);
    user.save((err,doc) => {
        if (err) return res.status(400).send(err)
        res.send(doc)
    })
})

app.post('/api/login', (req, res) => {
    User.findOne({ 'email': req.body.email }, (err, user) => {
        if(!user) return res.json({isAuth:false,message:'auth failed ,email not found'})
         
        user.comparePassword(req.body.password, (err, isMatch) => {
          if (isMatch == false)
            return res.json({
              isAuth: false,
              message: 'wrong password'
            });
          user.genToken((err, user) => {
            if (err) return res.status(400).send(err);
            res.cookie('auth', user.token).json({
              isAuth: true,
              id: user._id,
              email: user.email
            });
          });
        });
    })
    
})


//UPDATE //

app.post('/api/updateBooks', (req, res) => {
    Book.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, doc) => {
        if(err) return res.status(400).send(err)
        return res.status(200).send(doc)
    })
})



//DELETE//
app.delete('/api/deleteBook', (req, res) => {
    Book.findOneAndDelete(req.query.id, (err, doc) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({
            message:"deletion successfull"
        })
   })
})


const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`sever started on port ${port}`)
});