const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors') ({ origin: true });
const website = require('./db/media');

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gbc-firebase-lec.firebaseio.com"
});

exports.getVideosLinks = functions.https.onRequest( (req, res) => {
    return cors( req, res, async () => {
        try {
            const links = await website.getMedia(admin.database());
            const views = links.Views;
            await website.updateViews(admin.database(), views);
            console.log(links, views);
            return res.status(200).json(links);
        } catch (error) {
            return res.status(500).json(error);
        }
    });
});



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
