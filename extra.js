// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const path = require("path");
// const items = require("./Routes/api/items");
// const csp = require("helmet-csp");

// const app = express();

// //bodyparser Middleware
// app.use(bodyParser.json());

// //DBconfig
// const db = require("./config/keys").mongoURI;
// //Connect to mongo
// mongoose
//   .connect(db)
//   .then(() => console.log("MongoDB connected."))
//   .catch(err => console.log(err));

// app.use("/api/items", items);

// //this sets static assets if in production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.use(
//     csp({
//       directives: {
//         imgSrc: ["'self'"],
//         defaultSrc: ["'self'"],
//         styleSrc: ["'self'"],
//         fontSrc: ["'self'"]
//       }
//     })
//   );

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server started on port ${port}`));
// --------------------------------------------------------

