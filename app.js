import express from 'express';

import { HTMX_KNOWLEDGE } from './data/htmx-info.js';

const app = express();

app.use(express.static('public')); // this line is a configuration to serve static files from the public directory

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>HTMX Essentials</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"

        />
        <link rel="icon" href="/icon.png" />
        <script src="/htmx.js" defer></script>
        <link rel="stylesheet" href="/main.css" />
      </head>
      <body>
        <header id="main-header">
          <img src="/htmx-logo.jpg" alt="HTMX Logo" />
          <h1>Essentials</h1>
        </header>

        <main>
          <p>HTMX is a JavaScript library that you use without writing JavaScript code.</p>
          <!-- hx-getwhen trigger hx-get (issue a GET to the specified URL) request --->
          <!-- hx-swap control how content will be swap or replace in the DOM (outerHTML, innerHTML, afterbegin, beforeend, afterend, beforebegin) --->
          <!-- hx-target is a specifies the target element for the response content หรือ target element ที่จะถูกเปลี่ยนแปลง(swap) --->
          <button
            hx-get="/info"
            hx-target="main"
            hx-swap="beforeend"
            >Learn More</button>
        </main>
      </body>
    </html>
  `);
});

app.get('/info', (req, res) => {
  res.send(`
    <ul>
      <!--- map each item in the array to a list item like react.js and HTMX_KNOWLEDGE is export by file htmx-info.js --->
      <!--- .join('') the array to a string --->
      ${HTMX_KNOWLEDGE.map(info => `<li>${info}</li>`).join('')}
    </ul>
  `);
});

app.listen(3030);
