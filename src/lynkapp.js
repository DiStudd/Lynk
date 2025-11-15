import express, {json} from "express"
const app = express()

const PORT = 3000

app.use(json)

app.get("/", (req, res) => {
    res.send('lynk started').status(201)
})

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})