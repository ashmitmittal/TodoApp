var mongoose = require("mongoose");
mongoose.set("debug", true);
// mongoose.connect('mongodb://localhost/todoApi', {useUnifiedTopology: true, useNewUrlParser: true});
mongoose.connect(
	"mongodb+srv://ashi:tomjarry@social-arex2.mongodb.net/todo-api?retryWrites=true&w=majority",
	{ useUnifiedTopology: true, useNewUrlParser: true }
);

mongoose.Promise = Promise; // so that we can use promise

module.exports.Todo = require("./todo");
