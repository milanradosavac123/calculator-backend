import express from "express";
import expressionRoutes from "./routes/expressions";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.use("/expression", expressionRoutes);

app.listen(port, () => {
    console.log("Server running on port: " + port);
});