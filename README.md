# Docker Componse + Docker Remote API

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/andrehrf/zanox-api-nodejs/master/LICENSE)
[![npm version](https://badge.fury.io/js/zanox-api.svg)](https://badge.fury.io/js/zanox-api)

Connection interface between docker-compose and the Docker Remote API

## Usage

```js
var DockerCompose = require("docker-compose-remote-api");
var docker = DockerCompose({cwd: __dirname}).DockerRemoteAPI({
    host: '127.0.0.1',
    port: 2375
});

docker.getContainerId("test", function(err, id){
    if(err) console.log(err);
    else{
        var container = docker.dockerode.getContainer(id);
        container.inspect(function (err, data) {
            console.log(data);
        });
    }
});
```

## License

  MIT
  
  Copyright (C) 2016 André Ferreira

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.