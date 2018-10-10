# simple-dev-proxy
As a font-end developer, I was often a little bit of inconvenient when I using data form mock-data server and real-backend server.
So this simple dev proxy is to solve it!
Simple dev proxy is reverse proxy which using "HTTP-PROXY-MIDDLEWARE" to config it.
# How to use
1. install . 'npm install simple-dev-proxy'
2. initialize . 'simple-dev-proxy init'
3. config . edit the proxy-server-config.json
    > - Add your proxy-middeware object , edit the url and http-proxy-middleware options.
    > - define your own proxy rules in 'rules' object.
4. start . run 'simple-dev-proxy start -m [rule's name]'
# config file example
````
    {
        "ng":{
            "url":"/",
            "http-proxy-middleware":{
                "target": "http://localhost:4200",
                "changeOrigin": true ,
                "ws":true
            }
        },
        "jsonserver":{
            "url":"/api",
            "http-proxy-middleware":{
                "target": "http://localhost:8080",
                "changeOrigin": true 
            }
        },
        "realserver":{
            "url":"/api",
            "http-proxy-middleware":{
                "target": "http://example.com",
                "changeOrigin": true 
            }
        },
        "rules":{
            "default":["jsonserver","ng"],
            "online":["realserver","ng"],
            "dev":["jsonserver","ng"]
        }
    
    }
````