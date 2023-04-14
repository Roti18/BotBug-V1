const { getBuffer } = require("../basetzy/lib/myfunc")
const { color } = require("../basetzy/lib/color");
const chalk = require('chalk')
const fs = require('fs')
module.exports = async(sock, anu) => {
try {
const from = anu.id
const botNumber = sock.decodeJid(sock.user.id)
const groupMet = await sock.groupMetadata(from)
const groupName = groupMet.subject  

const sendMessage = async(id, text1, gam1) => {
sock.sendMessage(id, { 
contextInfo: { externalAdReply: { 
showAdAttribution: true, 
title: `𝙶𝚛𝚘𝚞𝚙 𝚂𝚎𝚝𝚝𝚒𝚗𝚐 𝙲𝚑𝚊𝚗𝚐𝚎`, 
body: '𝚁𝚎𝚣𝚢𝚢 𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛 𖠌', 
previewType: 'PHOTO', 
mediaType: 1,
renderLargerThumbnail: true,
thumbnail: gam1, 
sourceUrl: `http://youtube.com/@Frenzyy303`}}, 
text: text1 })
}


try {
var pp_grup = await sock.profilePictureUrl(from, 'image')
} catch (e) {
var pp_grup = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
}

if (anu[0].announce == true) {
sendMessage(from, `「 *𝙶𝚛𝚘𝚞𝚙 𝚂𝚎𝚝𝚝𝚒𝚗𝚐𝚜 𝙲𝚑𝚊𝚗𝚐𝚎* 」\n\n𝙶𝚛𝚘𝚞𝚙 𝚃𝚎𝚕𝚊𝚑 𝙳𝚒𝚝𝚞𝚝𝚞𝚙 𝙾𝚕𝚎𝚑 𝙰𝚍𝚖𝚒𝚗, 𝚂𝚎𝚔𝚊𝚛𝚊𝚗𝚐 𝙷𝚊𝚗𝚢𝚊 𝙰𝚍𝚖𝚒𝚗 𝚈𝚊𝚗𝚐 𝙳𝚊𝚙𝚊𝚝 𝙼𝚎𝚗𝚐𝚒𝚛𝚒𝚖 𝙿𝚎𝚜𝚊𝚗!`, await getBuffer(pp_grup))
console.log(color("[GRUP UPDATE]", "magenta"), color(`Group telah ditutup oleh admin`,`green`))
} else if(anu[0].announce == false) {
sendMessage(from, `「 *𝙶𝚛𝚘𝚞𝚙 𝚂𝚎𝚝𝚝𝚒𝚗𝚐𝚜 𝙲𝚑𝚊𝚗𝚐𝚎* 」\n\n𝙶𝚛𝚘𝚞𝚙 𝚃𝚎𝚕𝚊𝚑 𝙳𝚒𝚋𝚞𝚔𝚊 𝙾𝚕𝚎𝚑 𝙰𝚍𝚖𝚒𝚗, 𝚂𝚎𝚔𝚊𝚛𝚊𝚗𝚐 𝚂𝚎𝚖𝚞𝚊 𝙿𝚎𝚜𝚎𝚛𝚝𝚊 𝙳𝚊𝚙𝚊𝚝 𝙼𝚎𝚗𝚐𝚒𝚛𝚒𝚖 𝙿𝚎𝚜𝚊𝚗!`, await getBuffer(pp_grup))
console.log(color("[GRUP UPDATE]", "magenta"), color(`Group telah dibuka oleh admin`,`green`))
} else if (anu[0].restrict == true) {
sendMessage(from, `「 *𝙶𝚛𝚘𝚞𝚙 𝚂𝚎𝚝𝚝𝚒𝚗𝚐𝚜 𝙲𝚑𝚊𝚗𝚐𝚎* 」\n\n𝙸𝚗𝚏𝚘 𝙶𝚛𝚘𝚞𝚙 𝚃𝚎𝚕𝚊𝚑 𝙳𝚒𝚝𝚞𝚝𝚞𝚙, 𝚂𝚎𝚔𝚊𝚛𝚊𝚗𝚐 𝙿𝚎𝚜𝚎𝚛𝚝𝚊 𝚃𝚒𝚍𝚊𝚔 𝙳𝚊𝚙𝚊𝚝 𝙼𝚎𝚗𝚐𝚎𝚍𝚒𝚝 𝙸𝚗𝚏𝚘 𝙶𝚛𝚘𝚞𝚙!`, await getBuffer(pp_grup))
console.log(color("[GRUP UPDATE]", "magenta"), color(`Info group telah ditutup`,`green`))
} else if (anu[0].restrict == false) {
sendMessage(from, `「 *𝙶𝚛𝚘𝚞𝚙 𝚂𝚎𝚝𝚝𝚒𝚗𝚐𝚜 𝙲𝚑𝚊𝚗𝚐𝚎* 」\n\n𝙸𝚗𝚏𝚘 𝙶𝚛𝚘𝚞𝚙 𝚃𝚎𝚕𝚊𝚑 𝙳𝚒𝚋𝚞𝚔𝚊, 𝚂𝚎𝚔𝚊𝚛𝚊𝚗𝚐 𝙿𝚎𝚜𝚎𝚛𝚝𝚊 𝙳𝚊𝚙𝚊𝚝 𝙼𝚎𝚗𝚐𝚎𝚍𝚒𝚝 𝙸𝚗𝚏𝚘 𝙶𝚛𝚘𝚞𝚙!`, await getBuffer(pp_grup))
console.log(color("[GRUP UPDATE]", "magenta"), color(`Info group telah dibuka`,`green`))
} else {
sendMessage(from, `「 *𝙶𝚛𝚘𝚞𝚙 𝚂𝚎𝚝𝚝𝚒𝚗𝚐𝚜 𝙲𝚑𝚊𝚗𝚐𝚎* 」\n\n𝙶𝚛𝚘𝚞𝚕 𝚂𝚞𝚋𝚓𝚎𝚌𝚝 𝚃𝚎𝚕𝚊𝚑 𝙳𝚒𝚞𝚋𝚊𝚑 𝙼𝚎𝚗𝚓𝚊𝚍𝚒 *${groupName}*`, await getBuffer(pp_grup))
console.log(color("[GRUP UPDATE]", "magenta"), color(`Group Subject telah diganti`,`green`))
}

} catch (err) {
console.log(err)
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {return}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
console.log(color('GROUP : %s', 'white'), color(e, 'green'))
}   
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})