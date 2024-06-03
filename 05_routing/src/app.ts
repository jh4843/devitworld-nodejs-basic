import express, { Request, Response } from "express";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Home Page");
});

app.get("/about", (req: Request, res: Response) => {
  res.send("About Page");
});

app.get("/contact", (req: Request, res: Response) => {
  res.send("Contact Page");
});

// user routes
app.use("/users", userRoutes);

// product routes
app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// URL parameters
app.get("/users/:userId", (req: Request, res: Response) => {
  const userId = req.params.userId;

  if (!/^\d+$/.test(userId)) {
    // Only allow numbers
    res.status(400).send("Invalid User ID");
    return;
  }

  res.send(`User ID: ${userId}`);
});

// multiple url parameters
app.get("/products/:category/:productId", (req: Request, res: Response) => {
  const category = req.params.category;
  const productId = req.params.productId;
  res.send(`CATEGORY: ${category}, PRODUCT ID: ${productId}`);
});
