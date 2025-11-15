import express, {json} from "express"
import cors from "cors"
const app = express()

const PORT = 3000

app.use(json())
app.use(cors())

app.get("/", (req, res) => {
    res.status(201).send({app_status: 'app is working ok'})
})

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})