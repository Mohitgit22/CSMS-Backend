import Player from '../model/Player.js';
import asyncHandler from 'express-async-handler';

// @desc    Create a new player
// @route   POST /api/players
// @access  Public
export const createPlayer = asyncHandler(async (req, res) => {
  const { name, year, team, description, phoneNumber, socialMedia, achievements } = req.body;
  const newPlayer = await Player.create({ name, year, team, description, phoneNumber, socialMedia, achievements });
  res.status(201).json(newPlayer);
});

// @desc    Get all players
// @route   GET /api/players
// @access  Public
export const getAllPlayers = asyncHandler(async (req, res) => {
  const players = await Player.find();
  res.json(players);
});

// @desc    Get a single player by ID
// @route   GET /api/players/:id
// @access  Public
export const getPlayerById = asyncHandler(async (req, res) => {
  const player = await Player.findById(req.params.id);
  if (!player) {
    res.status(404);
    throw new Error('Player not found');
  }
  res.json(player);
});

// @desc    Update a player by ID
// @route   PUT /api/players/:id
// @access  Public
export const updatePlayerById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    
    const updatedPlayer = await Player.findByIdAndUpdate(id,data,{ new: true }).lean().exec();
    
    if (!updatedPlayer) {
      res.status(404);
      throw new Error('Player not found');
    }
    
    res.json(updatedPlayer);
  });
  

// @desc    Delete a player by ID
// @route   DELETE /api/players/:id
// @access  Public
export const deletePlayerById = asyncHandler(async (req, res) => {
  const deletedPlayer = await Player.findByIdAndDelete(req.params.id);
  if (!deletedPlayer) {
    res.status(404);
    throw new Error('Player not found');
  }
  res.json({ message: 'Player deleted successfully' });
});
