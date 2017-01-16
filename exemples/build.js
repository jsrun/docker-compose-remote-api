var DockerCompose = require("../index.js");
var docker = DockerCompose({cwd: __dirname});

docker.build(function(data){//stdout
    console.log(data);
}, function(err){//stderr
    console.error(err);
});