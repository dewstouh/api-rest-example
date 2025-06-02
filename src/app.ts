import express from 'express';
import 'dotenv/config'
import factsRouter from './routes/facts.routes';

const app = express();

app.use(express.json())


app.use("/api/facts", factsRouter)

app.get("/", (_req, res) => {
    res.send("API Funcionando!")
})


export default app;