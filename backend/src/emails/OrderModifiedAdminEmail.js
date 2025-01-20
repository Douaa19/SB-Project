module.exports.orderModifiedAdminEmail = (data) => {
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
          <title>Shipping Info Updated - Admin Notification</title>
          <style>
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
          </style>
        </head>
        <body>
          <center class="wrapper">
            <table class="main">
              <!-- LOGO SECTION -->
              <tr>
                <td>
                  <table width="100%">
                    <tr>
                      <td style="text-align: center; padding: 1rem;">
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
                      <td style="padding: 2rem;">
                        <p>Dear Admin,</p>
                        <p>
                          A customer has updated their shipping information. Below are the new details:
                        </p>
                        <table class="detailsTable" style="border: #CCC 1px solid; border-radius: 5px; font-size: 14px;">
                          <tr style="background-color: #CECECE;">
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>City</th>
                            <th>Postal Code</th>
                          </tr>
                          <tr>
                            <td>${data.username}</td>
                            <td>${data.email}</td>
                            <td>${data.address}</td>
                            <td>${data.phone}</td>
                            <td>${data.city}</td>
                            <td>${data.zipCode}</td>
                          </tr>
                        </table>
                        <p style="margin-top: 1rem;">
                          Please review these changes in the admin panel if needed.
                        </p>
                        <p style="margin-top: 1rem;">Best regards,<br>SabaEmbroidery System</p>
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
  