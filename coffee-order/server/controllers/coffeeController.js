import pool from "../connect.js"

export const getCoffees = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM coffee')
        res.json(rows)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server error'})
    }
}

export const postCoffees = async (req, res) => {
    const {coffee_name, image, price, discounted_price, description} = req.body
    try {
        const { rows } = await pool.query('INSERT INTO coffee (coffee_name, image, price, discounted_price, description) VALUES ($1, $2, $3, $4, $5) RETURNING *', [coffee_name, image, price, discounted_price, description])
        res.json(rows[0])
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server error'})
    }
}

export const getOnePost = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const { rows } = await pool.query('SELECT * FROM coffee WHERE id = $1', [id])  
        res.json(rows)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server error'})
    }
}

export const updatedCoffee = async (req, res) => {
    const id = parseInt(req.params.id)
    const {coffee_name, image, price, discounted_price, description} = req.body
    try {
        const { rows } = await pool.query('UPDATE coffee SET coffee_name = $1, image = $2, price = $3, discounted_price = $4, description = $5 WHERE id = $6', 
        [coffee_name, image, price, discounted_price, description, id])
        res.json(rows)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server error'})
    }
}

export const deleteCoffee = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const { rows } = await pool.query('DELETE FROM coffee WHERE id = $1', [id])  
        res.json(rows)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server error'})
    }
    
}