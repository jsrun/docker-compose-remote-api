var DockerCompose = require("../index.js");
var docker = DockerCompose({cwd: __dirname});

docker.create(function(data){//stdout
    console.log(data);
}, function(err){//stderr
    console.error(err);
});