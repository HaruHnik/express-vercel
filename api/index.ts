import express, { Request, Response } from "express";
import fs from "fs";
import bodyParser from "body-parser";
import formidable from "formidable";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
const app = express();
const port = 3000;

dotenv.config();
app.use(bodyParser.json());

app.use(express.static("public"));
const apiUrl = process.env.API_URL;
const html = `
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    
    <script type="text/javascript">
    console.log('${apiUrl}');
       localStorage.setItem("apiUrl","${apiUrl}");
       window.location.href = "/";
    </script>
  </body>
</html>
`;

app.get("/api", (req, res) => {
  res.send(html);
});

const mark = [{ name: "mark", email: "markeu@gmail.com", age: 24 }];

app.get("/api/users", (req: Request, res: Response) => {
  res.send({ name: "mark", email: "markeu@gmail.com", age: 24 });
});

app.post("/api/uploadFile", (req: Request, res: Response) => {
  console.log(uuidv4());
  const form = formidable({ multiples: true });
  form.parse(req, (err, fields, files) => {
    if (err) {
      res.writeHead(err.httpCode || 400, { "Content-Type": "text/plain" });
      return res.end(String(err));
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ fields, files }, null, 2));
  });

  /*
  const writeStream = fs.createWriteStream("./test.jpg");
  req.pipe(writeStream);
  res.end(); */
});

app.listen(port, () => {
  console.log("server is running");
});
