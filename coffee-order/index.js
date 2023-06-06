import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import coffeeRoute from './server/routes/coffeeRoute.js'
import orderRoute from './server/routes/orderRoute.js'
import handlersRoute from './server/routes/handlersRoute.js';

import "dotenv"

const app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors())
app.use('/coffee', coffeeRoute)
app.use('/coffee/order', orderRoute)
app.use('/coffe/coffe-order-total', handlersRoute)

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.json({info: 'Node.js is running here with node'})
})

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})

