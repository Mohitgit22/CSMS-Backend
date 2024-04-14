import mongoose from "mongoose";

// Define the player schema
const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  team: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
    required: true
  }],
  description: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  socialMedia: {
    twitter: {
      type: String
    },
    instagram: {
      type: String
    }
    // Add more social media platforms as needed
  },
  achievements: [{
    sport:{
        tyoe:String
    },
    text: {
      type: String
    }
  }],
},{
    timestamps:true
});

const Player = mongoose.model('Player', playerSchema);

export default Player;
