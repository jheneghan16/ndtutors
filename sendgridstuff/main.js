Parse.Cloud.define("sendgridEmail", async(request) => {
    const sgMail = require('@sendgrid/mail');

    // Import SendGrid module and call with your SendGrid API Key
    sgMail.setApiKey("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");
    
    const msg = {
        to: request.params.toEmail,
        replyTo: 'jhenegha@nd.edu',
        from: 'jhenegha@nd.edu',
         subject: request.params.subject,
        text: request.params.body
    };
    
    return await sgMail.send(msg);
});