let mongoose = require('mongoose')

let url = 'mongodb://localhost/mystickala'

mongoose.connect(url, { useNewUrlParser: true ,  useUnifiedTopology: true  } )
.then(function(){
  console.log('Database connected')
})
.catch(function(e){
  console.log(e)
})

let userSchema = mongoose.Schema({
  email : String,
  password: String
})

module.exports = mongoose.model('user', userSchema)