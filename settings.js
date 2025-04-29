/*

██▓▒­░ ►▬ WELCOME ▬◄ ░▒▓██

© Murshad678 KING 
WhatsApp Me : 923030043678

 - Source ↓
 - t.me/murtazashah 
 - wa.me/923030043678
 - https://whatsapp.com/channel/0029VaaQzsnLCoX7eCKhOE19

*/

require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "923030043678"
global.namaowner = "ᴍURSHAD678 ᴋɪɴɢ"
global.namaowner2 = "ʟᴏʀᴅ SHAH"

//======== Setting Bot & Link ========//
global.namabot = "GM-𝚋𝚘𝚝" 
global.namabot2 = "GM-𝚋𝚘𝚝"
global.version = "v2"
global.foother = "ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍURSHAD ᴋᴊɴɢ"
global.linkgc = 'https://youtube.com/@aryanaistory'
global.linksaluran = "https://youtube.com/@aryanaistory"
global.linkyt = 'https://youtube.com/@aryanaistory'
global.linktele = "https://t.me/murtazashah"
global.packname = "ᴄʀᴇᴀᴛᴇᴅ ʙʏ GM-ʙᴏᴛ"
global.author = "ᴍURSHAH678 ᴋɪɴɢ"

//========== Setting Event ==========//
global.welcome = true
global.autoread = false
global.anticall = false
global.autoreadsw = false
global.owneroff = false
global.antibug = true


//========= Setting Message =========//
global.msg = {
    "error": "🤖 *Oopsie!* Something went wrong. Maybe try again? Or blame the developer. Your call!",
    "done": "✅ *Mission Accomplished!* All systems go, GM finished the task!", 
    "wait": "⏳ *Hold your horses!* I’m working on it... (No, seriously, I’m not slacking off.", 
    "group": "*• Group Only* This feature is only for groups!", 
    "private": "*• Private Chat* This feature is only for private chats!", 
    "admin": "*• Admin Only* This feature is only for group admins!", 
    "adminbot": "*• Bot Admin* This feature can be used when the bot is an admin", 
    "owner": " 🚫 *Hold up!* This command is for the big boss only. You’re not the boss of me!", 
    "developer": "*• Developer Only* This feature is only for developers"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

//----------------------[ MURSHAD-KING ]----------------------//
// Mk is like a cat. It might ignore you, but it knows what you’re up to. 🐱
// It only responds when it feels like it. It’s the true master of mystery.
// Please proceed with caution. Our code doesn’t bite, but it might give you an awkward look.
// Malvin? If you’ve found this, you’ve unlocked a secret... but only if you truly understand it.
