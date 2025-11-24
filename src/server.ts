import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

// base API route
app.use("/api/v1", router);

// server start
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
