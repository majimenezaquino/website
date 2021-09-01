const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')
const msg = {
  to: 'migueljimenezaquino@gmail.com', // Change to your recipient
  from: 'test@example.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'Enviado desde sendgrid',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })