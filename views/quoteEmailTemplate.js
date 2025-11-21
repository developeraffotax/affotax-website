export const quoteEmailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Instant Quote</title>
</head>
<body style="margin:0; padding:0; font-family:Arial,sans-serif; background-color:#f5f6fa; color:#1f2937;">
  <center>
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f5f6fa; padding:40px 0;">
      <tr>
        <td align="center">

          <!-- Inner card -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:640px; width:100%; background-color:#ffffff; border:1px solid #e5e7eb; border-radius:16px; overflow:hidden;">
            
            <!-- HERO -->
            <tr>
              <td align="center" bgcolor="#ff7f45" style="padding:24px; color:#ffffff;">
                <h1 style="margin:0; font-size:22px; font-weight:700;">You've Received a New Quote</h1>
                <span style="display:inline-block; background:rgba(255,255,255,0.2); padding:4px 10px; font-size:11px; font-weight:bold; border-radius:50px; margin-top:8px; text-transform:uppercase;">New Quote Request</span>
              </td>
            </tr>

            <!-- CONTENT -->
            <tr>
              <td style="padding:30px;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding:8px 0; font-weight:bold; color:#5b6070; width:150px;">Name:</td>
                    <td style="padding:8px 0; color:#1f2937;"><%= data.name %></td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0; font-weight:bold; color:#5b6070;">Email:</td>
                    <td style="padding:8px 0; color:#1f2937;"><a href="mailto:<%= data.email %>" style="color:#1f2937; text-decoration:none;"><%= data.email %></a></td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0; font-weight:bold; color:#5b6070;">Phone:</td>
                    <td style="padding:8px 0; color:#1f2937;"><%= data.phoneNumber %></td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0; font-weight:bold; color:#5b6070;">Business Type:</td>
                    <td style="padding:8px 0; color:#1f2937;"><%= data.businessType %></td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0; font-weight:bold; color:#5b6070;">Turnover:</td>
                    <td style="padding:8px 0; color:#1f2937;"><%= data.turnover %></td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0; font-weight:bold; color:#5b6070;">Bookkeeping:</td>
                    <td style="padding:8px 0; color:#1f2937;"><%= data.bookkeeping %></td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0; font-weight:bold; color:#5b6070;">Message:</td>
                    <td style="padding:8px 0; color:#1f2937;"><%= data.message %></td>
                  </tr>
                </table>

                <!-- CTA -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:25px;">
                  <tr>
                    <td align="center">
                      <a href="https://crm.affotax.com/leads" target="_blank" style="background-color:#ff7f45; color:#ffffff; text-decoration:none; padding:12px 26px; border-radius:10px; font-weight:bold; display:inline-block;">
                        Create lead in CRM
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td style="padding:20px 30px; background-color:#fafafa; font-size:13px; color:#6b7280; text-align:center; border-top:1px solid #e5e7eb;">
                Sent from Affotax Instant Quote • <a href="http://affotax.com" style="color:#6b7280; text-decoration:none;">affotax.com</a>
              </td>
            </tr>

          </table>
          <!-- End inner card -->

        </td>
      </tr>
    </table>
  </center>
</body>
</html>
`;
