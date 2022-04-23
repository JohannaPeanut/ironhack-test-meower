const { default: mongoose } = require('mongoose')
const mogoose = require('mongoose')

const publicationSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
        maxlength: 300,
        trim: true // Ensures that any spaces at the end/beginning are removed
    },
    picture: {
        type: String
    },  
    creator : {
        // tell mongoose 
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},
    // missing creator and pic
    { timestamps: true}
)

const Publication = mongoose.model( 'Publication', publicationSchema)

module.exports = Publication;