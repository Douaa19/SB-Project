module.exports.newOrder = (message) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
        rel="stylesheet" />
      <title>Saba Embroidery - Contact Message</title>
      <style>
      @font-face {
        font-family: Montserrat;
        src: url('../fonts/Montserrat-Regular.ttf') format('woff2'),
              url('../fonts/Montserrat-Bold.ttf') format('woff')
        font-weight: normal;
        font-style: normal;
      }
        body {
          margin: 0;
          font-family: Montserrat, sans-serif;
        }
        table {
          border-spacing: 0;
        }
        td {
          padding: 0;
        }
        img {
          border: 0;
        }
        .wrapper {
          width: 100%;
          table-layout: fixed;
          padding-bottom: 60px;
        }
        .main {
          background-color: #ffffff;
          margin: 0 auto;
          width: 100%;
          max-width: 600px;
          border-spacing: 0;
          font-family: Montserrat;
          color: black;
        }

      </style>
    </head>
    <body>
      <center class="wrapper">
        <table
          class="main"
          width="100%"
          style="border: 1px solid #dab88a; border-radius: 8px">
          <!-- LOGO SECTION -->
          <tr>
            <td>
              <table width="100%">
                <tr>
                  <td style="text-align: center; padding: 1rem 0 0; width: 100%; max-width: 300px;">
                    <a href="sabaembroidery.ma">
                      <img
                        src="https://drive.google.com/uc?export=download&id=1NNBtsCyJXXH2cPm68vt8edNNZguDYHH5"
                        alt="Saba Embroidery LOGO"
                        width="14%" />
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- TEXT -->
          <tr>
            <td>
              <table style="width: 100%">
                <tr>
                  <td
                    style="
                      font-size: 16px;
                      font-weight: bold;
                      width: 100%;
                      padding: 0 2rem 1rem;
                      text-align: center;
                    ">
                    <span>${message}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- TEXT -->

          <!-- BODY SECTION -->
          <tr>
            <td>
              <table width="100%">
                <tr>
                  <td class="tree-rows">
                    <table
                      class="row"
                      style="font-size: 18px; padding: 0 2rem; width: 100%">
                      <tr class="data" style="display: flex; padding: 0.4rem 0; width: 100%; text-decoration: none; color: #000;">
                        <td style="font-size: 16px; width: 100%; text-decoration: none; color: black; margin-left: 1rem;">
                          <span>Please click the link to reset your password.</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </center>
    </body>
  </html>`;
};
