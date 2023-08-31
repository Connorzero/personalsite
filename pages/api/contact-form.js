const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY)

// export default async (req, res) => {
const ContactForm = async (req, res) => {
	const body = JSON.parse(req.body);

	// Creating the HTML for the email
  const emailBody = `
    Name: ${body.formData.name}\r\n
    Email: ${body.formData.email}\r\n
		Phone: ${body.formData.phone}\r\n
    Message: ${body.formData.message}
  `

	// Adding the data from the form to the email
  const data = {
    to: 'jon@jonquayle.co.uk',
    from: 'jon@jonquayle.co.uk',
    subject: `New message from ${body.formData.email}`,
    text: `
			Name: ${body.formData.name}\r\n
			Email: ${body.formData.email}\r\n
			Phone: ${body.formData.phone}\r\n
			Message: ${emailBody}`,
    html: emailBody.replace(/\r\n/g, '<br />'),
  };

	// If email or captcha are missing return an error
	if (!body.captchaToken) {
		return res.status(422).json({
			message: "Unproccesable request, please provide the required fields",
		});
	};

	try {
		// Ping the google recaptcha verify API to verify the captcha code you received
		const response = await fetch(
			`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${body.captchaToken}`,
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
				},
				method: "POST",
			}
		);
		const captchaValidation = await response.json();

		// Log the validation response to verify output
		console.log(captchaValidation);

		/**
       * The structure of response from the veirfy API is
       * {
       *  "success": true|false,
       *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
       *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
       *  "error-codes": [...]        // optional
        }
    */

		if (captchaValidation.success) {

			console.log('The reCAPTCHA code was successful, and the email has been sent');

			// // Send data to SendGrid
			await mail.send(data);

			// Return 200 if everything is successful
			return res.status(200).send("OK");
		}

		return res.status(422).json({
			message: "Unproccesable request, Invalid captcha code",
		});
	} catch (error) {
		console.log(error);
		return res.status(422).json({ message: "Something went wrong" });
	}
}

export default ContactForm;
