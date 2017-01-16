var DockerCompose = require("../index.js");
var docker = DockerCompose({cwd: __dirname});

docker.ps(function(listcontainers){
    console.log(listcontainers);
});