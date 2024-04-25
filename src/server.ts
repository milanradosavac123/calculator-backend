import express from "express";
import expressionRoutes from "./routes/expressions";

const app = express();
const port = 5000;

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.use("/expression", expressionRoutes);

app.listen(port, () => {
    console.log("Server running on port: " + port);
});