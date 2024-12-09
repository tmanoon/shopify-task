const express = require('express')
const cors = require('cors')
require('dotenv').config()
const Shopify = require('shopify-api-node')

const app = express()

const corsOptions = {
    origin: ['http://localhost:3000',
        'http://localhost:5173',
        'http://localhost:5174',
        'http://localhost:5174',
        'http://localhost:5175'
    ],
    credentials: true
}
app.use(cors(corsOptions))
app.use(express.json())

app.post('/api/product', async (req, res) => {
    const item = req.body
    if(!item) res.json('No item was sent to be added')
    try {
        const shopify = new Shopify({
            shopName: proccess.env.SHOPNAME,
            apiKey: proccess.env.API_KEY,
            password: process.env.API_SECRET
        })
        const product = { title: item.name, body_html:`<h1>${item.name}</h1>`, variants:[{ price: item.price + '' }] }
        const response = await shopify.product.create(product)
        res.json(response)
    } catch (error) {
        console.log('err:', error)
        res.send('err:', error)
    }
})

app.listen('3030', () => {
    console.log('The server is running on port 3030')
})