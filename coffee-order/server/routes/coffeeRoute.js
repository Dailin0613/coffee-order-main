import express from 'express';

import { getCoffees, postCoffees, getOnePost, updatedCoffee, deleteCoffee } from '../controllers/coffeeController.js';

const router = express.Router()

router.get('/', getCoffees)
router.post('/add-new-coffee', postCoffees)
router.get('/:id', getOnePost)
router.put('/:id/update-coffee', updatedCoffee)
router.delete('/:id/delete-coffee', deleteCoffee)

export default router