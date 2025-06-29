import express from "express";
import bodyParser from "body-parser";
import {v4 as uuidv4} from "uuid";
import TelegramBot from "node-telegram-bot-api";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";


const app = express();
const port = 3000;
const telegramToken = "7657967211:AAGcUFyFOn-gi4vbLkS-x3ewcyKGSkvx5eg";
// const bot = new TelegramBot(telegramToken, { polling: true });


// Your web app's Firebase configuration 1
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxgRESo12WQecqG9_q2dwnJPdc8-hIX88",
    databaseURL: "https://telegram-bot-database-a8986-default-rtdb.europe-west1.firebasedatabase.app",
    authDomain: "telegram-bot-database-a8986.firebaseapp.com",
    projectId: "telegram-bot-database-a8986",
    storageBucket: "telegram-bot-database-a8986.firebasestorage.app",
    messagingSenderId: "131088490437",
    appId: "1:131088490437:web:60b30b3cdd4a034fb2b5ac",
    measurementId: "G-2Z6CWLYKKD"
};
  

// Initialize Firebase
const telDBConfig = initializeApp(firebaseConfig);
const database = getDatabase(telDBConfig);
const nodeVersion2 = process.versions.node;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Telegram Bot is running!");
});

// bot.onText(/\/start/, (msg) => {
//     bot.sendMessage(msg.chat.id, "Welcome! \nAlmost there! 🚀 To see who’s near you, please share your location.", {
//       reply_markup: {
//         keyboard: [
//           [
//             {
//               text: "✅ Share Location",
//               request_location: true,
//             },
//             {
//                 text: "❌No, thanks",
//                 request_location: false,
//             },
//           ],
//         ],
//         resize_keyboard: true,
//         one_time_keyboard: true,
//       },
//     });
// });

// bot.on("location", (msg) => {
//     const { latitude, longitude } = msg.location;
//     const username = msg.from.username || "Username";
//     const firstName = msg.from.first_name || "First Name";

//     bot.sendMessage(msg.chat.id, `Hello ${username} ${firstName} Thanks for sharing 
//         \nYou can now see the users and groups near you below
//         \nIf you want to stop sharing your location, just type /stop.
//         \nIf you move to a different location, you can share your location again by typing > /start.
//         \nIf you get an error or dont see any contacts near you, 
//         go to settings/permission and allow Telegram to access your location. Then press /start again`);
//     //bot.sendMessage(msg.chat.id, `Thanks! Your location:\nLat: ${latitude}\nLong: ${longitude} \nSee the users and groups near you below`);
    
//     const randomVar = uuidv4();

//     set(ref(database, 'nearbyuser/' + randomVar), {
//         username: username,
//         firstName: firstName,
//         latitude: latitude,
//         longitude: longitude,
//     })

//     const postListRef = ref(database, 'nearbyuser/');

//     get(postListRef).then((snapshot) => {
//         const dataList = Object.values(snapshot.val());
//         //console.log("Users near you:", dataList);

//         //bot.sendMessage(msg.chat.id, `USERS NEAR YOU`)

//         for(var i = 0; i < dataList.length; i++){

//         const R = 6371; // Earth's radius in kilometers

//         const dLat = (dataList[i].latitude- latitude) * Math.PI / 180; // Convert degrees to radians
//         const dLon = (dataList[i].longitude - longitude) * Math.PI / 180;
      
//         const a =
//           Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//           Math.cos(latitude * Math.PI / 180) * Math.cos(dataList[i].latitude * Math.PI / 180) *
//           Math.sin(dLon / 2) * Math.sin(dLon / 2);
      
//         const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      
//         const distance = Math.round(R * c);

//         if (distance <= 1){
//            bot.sendMessage(msg.chat.id, `@${dataList[i].username} ${dataList[i].firstName} - is ${distance}km away`);
//            //bot.sendMessage(msg.chat.id, `@${dataList[i].username} ${dataList[i].firstName} - ${dataList[i].latitude} ${dataList[i].longitude}`);
//         }
//        }
//     })
// });

// bot.onText("No, thanks", (msg) => {
//     bot.sendMessage(msg.chat.id, "No problem! If you change your mind, just type /start to share your location.");
// });


// bot.onText(/\/stop/, (msg) => {
//     bot.sendMessage(msg.chat.id, "You have stopped sharing your location. If you want to share it again, just type /start.");
// });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Node.js version: ${nodeVersion2}`);
});