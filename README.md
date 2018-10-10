# simple-dev-proxy
As a font-end developer, I was often a little bit of inconvenient when I using data form mock-data server and real-backend server.
So this simple dev proxy is to solve it!
Simple dev proxy is reverse proxy which using "HTTP-PROXY-MIDDLEWARE" to config it.
# How to use
1. install . 'npm install simple-dev-proxy'
2. initialize . 'simple-dev-proxy init'
3. config . edit the proxy-server-config.json
>  Add your proxy-middeware object , edit the url and http-proxy-middleware options.
>  define your own proxy rules in 'rules' object.
4. start . run 'simple-dev-proxy start -m [rule's name]'
