import express, { Request, Response } from "express";
import dotenv from "dotenv";
const app = express();
const port = 3000;
dotenv.config();

app.use(express.static("public"));
const apiUrl = process.env.API_URL;
const html = `
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    
    <script type="text/javascript">
    console.log("${apiUrl}");
       localStorage.setItem("apiUrl","${apiUrl}");
       window.location.href = "/";
    </script>
  </body>
</html>
`;

app.get("/api", (req, res) => {
  res.send(html);
});

app.get("/api/users", (req: Request, res: Response) => {
  res.send({ name: "mark", email: "markeu@gmail.com", age: 24 });
});

app.listen(3000, () => {
  console.log("server is running");
});
