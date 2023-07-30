import express from 'express';
import { registerChampion } from '../controllers/championControllers/index';
const router = express.Router();
router.route('/register').post(registerChampion);
export default router;