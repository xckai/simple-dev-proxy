const minimist = require('minimist')
const menus={
    main:`
        simple-mock-server [conmmand] <option>
        init .................create the config in current folder 
        start ................start simple-mock-server
             start -c "./proxy-server-config.json" --- specify the config file
             start -m 'dev' --- using "dev" proxy pipeline config
        version ..............show package version
        help .................show help menu 

    `
}
module.exports=()=>{
    const args = minimist(process.argv.slice(2))
    let cmd = args._[0] || 'help'
    switch(cmd){
        case 'init':
            require("./cmds/init")(args)
            break;
        case 'start':
            require("./cmds/start")(args)
            break;
        case 'help':
            console.log(menus["main"])
            break;
        default :
            console.log(` "${cmd}" is not a valid command ! \n`)
            console.log(menus["main"])
            break;
    }
}