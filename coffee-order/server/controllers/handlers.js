import pool from "../connect.js";

export const getTotal = async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT order_coffee.id, order_coffee.quantity, coffee.price, (order_coffee.quantity * coffee.price) AS Total FROM order_coffee JOIN coffee ON coffee.id = order_coffee.coffee_id ORDER BY order_coffee.id")
        res.json(rows)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server error'})
    }
}