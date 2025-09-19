import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import usersHandler from "./api/users.js";
import paymentHandler from "./api/payment.js";
import vouchersHandler from "./api/vouchers.js";
import analyticsHandler from "./api/analytics.js";
import aiHandler from "./api/ai.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/users", usersHandler);
app.use("/api/payment", paymentHandler);
app.use("/api/vouchers", vouchersHandler);
app.use("/api/analytics", analyticsHandler);
app.use("/api/ai", aiHandler);

app.listen(PORT, () => console.log(Backend running on http://localhost:${PORT}));
