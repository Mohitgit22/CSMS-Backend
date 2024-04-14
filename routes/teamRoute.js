import express from 'express';
import {
  createTeam,
  getAllTeams,
  getTeamById,
  updateTeamById,
  deleteTeamById
} from '../controllers/teamsCtrl.js';

const TeamRoutes = express.Router();

TeamRoutes.post('/', createTeam);
TeamRoutes.get('/',  getAllTeams);
TeamRoutes.get('/:id', getTeamById);
TeamRoutes.patch('/:id', updateTeamById);
TeamRoutes.delete('/:id',deleteTeamById);

export default TeamRoutes;
