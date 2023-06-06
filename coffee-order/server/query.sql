SELECT order_coffee.id, order_coffee.quantity, coffee.price,
(order_coffee.quantity * coffee.price) AS Total
FROM order_coffee
JOIN coffee
ON coffee.id = order_coffee.coffee_id
ORDER BY order_coffee.id