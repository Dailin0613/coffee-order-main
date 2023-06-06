import express from 'express';

import { getTotal} from "../controllers/handlers.js";

const router = express.Router()

router.get('/', getTotal)

export default router