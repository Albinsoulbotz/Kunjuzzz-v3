/* Copyright (C) 2021 MUHAMMED.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
ᴛᴀᴜʀᴜs ʙᴏᴛ - ᴍᴜʜᴀᴍᴍᴇᴅ
Wa.me/+919961050829
*/

const Neotro = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Neotro.addCommand({pattern: 'help', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: 'sᴇᴛᴠᴀʀ', description: "ғᴏʀ ʙᴏᴛ ᴏᴡɴᴇʀ ᴜɴᴅᴇʀsᴛᴀɴᴅɪɴɢ help.\n\n\n*❙❘❙❚❙❘❙❀*BASIC HELPS*❀❚❘❙❚❙❘*\n\n*⌨︎* *.alive *\n *➪* Bot testing will occur on operation.\n\n*⌨︎* *.menu*\n*➪* shows complete command list.\n\n*⌨︎* *.owner*\n*➪* BOT owners show details\n\n*⌨︎* *.setvar BOT_NAME: your text*\n*➪* obe boṭge name change is shown in the command and your Logo captions.\n\n*⌨︎* *.setvar WORK_TYPE: public*\n*➪* Bot public to.\n\n*⌨︎* *.setvar WORK_TYPE: private*\n*➪* Bot private to.\n\n*⌨︎* *.restart*\n*➪* Bot revived again when tight\n\n*⌨︎* *.shutdown*\n\n*➪* Bot was closed ⚙️ should be back on in Resources at Heroku on\n\n*⌨︎* *.setvar SUDO: 94XXXXXXXX*\n*➪* Bot to another ruler Based on public / private, he can control both occasions.\n\n*⌨︎* *.dyno*\n What is the amount of hours to your *➪* Heroku. 550 hours per month from the previous month, while it ended the moment your bot will wait a month off vē.īlaga is to create a new classifieds or heroin.\n\n*⌨︎* *.pinky on*\n\n*➪* AI EVA Chat BOT This can by implemented.\n*⌨︎* *.pinky off* \ n*➪* AI EVA Chat BOT is deactivated.\n\n*⌨︎* *.botname*\n*➪* To change bot name\n\n*⌨︎* *.owncmnd*\n*➪* Owner Menu is making in the.\n⚙️ ahead to enter the relevant details eleven hash. For details\n🧚 *setvar ALIVE_MESSAGE: The MSG is*\n*➪* Bot Alive Message appended to change if we want to.\n\n*⌨︎* *setvar ALIVE_LOGO: link*\n*➪* Bot appended alive picture change is Xolela Photo Link to your Site Upload button in the lower one\n🎲 https: imgbb.com\n*➪* telegram use the Bot easy to leave a link that can get Img\n🎲 https: t.me/FnTelegraphBot\n*⌨︎* *setvar WELCOME_GIF: link*\n*➪* This site down there you Upload a GIF rials to change one's GIF Welcome msg to put a link\n🎲 https: www.mailboxdrive.com\n*⌨︎* *setvar BYE_GIF: link*\n*➪* tied Good bye Logo change, as puluvanuḍa Simple put\n\n ", rowId:" rowid1"},
        {title: 'ɢɪᴛ', description: "ɢɪᴛʜᴜʙ ʟɪɴᴋ\n\n\n❙❘❙❚❙❘❙❀*GITHUB*❀❚❘❙❚❙❘\n\n\nhttps://github.com/muhammed-ubot/taurusbot\n\n\n*❙❘❙❚❙❘❙❀*YOUTUBE*❀❚❘❙❚❙❘*\n\nhttps://youtube.com/channel/UCeYZqtAtdYq8VwSIkW34JMA\n\n ", rowId:"rowid2"},
        {title: 'xᴍᴇᴅɪᴀ', description: "xᴍᴇᴅɪᴀ ᴄᴏᴍᴍᴀɴᴅs.​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n\n\n*☞︎︎︎*Usage: *.mp4enhance*\n *[ i ]* Desc:Enhance video’s quality.\n\n*☞︎︎︎*Usage: *.interp*\n *[ i ]* Desc:Increases the FPS of the video.\n\n*☞︎︎︎*Usage: *.mp4slowmo*\n *[ i ]* Desc:Applies true-slowmo to non-slow motion videos.\n\n*☞︎︎︎*Usage: *.x4mp4*\n *[ i ]* Desc:Reduce video’s quality by 75%.\n\n*☞︎︎︎*Usage: *.x2mp4*\n *[ i ]* Desc: Reduce video’s quality by 50%.\n\n*☞︎︎︎*Usage: *.gif*\n *[ i ]* Desc:Converts video to gif.\n\n*☞︎︎︎*Usage: *.agif*\n *[ i ]* Desc:Converts video to voiced gif.\n\n*☞︎︎︎*Usage: *.mp4blur*\n *[ i ]* Desc: Blurs the background of the video.\n\n*☞︎︎︎*Usage: *.mp4stab*\n *[ i ]* Desc: Decreases the vibration of the video.\n\n*☞︎︎︎*Usage: *.mp4rainbow*\n *[ i ]* Desc: Applies a rainbow effect to video.\n\n*☞︎︎︎*Usage: *.mp4color*\n *[ i ]* Desc:Makes the colors of the video more vivid and beautiful.\n\n*☞︎︎︎*Usage: *.mp4art*\n *[ i ]* Desc:Applies a art effect to the video.\n\n*☞︎︎︎*Usage: *.mp4negative*\n *[ i ]* Desc:Applies a negative color filter to the video.\n\n*☞︎︎︎*Usage: *.mp4vintage*\n *[ i ]* Desc:Applies a nostalgic effect to video.\n\n*☞︎︎︎*Usage: *.mp4bw*\n *[ i ]* Desc: Applies a monochrome effect to video.\n\n*☞︎︎︎*Usage: *.mp4reverse*\n *[ i ]* Desc: Plays the video in reverse.\n\n*☞︎︎︎*Usage: *.mp4edge*\n *[ i ]* Desc:Applies a edge effect to the video.\n\n*☞︎︎︎*Usage: *.mp4image*\n *[ i ]* Desc: Converts photo to 5 sec video.\n\n*☞︎︎︎*Usage: *.spectrum*\n *[ i ]* Desc: Converts the spectrum of sound into video.\n\n*☞︎︎︎*Usage: *.waves*\n *[ i ]* Desc: Converts the wave range of sound to video.\n\n*☞︎︎︎*Usage: *.frequency*\n *[ i ]* Desc: Converts the frequency range of sound to video.\n\n*☞︎︎︎*Usage: *.avec*\n *[ i ]* Desc: Converts the histogram of sound to video.\n\n*☞︎︎︎*Usage: *.volumeaudio*\n *[ i ]* Desc: Converts the decibel value of the sound into video.\n\n*☞︎︎︎*Usage: *.cqtaudio*\n *[ i ]* Desc: Converts the CQT value of audio to video.\n\n*☞︎︎︎*Usage: *.mp3eq*\n *[ i ]* Desc: Adjusts the sound to a crystal clear level.\n\n*☞︎︎︎*Usage: *.mp3crusher*\n *[ i ]* Desc:Distorts the sound, makes ridiculous.\n\n*☞︎︎︎*Usage: *.mp3reverse*\n *[ i ]* Desc:Plays the sound in reverse.\n\n*☞︎︎︎*Usage: *.mp3pitch*\n *[ i ]* Desc:Makes the sound thinner and faster.\n\n*☞︎︎︎*Usage *.mp3low*\n *[ i ]* Desc:Makes the sound deep and slower.\n\n*☞︎︎︎*Usage: *.x2mp3*\n *[ i ]* Desc:  Makes the sound twice as fast.\n\n*☞︎︎︎*Usage: *.mp3volume*\n *[ i ]* Desc: 🇹🇷 Ses seviyesini fazalca arttırır.\n🇬🇧 Increase sound level so much.\n\n*☞︎︎︎*Usage: *.bwimage*\n *[ i ]* Desc: 🇹🇷 Fotoğrafa monochrome efekti uygular.\n🇬🇧 Applies a monochrome effect to image.\n\n*☞︎︎︎*Usage: *.vintageimage*\n *[ i ]* Desc: 🇹🇷 Fotoğrafa vintage efekti uygular.\n🇬🇧 Applies a vinatge effect to video.\n\n*☞︎︎︎*Usage: *.edgeimage*\n *[ i ]* Desc: 🇹🇷 Fotoğrafa edge efekti uygular.\n🇬🇧 Applies a edge effect to the photo.\n\n*☞︎︎︎*Usage: *.enhanceimage*\n *[ i ]* Desc: 🇹🇷 Fotoğrafı daha net hale getirir.\n🇬🇧 Makes the photo clearer.\n\n*☞︎︎︎*Usage: *.blurimage*\n *[ i ]* Desc: 🇹🇷 Fotoğrafın arka planını bulanıklaştırır.\n🇬🇧 Blurs the background of the photo.\n\n*☞︎︎︎*Usage: *.grenimage*\n *[ i ]* Desc: 🇹🇷 Fotoğrafa gren efekti uygular.\n🇬🇧 Applies grain effect to the photo.\n\n*☞︎︎︎*Usage: *.negativeimage*\n *[ i ]* Desc: 🇹🇷 Fotoğrafa negatif renk filtresi uygular.\n🇬🇧 Applies a negative color filter to the photo.\n\n*☞︎︎︎*Usage: *.rainbowimage*\n *[ i ]* Desc: 🇹🇷 Fotoğrafa gökkuşağı efekti uygular.\n🇬🇧 Applies rainbow effect to the photo.\n\n*☞︎︎︎*Usage: *.colorimage*\n *[ i ]* Desc: 🇹🇷 Fotoğrafın renklerini daha canlı ve çekici yapar.\n🇬🇧 It makes the colors of the photo more vivid and attractive.\n\n*☞︎︎︎*Usage: *.artimage*\n *[ i ]* Desc: 🇹🇷 Fotoğrafa çizim efekti uygular.\n🇬🇧 Applies a art effect to the photo\n\n ", rowId:" rowid4"},
        {title: 'ᴏᴡɴᴇʀ', description: "ᴏᴡɴᴇʀ ɪɴғᴏ.\n\n\nɴᴀᴍᴇ:ᴍᴜʜᴀᴍᴍᴇᴅ\n\nᴄᴏɴᴛᴀᴄᴛ:http://wa.me/+919961050829\n\nᴘʟᴇᴀsᴇ ᴅᴏɴ'ᴛ ᴅɪsᴛᴜʀʙ ʜɪᴍ\n\n ", rowId:" rowid5"},
        {title: 'Free fire', description: "Free fire logo.\n\n\n*_50 FF LOGO PACK_*\n\n**𖣘*.ff01 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff02 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff03 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff04 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff5 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff6 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff07 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff08 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff09 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff10 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff12 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff13 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff14 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff15 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff16 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff17 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff18 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff19 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff20 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff21 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff22 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff23 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff24 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff25 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff26 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff27 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff28 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff29 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff30 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff31 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff32 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff33 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff34 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff35 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff36 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff37 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff38 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff39 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff40 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff41 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff42 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff43 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff44 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff45 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff46 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff47 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff48 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff49 : Makes FF logo*\n*send free fire logo*\n**𖣘*.ff50 : Makes FF logo*\n*send free fire logo* ", rowId:" rowid6"},
        {title: 'ʜᴇʟᴘ', description: "list of all commands.\n\n\n*⌨︎*.menu\n\n*᪥* *Button message you can select option*\n\n*⌨︎* .xmedia \n*᪥*  *It is a plugin with more than 25 media tools.*\n\n*⌨︎* .ownercmnd \n*᪥*  *set of commands for bot user or sudo*\n\n*⌨︎* .codtts \n*᪥* *language code to change the voice in .tts & also for .trt translation*\n\n*⌨︎* .adan \n*᪥*  *Finds prayer time.*\n*⌨️ Eg:- : .prayer <city>*\n\n*⌨︎* .rename \n*᪥* *[objectObject]*\n\n *⌨︎* .print \n*᪥*  *Prints the inside of the file on the server.*\n\n*⌨︎* .bashmedia \n*᪥*  *Sends audio, video and photos inside theserver.*\n*⌨️Eg:- : video.mp4 && media/gif/pic.mp4*.\n\n*⌨︎* .addserver \n*᪥*  ```Uploads image, audio or video to the server.``` \n\n*⌨︎* .term1 \n*᪥* ```Allows to run the command on the server's shell.```\n\n *⌨︎* .findvid \n*᪥*  ```Shows the technical information of the replied video.```\n\n*⌨︎* .pm \n*᪥*  ```Sends a private message to the replied person.```\n\n*⌨︎* .pmsend \n*᪥* ```Sends a private voice message to the respondent.```\n\n*⌨︎* .anime \n*᪥*```randomanimeimage```\n\*⌨︎* .apkmod\n\n*⌨︎* .fatp\n\n*⌨︎* .ttp \n*᪥* ```Converts text to plain painting.``` \n\n*⌨︎* .attp\n*᪥* ```Adds rainbow effect to the text as a sticker.``` \n\n*⌨︎* .bgm\n *᪥*  ```turn on and turn off bgm.\n* -bot owner command``` \n*⌨️ Eg:- : ```.bgm on / off```*\n\n*⌨︎* .carbon\n*᪥* ```It sends carbon picture```\n\n *⌨︎* .bgm *᪥* ```change reply message BGM mode```\n* *⌨️ Eg:- :* ```.bgm one / two```*\n\n*⌨︎* .mp3\n*᪥* ```Converts video to sound.```\n\n *⌨︎* .photo\n*᪥* ```Converts the sticker to a photo.```\n\n *⌨︎* .mp4\n*᪥*  ```Converts animated stickers to video.```\n\n *⌨︎* .dict \n*᪥* ```Use it as a dictionary.\n*Eg: .dict en_US;lead For supporting languages send *.lngcode*``` \n\n*⌨︎* .git\n*᪥*  ```It sends high resolution wallpapers.```\n\n welcomen*⌨︎* .welcome\n*᪥* ```It sets the welcome message. If you leave it blank it shows the welcome message.```\n\n*⌨︎* .goodbye\n*᪥* ```Sets the goodbye message. If you leave blank, it show's the goodbye message.```\n\n *⌨︎* .antilink \n*᪥*  ```Activates the Antilink tool.``` \n*⌨️ Eg:- : ```.antilink on / off```*\n\n*⌨︎* .moretxt\n*᪥* ```more txtit commands``` \n\n*⌨︎* .ffire \n*᪥*  ```add your text to random freefire logo```\n\n *⌨︎* .emo \n*᪥* ```emoji to png```\n\n *⌨︎* .insta \n*᪥*  ```Downloads Image/Video From Instagram```\n\n*⌨︎* .news\n\n *⌨︎* .notes\n*᪥* ```Shows all your existing notes.```\n\n *⌨︎* .save \n*᪥*  ```Reply a message and type .save or just use .save <Your note> without replying```\n\n *⌨︎* .deleteNotes\n*᪥*  ```Deletes *all* your saved notes.```\n\n *⌨︎* .owner\n*᪥*  ```shows the detail of bot owner``` \n\n*⌨︎* .jid \n*᪥* ```Giving user's JID.``` \n\n*⌨︎* .random \n*᪥* ```word image```\n\n *⌨︎* .brdmore \n*᪥*  ```add readmore before your text```\n\n *⌨︎* .rdmore \n*᪥*  ```add readmore before your text```\n\n *⌨︎* .removebg \n*᪥*```Removes the background of the photos.```\n\n *⌨︎* .warn \n*᪥* ```Sends reports to group admins.``` \n\n*⌨︎* .scan \n*᪥*  ```Checks whether the entered number is registered on WhatApp.``` \n\n*⌨︎* .trt \n*᪥* ```It translates with Google Translate. You must reply any message.``` \n*⌨️ Eg:- :* ```.trt tr it (From Turkish to Italian)```*\n\n*⌨︎* .detectlang\n*᪥* ```Guess the language of the replied message.```\n\n *⌨︎* .currency\n\n*⌨︎* .tts \n*᪥* ```It converts text to sound.```\n\n *⌨︎* .song \n*᪥*  ```Uploads the song you wrote.```\n\n *⌨︎* .video \n*᪥*  ```Downloads video from YouTube.```\n\n*⌨︎* .sing \n*᪥*  ```It sings song that you have written``` \n\n*⌨︎* .song \n*᪥* ```Uploads the song you wrote for ios users.```\n\n *⌨︎* .wiki \n*᪥* ```Searches query on Wikipedia.```\n\n*⌨︎* .img \n *᪥* ```Searches for related pics on Google.``` \n\n*⌨︎* .github \n *᪥*  ```Collects github information from the given username.\n*⌨️ Example: .github phaticusthiccy```*\n\n *⌨︎* .lyric \n*᪥*  ```Finds the lyrics of the song.```\n\n*⌨︎* .covid \n*᪥* ```Shows the daily and overall covid table of more than 15 countries.```\n\n *⌨︎* .sweather \n*᪥*  ```Gives you the weekly interpretations of space weather observations provided by the Space Weather Research Center (SWRC) for a p.```\n\n *⌨︎* .compliment \n*᪥*  ```It sends complimentry sentenses``` \n\n*⌨︎* .hmod  \n*᪥* ```Finds mod apps from happymod```\n\n *⌨︎* .insult \n*᪥*  ```It sends insulted words``` \n\n .joke \n*᪥*  ```It sends random jokes``` \n\n*⌨︎* .vava \n*᪥*  ```Chat with Pinky.\n*Use .molu<message>```*\n\n *⌨︎* .owner\n*᪥*  ```shows the detail of bot owner```\n\n *⌨︎* .quote \n*᪥* ```It shares famous quotes```\n\n *⌨︎* .ss \n*᪥* ```Takes a screenshot from the page in the given link.```\n\n *⌨︎* .setvar\n*᪥* ```It sends high resolution wallpapers.```\n\n *⌨︎* .show \n*᪥*  ```Get info related to tv series and shows```\n\n *⌨︎* .ig \n*᪥* ```Fetches user informations from instagram```\n\n *⌨︎* .animesay \n*᪥*  ```It writes the text inside the banner the anime girl is holding```\n\n*⌨︎* .changesay \n*᪥*```Turns the text into the change my mind poster.```\n\n*⌨︎* .trumpsay \n```Converts the text to Trump's tweet.```\n\n *⌨︎* .bgm \n*᪥* ```turn on and turn off bgm. -bot owner command``` \n* *⌨️ Eg:- :* ```.bgm on / off```*\n\n*⌨︎* .autosticker \n*᪥*  ```turn on and turn off bgm. -bot owner command``` \n**⌨️ Eg:- :* ```.sticker on / off```*\n\n*⌨︎* .sudo \n*᪥*  ```changes sudo numbers``` \n* *⌨️ Eg:- :* ```.sudo *your number*```*\n\n*⌨︎* .caption \n*᪥* ```changes all captions``` \n* *⌨️ Eg:- :* ```.caption *Made by JulieMwol*```*\n\n*⌨︎* .handlers \n```changes handlers``` \n**⌨️ Eg:- :* ```.handler ^[.!] ```*\n\n*⌨︎* .botname \n*᪥*  ```change your bot name``` \n* *⌨️ Eg:- :* ```.botname *name* ```*\n\n*⌨︎* .theri  \n*᪥* ```change your theri commands``` \n*⌨️ Eg:- :*```.theri command,command```*\n\n*⌨︎* .sticker \n*᪥* ```It converts your replied photo or video to sticker.```\n\n *⌨︎* .ffpack \n*᪥* ```Free Fire logo maker``` \n\n*⌨︎* .ffpack \n*᪥* ```Free Fire logo maker```\n\n *⌨︎* .alive \n*᪥* ```Does bot work?``` \n\n*⌨︎* .sysd \n*᪥*  ```Shows the system properties.```\n\n *⌨︎* .tagadmin \n*᪥*  ```Tags group admins.``` \n\n*⌨︎* .txtit \n*᪥*  ```Shows text to image tools withunlimitedaccess.```\n\n*⌨︎* .antibadword \n*᪥*  ```turn on & off anti-badword To remove members when they use badwords```\n*⌨Eg:- :*```.antibadword on / off```*\n\n*⌨︎* .a \n*᪥* ```Converts audio to sound recording.```\n\n*⌨︎* .unvoice\n```Converts audio to sound recording.```\n\n *⌨︎* .update \n*᪥*  ```Checks the update.```\n\n *⌨︎* .update now \n*᪥*  ```It makes updates.``` \n\n*⌨︎* .wallpaper \n*᪥*  ```It sends high resolution wallpapers.```\n\n *⌨︎* .wame \n*᪥* ```Get a link to the user chat.```\n\n*⌨︎* .weather \n*᪥*  ```Shows the weather.```\n\n*⌨︎* .speedtest \n*᪥*  ```Measures Download and Upload speed.```\n\n *⌨︎* .ping \n*᪥*  ```Measures your ping.``` \n\n*⌨︎* .short \n*᪥*  ```Shorten the long link.```\n\n *⌨︎* .calc \n*᪥*  ```Performs simple math operations.```\n\n*⌨︎* .whois \n*᪥* ```Displays metadata data of group or person.```\n\n  ", rowId:" rowid7"}
       ]
       
       const sections = [{title: "ᴛᴀᴜʀᴜs-ᴍᴜʜᴀᴍᴍᴇᴅ", rows: rows}]
       
       const button = {
        buttonText: '𝗧𝗔𝗨𝗥𝗨𝗦',
        description: "*ᴄᴏᴍᴍᴀɴᴅs ᴏғ ᴛᴀᴜʀᴜs ʙᴏᴛ*",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
