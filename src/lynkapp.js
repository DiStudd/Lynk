import express, {json} from "express"
import cors from "cors"
import {getUserByName} from "./modules/users/user.repo.js";
const app = express();

const PORT = 3000;

app.use(json());
app.use(cors());

app.get("/test", async (req, res) => {

    res.status(201).send(req.query.q1 || null)
})

app.get(`/user/:name`, async (req, res) => {
    const user = await getUserByName(req.params.name)
    res.status(201).send(user)
})


app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})