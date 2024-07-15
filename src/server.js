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
    languages.push({ id: id, name: req.body.language })
    res.json({
        success: true,
        message: "data seved"
    })
})

app.put('/languages/:id', (req, res) => {
    const id = req.params.id
    const updatedLanguages = languages.map(el => {
        if (el.id == id) {
            return {
                ...el,
                name: req.body.language
            }
        }
        return el
    })
    languages.splice(0, languages.length)
    updatedLanguages.forEach(el => {
        languages.push(el)
    })
    res.json({
        success: true,
        message: "Record Saved"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
