const app = require("express")()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.status(200).send("Hello from my docker app running on travis")
})

app.listen(port, () => {
    console.log(`travis express app listening at http://localhost:${port}`)
})

module.exports = app