module.exports.orderModifiedClientEmail = (data) => {
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
        <title>Saba Embroidery - Shipping Info Updated</title>
        <style>
          @font-face {
            font-family: Montserrat;
            src: url("../fonts/Montserrat-Regular.ttf") format("woff2"),
              url("../fonts/Montserrat-Bold.ttf") format("woff");
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
            max-width: 90%;
            border-spacing: 0;
            font-family: Montserrat;
            color: black;
            text-align: left;
          }
          .detailsTable {
              width: 90%;
              border-collapse: collapse;
          }
          .detailsTable tr th {
              padding:0.5rem;
              text-align: center;
              border: #EEE 1px solid;
          }
          .detailsTable tr td {
              padding: 0.2rem;
              border: #CCC 1px solid;
          }
          .pricesTable tr td {
              padding: 0.2rem;
          }
        </style>
      </head>
      <body>
        <center class="wrapper">
          <table
            class="main"
            width="100%"
            style="">
            <!-- LOGO SECTION -->
            <tr>
              <td>
                <table width="100%">
                  <tr>
                    <td
                      style="
                        text-align: center;
                        padding: 1rem 0 0;
                        width: 100%;
                        max-width: 300px;
                        margin-bottom: 1rem;
                      ">
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
    
            <!-- BODY SECTION -->
            <tr>
              <td>
                <table width="100%">
                  <tr>
                    <td class="tree-rows">
                      <table
                        class="row"
                        style="font-size: 18px; padding: 0 2rem; width: 100%">
                        </tr>
                        <tr
                          class="data"
                          style="
                            display: flex;
                            padding: 0.4rem 0;
                            width: 100%;
                            text-decoration: none;
                            color: #000;
                          ">
                          <td
                            style="
                              font-size: 16px;
                              width: 100%;
                              text-decoration: none;
                              color: black;
                              margin-left: 1rem;
                            ">
                            <span>Hello ${data.username},</span>
                            <p>
                              We wanted to let you know that your shipping information has been successfully updated. Below are your new shipping details:
                            </p>
                            <table class="detailsTable" style="border: #CCC 1px solid;
                            border-radius: 5px; font-size: 14px;">
                              <tr style="background-color: #CECECE;">
                                  <th>Email</th>
                                  <th>Address</th>
                                  <th>Phone Number</th>
                                  <th>City</th>
                                  <th>Postal code</th>
                              </tr>
                              <tr style="">
                                  <td>${data.email}</td>
                                  <td>${data.address}</td>
                                  <td>${data.phone}</td>
                                  <td>${data.city}</td>
                                  <td>${data.zipCode}</td>
                              </tr>
                            </table>
                            <p>If you did not make this change or have any concerns, please contact us immediately.</p>
                            <p style="">
                              Best regards,<br />
                              SabaEmbroidery Team
                            </p>
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
