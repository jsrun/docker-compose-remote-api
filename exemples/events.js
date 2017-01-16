var DockerCompose = require("../index.js");
var docker = DockerCompose({cwd: __dirname});

docker.events(function(event){
    console.log(event);
}, function(err){
    console.log(err);
});

docker.up();

