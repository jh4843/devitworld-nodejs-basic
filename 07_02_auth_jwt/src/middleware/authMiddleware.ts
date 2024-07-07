import { verifyToken } from "../utils/jwt";

export const authMiddleware = (req: any, res: any, next: any) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(403).send("A token is required for authentication");
  }

  // valid check whether authHeader has ' ' or not
  if (authHeader.split(" ").length !== 2) {
    return res.status(401).send("This token is invalid.");
  }

  const token = authHeader.split(" ")[1]; // 'Bearer ' 부분 제거

  console.log(token);

  const verified = verifyToken(token);
  if (typeof verified === "string") {
    return res.status(401).send(verified);
  }

  req.user = verified;
  next();
};
