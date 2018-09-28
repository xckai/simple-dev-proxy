const path=require('path')
const fs =require('fs')
module.exports=(args)=>{
    let isExit=fs.existsSync(path.resolve(process.cwd(),"./proxy-server-config.json"))
    if(isExit){
        console.warn("proxy-server-config.json is exist")
    }else{
        fs.copyFile(path.resolve(__dirname,'./proxy-server-config.json'),path.resolve(process.cwd(),"./proxy-server-config.json") , (err) => {
            if (err) throw err;
            console.log("proxy-server-config.json file is created.")
        });
    }

}