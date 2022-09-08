const mail = require("nodemailer")

let email = mail.createTransport({
  service: 'gmail',
  auth: {
    user: 'gönderen e-mail',
    pass: 'app password'
  }
});
  email.verify(function (error, success) { if (error) throw error; });
  let bilgiler = {
    from: 'InFlames',
    to: 'alıcı e-mail',
    subject: 'https://covid-19code.xyz',
    text: 'Covid-19 #code',
    html: '<p style="color: red;">Hello World!</p>'
  };
  email.sendMail(bilgiler, function (error, info) {
    if (error) return console.error(error)

    console.log('Eposta gönderildi.');
  });
