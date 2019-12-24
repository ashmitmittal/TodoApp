const express = require("express");
const path = require("path");
const app = express();
var port = process.env.PORT || 4000;
var bodyParser = require("body-parser");

var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/todos", todoRoutes);

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
	// set static folder
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.get("/", function(req, res) {
	res.sendFile("index.html");
});

app.listen(port, function() {
	console.log("Running on PORT " + port);
});
