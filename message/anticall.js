module.exports = async(sock, json) => {
const botNumber = sock.decodeJid(sock.user.id)
const callerId = json.content[0].attrs['call-creator']
try{
var ownerNumber = db.data.settings[botNumber].nomerowner
} catch {
var ownerNumber = nomerOwner
}
try{
var anticall = db.data.settings[botNumber].anticall
} catch {
var anticall = false
}
if (anticall && json.content[0].tag == 'offer') {
if (callerId.split("@")[0] == ownerNumber) return
setTimeout(() => {
sock.sendMessage(`${ownerNumber}@s.whatsapp.net`, { text: `𝚃𝚎𝚛𝚍𝚎𝚝𝚎𝚔𝚜𝚒 @${callerId.split("@")[0]} 𝚃𝚎𝚕𝚊𝚑 𝙼𝚎𝚗𝚎𝚕𝚙𝚘𝚗 𝙱𝚘𝚝`, mentions: [callerId] })
}, 5000)
setTimeout(() => {
sock.updateBlockStatus(callerId, "block")
}, 2000)
setTimeout(() => {
sock.sendMessage(callerId, { text: "𝚂𝚒𝚜𝚝𝚎𝚖 𝙾𝚝𝚘𝚖𝚊𝚝𝚒𝚜 𝙱𝚕𝚘𝚌𝚔 ⚠︎\n𝙹𝚊𝚗𝚐𝚊𝚗 𝙼𝚎𝚗𝚎𝚕𝚙𝚘𝚗 𝙱𝚘𝚝 𝚂𝚎𝚌𝚊𝚛𝚊 𝚂𝚎𝚗𝚐𝚊𝚓𝚊 𝙰𝚝𝚊𝚞 𝚃𝚒𝚍𝚊𝚔 𝚂𝚎𝚗𝚐𝚊𝚓𝚊!!!\n𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝙷𝚞𝚋𝚞𝚗𝚐𝚒 𝙾𝚠𝚗𝚎𝚛 𝚄𝚗𝚝𝚞𝚔 𝙳𝚒𝚋𝚞𝚔𝚊!!" })
}, 1000)
}
}