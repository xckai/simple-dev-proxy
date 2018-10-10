const path=require('path')
const fs =require('fs')
var express=require("express")
var proxy = require('http-proxy-middleware');

module.exports=(args)=>{
    const app=express()
    var configPath=args.c || args.config_file||"./proxy-server-config.json"
    console.log(path.resolve(process.cwd(),configPath))
    let isExit=fs.existsSync(path.resolve(process.cwd(),configPath))
    if(!isExit){
        console.warn(`Config file is not exist!!!`)
    }
    let config=require(path.resolve(process.cwd(),configPath))
    try{
        let pipe=args.m||"default"
        config.rules[pipe].forEach(k=>{
            let rule
            if(typeof k == "string"){
               rule=config[k]
            }else{
                rule=k
            }
            let subUrl=rule.url
            let action
            if(rule["http-proxy-middleware"]){
                action=proxy(rule["http-proxy-middleware"])
            }
            if(subUrl&&action){
                app.use(subUrl,action)
            }  
        })
        let host=config.host||"0.0.0.0"
        let port =config.port||8080
        app.listen(port,host,(err=>{
            if(err) throw err
            console.log(`Server start at ${host}:${port} , using ${pipe} rules`)
        }))
    }catch (e){
        throw e
    }
}
