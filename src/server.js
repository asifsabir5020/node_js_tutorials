const express = require("express")

const languages = [
    'JavaScript'
]

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
    languages.push(req.body.language)
    res.json({
        success: true,
        message: "data seved"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
