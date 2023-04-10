require("dotenv").config();
import config from "config"
import express, {Request, Response} from "express";
import morgan from "morgan";
import cors from "cors";
import { connectDB, sequelize } from "./utils/db";
import noteRouter from "./routes/note.router";

const app = express();
const port = config.get("PORT");

app.use(express.json({ limit: "70mb" }));
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(
  cors({
    origin: config.get("origin"),
    credentials: true,
  })
);

app.get('/api/healthChecker', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'success', 
        message: "Build CRUD API with Sequelize in Nodejs",
    })
  });

app.use("/api/notes", noteRouter);
app.listen(port, async () => {
    console.log(`Server started Successfully on Port ${port}`);
    await connectDB();
    sequelize.sync({ force: false }).then(() => {
      console.log("✅Synced database successfully...");
    });
})