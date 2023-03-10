const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters'],
  },
  slug: String,
  description: {
    type: String,
    require: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot be more than 500 characters'],
  },
  website: {
    type: String,
    match: [/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'Please use a valid url'],
  },
  phone: {
    type: String,
    maxlength: [20, 'Phone number cannot be longer than 20 characters'],
  },
  email: {
    type: String,
    match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'please enter a valid email address'],
  },
  address: {
    type: String,
    required: [true, 'Bootcamp must have a physical address'],
  },
  location: {
    // geoJson point
    type: {
      type: String,
      enum: ['Point'],
      required: false,
    },
    coordinates: {
      type: [Number],
      required: false,
      index: '2dsphere',
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String
  },
  careers: {
    // array of strings
    type: [String],
    required: true, 
    enum: [
      'Web Development',
      'Mobile Development',
      'UI/UX',
      'Data Science',
      'Business',
      'Other',
      'Database Engineer'
    ]
  },
  averageRating: {
    type: Number,
    min: [1, 'rating must be at least 1'],
    max: [10, 'Rating must not be more than 10']
  },
  averageCost: Number,
  photo: {
    type: String, 
    default: 'no-photo.jpeg'
  },
  housing: {
    type: Boolean, 
    default: false
  },
  jobAssistance: {
    type: Boolean, 
    default: false
  },
  jobGuarantee: {
    type: Boolean, 
    default: false
  },
  acceptGi: {
    type: Boolean, 
    default: false
  },
  createdAt: {
    type: Date, 
    default: Date.now
  }
});


module.exports = mongoose.model('Bootcamp', BootcampSchema);