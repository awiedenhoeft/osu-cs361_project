'use strict';

const express = require("express");
const app = express();
const PORT = 3004;

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));


let htmlTop = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="robots" content="noindex,noarchive, nofollow" />
        <title>Alex Wiedenhoeft</title>
        <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
        <script src='main.js'></script>
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
        <link rel="manifest" href="site.webmanifest">
        <link rel="stylesheet" href="main.css" />
    </head>
    <body>
    <header>
        <h1>Alex Wiedenhoeft</h1>
        <img src="android-chrome-192x192.png" alt="" width="" height="" />
    </header>
    <nav>
        <a href="index.html">Home</a>
        <a href="contact.html">Contact</a>
        <a href="gallery.html">Gallery</a>
    </nav>
    <main>`;

let htmlBottom = `
    </main>
        <footer><p>&copy; 2025 Alex Wiedenhoeft</p></footer>
    </body>
    </html>`;


app.post("/results", (req, res) => {
    const name = req.body.fullName;
    const address = req.body.email;
    const thoughts = req.body.comments;
    const reason = req.body.purpose;
    const letter = req.body.newsletter;
    const topics = req.body.aspects;

    
    res.send(`${htmlTop}
        <section>
            <h2>Response</h2>
                <article>
                    <h3>Hello, ${name}.</h3>
                    <p>Thank you for your response! You told use that you want to learn about new book releases ${reason}.
                    You also indicated that you ${letter} like to receive a newsletter, and that you want to learn more about${topics}.
                    Your additional thoughts were:</p>
                    <p>${thoughts}.</p>

                    <p>We can contact you at ${address}.
                    </p>
                </article>
        </section>${htmlBottom}`);});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)});
