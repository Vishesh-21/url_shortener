import app from "./app.js";
import { connectDB } from "./config/connect.db.js";
import { ENV } from "./config/env.js";

const PORT = ENV.PORT || 3000;

//function to start server
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

//start server
startServer();
