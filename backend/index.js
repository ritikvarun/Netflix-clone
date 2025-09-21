// STEP 1
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
import path from "path";

databaseConnection();
dotenv.config({
  path: ".env",
});
const app = express();
const _dirname = path.resolve();

//MIDDELWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

//API
app.use("/api/v1/user", userRoute);
app.get("/",(req,res)=>{
  res.send({
    activeStatus:true,
    error:false  
  })
})
app.use(express.static(path.join(_dirname,"/frontend/dist")));
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
