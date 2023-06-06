# coffee-order-main

Coffee order is an API that allows us create a coffee, order them and send to the place that has been ordered. For manke this aplication I use
node.js, express and postgresql

#endpoint http://localhost:5000/

#coffees
GET: "/coffee" 
POST: "/coffee/add-new-coffee"
GET: "coffee/:id"
PUT: "coffee/:id/update-coffee"
DELETE: "coffee/:id/delete-coffee"

#order
GET: "/coffee/order"
POST: "/coffee/order/add-order"
GET: "/coffee/order/:id"
PUT: "/coffee/order/:id/update-order"
DELETE: "/coffee/order/:id/delete-order"

#total of pay
GET: "/coffe/coffe-order-total"



