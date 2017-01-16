var DockerCompose = require("../index.js");
var docker = DockerCompose({cwd: __dirname});

docker.exec("test", "ls", function(data){
    console.log(data);
}, function(err){
    console.log(err);
});

