require("dotenv").config();
import config from "config"
import express, {Request, Response} from "express";
import morgan from "morgan";

const app = express();
const port = config.get("PORT");

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.get('/api/healthChecker', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'success', 
        message: "Build CRUD API with Sequelize in Nodejs",
    })
  });
app.all("*", (req: Request, res: Response) => {
    res.status(404).json({
      status: "fail",
      message: `Route: ${req.originalUrl} does not exist on this server`,
    });
  });

app.listen(port, async () => {
    console.log(`Server started Successfully on Port ${port}`);
})