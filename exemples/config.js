var DockerCompose = require("../index.js");
var docker = DockerCompose({cwd: __dirname});

var config = docker.config();
console.log(config);
