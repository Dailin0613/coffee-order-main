import pool from "../connect.js"

export const getOrder = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM order_coffee')
        res.json(rows)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server error'})
    }
}

export const postOrder = async (req, res) => {
    const {quantity, place, coffee_id} = req.body
    try {
        const { rows } = await pool.query('INSERT INTO order_coffee (quantity, place, coffee_id) VALUES ($1, $2, $3) RETURNING *', [quantity, place, coffee_id])
        res.json(rows[0])
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server error'})
    }
}

export const getOneOrder = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const { rows } = await pool.query('SELECT * FROM order_coffee WHERE id = $1', [id])  
        res.json(rows)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server error'})
    }
}

export const updatedOrder = async (req, res) => {
    const id = parseInt(req.params.id)
    const {quantity, place, coffee_id} = req.body
    try {
        const { rows } = await pool.query('UPDATE order_coffee SET quantity = $1, place = $2, coffee_id = $3 WHERE id = $4', 
        [quantity, place, coffee_id, id])
        res.json(rows)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server error'})
    }
}

export const deleteOrder = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const { rows } = await pool.query('DELETE FROM order_coffee WHERE id = $1', [id])  
        res.json(rows)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server error'})
    }
    
}