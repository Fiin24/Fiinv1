const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))

require('./Fiin.js')
nocache('./Fiin.js', module => console.log(`${module} Telah Di Perbarui!`))

const starts = async (Fiin = new WAConnection()) => {
    Fiin.logger.level = 'warn'
    Fiin.version = [2,2143,3]
    Fiin.browserDescription = ['Fiinbotz','Chrome', '3.0']
    console.log(banner)
console.log(color('[•] [ BASE BY FIIN ] [•]'))
console.log(color('Follow Me On Media Sosial'))
console.log(color(' ==============================================='))
console.log(color('│ ○ Youtube : https://youtube.com/c/Fiin                     '))
console.log(color('│ ○ Github : https://github.com/Fiin24                       '))
console.log(color(' ==============================================='))
    Fiin.on('qr', () => {
        console.log(color('[ SCAN ]','red'), color('Scan QR Code With WhatsApp Web On Your App'))
    })
    Fiin.on('credentials-updated', () => {
		fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Login Info Updated')
	})
      const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await Fiin.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    Fiin.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage)
  }

    fs.existsSync('./session.json') && Fiin.loadAuthInfo('./session.json')
    Fiin.on('connecting', () => {
        start('2', 'Menghubungkan Kembali...')
    })
    Fiin.on('open', () => {
        success('2', 'Bot Telah Tersambung... Please Subscribe Me On YouTube')
    })
    await Fiin.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(Fiin.base64EncodedAuthInfo(), null, '\t'))

    Fiin.on('chat-update', async (message) => {
        require('./Fiin.js')(Fiin, message)
    })
Fiin.on("group-participants-update", async (anu) => {
    try {
      groupMet = await Fiin.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await Fiin.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await Fiin.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && mem.includes(Fiin.user.jid)) {
        Fiin.sendMessage(anu.jid, "Halo, Saya Fiin-Botz. Bot Ini Masih Dalam Tahap Pengembangan. Bot Ini Dapat Digunakan Untuk Membuat Sticker Dan Melakukan Perintah Lainnya", "conversation");
      }
hehe = await getBuffer(pp_user)
if (anu.action == 'add' && !mem.includes(Fiin.user.jid)) {
             const mdata = await Fiin.groupMetadata(anu.jid)
             
             const widih = mdata.participants.length
             const thu = await Fiin.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const wut = await Fiin.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const wut2 = wut.message["ephemeralMessage"] ? wut.message.ephemeralMessage : wut
                let v = Fiin.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Jakarta').format("hh:mm")
                teks = `Hallo Kak @${num.split('@')[0]}, Selamat Datang di ${mdata.subject}\n\nInfo Member : ┌ Nomor : *${num.split('@')[0]}*\n├ Bio : *${thu.status}*\n└ Member : *${widih}*`
                tekss = `*${time_wel} - ${time_welc}`
                welcomeBut = [{buttonId:`Im Fiin`,buttonText:{displayText:'Welcome'},type:1}]
                welcomeButt = { contentText: `${teks} `, footerText: `${tekss}`, buttons: welcomeBut, headerType: 6, locationMessage: wut2.message.locationMessage}
                Fiin.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                 }
            if (anu.action == 'remove' && !mem.includes(Fiin.user.jid)) {
                const mdata = await Fiin.groupMetadata(anu.jid)
                const num = anu.participants[0]
                const wut3 = await Fiin.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			    const wut4 = wut3.message["ephemeralMessage"] ? wut3.message.ephemeralMessage : wut3
                let w = Fiin.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                widih = mdata.participants.length
                out = `*Sayonara* 👋 @${num.split('@')[0]}`
                goodbyeBut = [{buttonId:`Im Fiin`,buttonText:{displayText:'Selamat Tinggal'}, type:1}]
                tekss = `${time_wel} - ${time_welc}`
                goodbyeButt = { contentText: `${out}`, footerText: `${tekss}`, buttons: goodbyeBut, headerType: 6, locationMessage: wut3.message.locationMessage}
                Fiin.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                  }
        } catch (e) {
            console.log('Error :', e)
        }
    })
}


/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'Sedang Diawasi Oleh Fiin Karena Perubahan')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
