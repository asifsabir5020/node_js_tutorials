import express from 'express'
import { languages } from './data/index.mjs'

const app = express()

app.use(express.json())

const port = 3001


app.get('/languages', (req, res) => {
    res.json({
        success: true,
        data: languages
    })
})

app.post('/languages', (req, res) => {
    const id = languages.length + 1
    languages.push({id : id, name: req.body.language})
    res.json({
        success: true,
        message: "data seved"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
