const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

let data = [
    { id: 1, title: 'Create a project', completed: true,},
    { id: 2, title: 'Take a cofféé', completed: true,},
];

app.get('/', (req, res) => {
    res.status(200).json(data)
})

app.post('/', (req, res) => {
    const itemIds = data.map(item => item.id)

    const newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1

    const newItem = {
        id: newId,
        title: req.body.title,
        completed: false,
    }

    data = [...data, newItem]

    res.status(201).json(newItem)
})

app.put('/:id', (req, res) => {
    const found = data.find(item => {
        return item.id === parseInt(req.params.id)
    })

    if(found){
        let updatedItem = {
            id: found.id,
            title: req.body.title,
            completed: req.body.completed,
        }

        const itemIndex = data.indexOf(found)

        data.splice(itemIndex, 1, updatedItem)

        res.sendStatus(204)
    } else {
        res.sendStatus(404)
    }
})

app.delete('/:id', (req, res) => {
    const found = data.find(item => {
        return item.id === parseInt(req.params.id)
    })

    if(found){
        const itemIndex = data.indexOf(found)

        data.splice(itemIndex, 1)

        res.sendStatus(204)
    } else {
        res.sendStatus(404)
    }
})

app.listen(port, () => {
    console.log(`travis express app listening at http://localhost:${port}`)
})

module.exports = app