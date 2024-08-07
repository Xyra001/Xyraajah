//base by Xyra
//recode by Xyra 
//YouTube: @xyra0_0


const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: xyra0_0" //ur yt chanel name
global.socialm = "Github: @xyra001" //ur github or insta name
global.location = "Indonesia" //ur location

//new
global.botname = 'XyraBot' //ur bot name
global.ownernumber = '628388209170' //ur owner number
global.ownername = 'Xyra' //ur owner name
global.websitex = "https://chat.whatsapp.com/Gr4o8Tced1j8dJzE3TCPHv" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.wagc = "https://chat.whatsapp.com/Gr4o8Tced1j8dJzE3TCPHv" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.themeemoji = '🪀'
global.wm = "Xyra"
global.botscript = 'https://chat.whatsapp.com/Gr4o8Tced1j8dJzE3TCPHv' //'https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES' //script link
global.packname = "Xyra"
global.author = "Xyra - Package"
global.creator = "628388209170@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["628388209170"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v3' // reply type 'v1' => 'v3'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done ✓',
    error: 'Error !',
    success: 'Succes •'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/1723023273116.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})