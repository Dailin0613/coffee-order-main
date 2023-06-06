import express from 'express'
import { getOrder, postOrder, getOneOrder, updatedOrder, deleteOrder } from '../controllers/orderController.js'

const router = express.Router()

router.get('/', getOrder)
router.post('/add-order', postOrder)
router.get('/:id', getOneOrder)
router.put('/:id/update-order', updatedOrder)
router.delete('/:id/delete-order', deleteOrder)

export default router
