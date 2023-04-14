/*
› Create By Kizyy Pak - Tzy
› Base Ori Azril

🔥 KALAU MAU RENAME TARO CREDITS GUA : Kizyy Kanaeru */

const fs = require('fs')
const chalk = require('chalk')
//=================================================//
//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/@Frenzyy303'
global.ig = 'https://instagram.com/frenzyedzzt'
global.mygc = 'https://chat.whatsapp.com/IoZcA5JPOd6LHfBxLCTTqW'
global.myweb = 'https://chat.whatsapp.com/IoZcA5JPOd6LHfBxLCTTqW'
global.linkgrupss = "https://chat.whatsapp.com/IoZcA5JPOd6LHfBxLCTTqW"
global.linkpro = 'mailto:support@whatsapp.com?subject=Deactivate%20My%20Account%20Number&body=Please%20Deactivate%20The%20My%20Account%20Number%20%2B62XXXXXXXX%20Immediately%20Because%20The%20Number%20Has%20Been%20Lost'
global.linkun = 'mailto:support@whatsapp.com?subject=المساعدة%20في%20إلغاء%20حظر%20رقمي&body=Admins%20Whatsapp%20😰kenapa%20nomer%20saya%20(%20+62xx%20)%20di%20blokir%20padahal%20saya%20tidak%20melakukan apa%20apa%20nomer%20saya%20hanya%20di%20pinjam%20oleh%20saudara%20saya%20yang%20tinggal%20di%20amerika😢1hari%20kemuadian%20nomernya%20di%20blokir mohon%20atas%20ketidaknyamananya%20di%20perbaiki 😩salam%20hangat'
global.email = 'lynnexe303@gmail.com'
global.region = 'Indonesia'
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
//—————「 Set Nama Own & Bot 」—————//
global.nomerOwner = "6289527058808" //Bebas ganti 
global.namaOwner = "𝚁𝚎𝚣𝚢𝚢 𖠌" //Bebas ganti
global.footer = '𝚁𝚎𝚣𝚢𝚢 𝙳𝚎𝚟𝚎𝚕𝚘𝚙 © 𝙲𝚘𝚙𝚢𝚁𝚒𝚐𝚑𝚝 𝙰𝚕𝚕 𝚁𝚒𝚐𝚑𝚝 𝚁𝚎𝚜𝚎𝚛𝚟𝚎𝚍' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.packname = '𝚁𝚎𝚣𝚢𝚢 𝙰𝚝𝚝𝚊𝚌𝚔𝚎𝚛𝚜 ϟ'
global.ownerr = ['𝚁𝚎𝚣𝚢𝚢']
global.author = '𖠌 𝙰𝚋𝚘𝚞𝚝 𖠌\n\n• 𝙾𝚆𝙽: 089527058808\n• 𝙱𝙾𝚃: 083890890712\n• 𝚈𝚃: @𝙵𝚛𝚎𝚗𝚣𝚢𝚢303\n• 𝙸𝙶: @𝙵𝚛𝚎𝚗𝚣𝚢𝚎𝚍𝚣𝚣𝚝\n\n𝚁𝚎𝚣𝚢𝚢 𝙼𝚘𝚍𝚣 © 𝙲𝚘𝚙𝚢 𝚁𝚒𝚐𝚑𝚝'
global.prefa = ['','!','.',',','#','*']
global.sp = '⭔'
global.mess = {
    wait: '𝙻𝚘𝚊𝚍𝚒𝚗𝚐...',
    success: "𝚂𝚞𝚔𝚜𝚎𝚜...",
    group: "𝙲𝚊𝚗 𝙾𝚗𝚕𝚢 𝙱𝚎 𝚄𝚜𝚎𝚍 𝙱𝚢 𝙶𝚛𝚘𝚞𝚙 ⚠︎",
    owner: "𝙲𝚊𝚗 𝙾𝚗𝚕𝚢 𝙱𝚎 𝚄𝚜𝚎𝚍 𝙱𝚢 𝙾𝚠𝚗𝚎𝚛 ⚠︎",
    admin: "𝙲𝚊𝚗 𝙾𝚗𝚕𝚢 𝙱𝚎 𝚄𝚜𝚎𝚍 𝙱𝚢 𝙾𝚠𝚗𝚎𝚛 ⚠︎",
    badmin: "𝙲𝚊𝚗 𝙾𝚗𝚕𝚢 𝙱𝚎 𝚄𝚜𝚎𝚍 𝙸𝚏 𝚃𝚑𝚎 𝙱𝚘𝚝 𝙸𝚜 𝙰𝚗 𝙰𝚍𝚖𝚒𝚗 ⚠︎", 
    nsfw: '𝙵𝚒𝚝𝚞𝚛 𝙽𝙵𝚂𝚆 𝙱𝚎𝚕𝚞𝚖 𝙳𝚒 𝙰𝚔𝚝𝚒𝚏𝚔𝚊𝚗!! ⚠︎',
    private: '𝙵𝚒𝚝𝚞𝚛 𝙸𝚗𝚒 𝙷𝚊𝚗𝚢𝚊 𝙱𝚒𝚜𝚊 𝙳𝚒𝙶𝚞𝚗𝚊𝚔𝚊𝚗 𝙳𝚒𝙿𝚛𝚒𝚟𝚊𝚝𝚎 𝙲𝚑𝚊𝚝!! ⚠︎',
}
global.timeBug = 1 // 1 Menit
//=================================================//
global.thumb = { url: 'https://telegra.ph/file/d718d5a123a0943abfb30.jpg' }
global.visoka = { url: 'https://a.uguu.se/fVFNCwix.mp4' }
global.menuimg = { url: 'https://telegra.ph/file/d718d5a123a0943abfb30.jpg' }
global.zy = { url: 'https://telegra.ph/file/d718d5a123a0943abfb30.jpg' }
global.logonya = fs.readFileSync("./media/gambarnye/thezyren.jpg")
global.thumbnailvid = { url: 'https://telegra.ph/file/d718d5a123a0943abfb30.jpg4' }
global.bgv = { url: 'https://a.uguu.se/YHuhGMUw.mp4' }
global.removebgkey = "o9jGwRuAbYFGprJDwZhEAsU1" //Login di https://www.remove.bg
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
