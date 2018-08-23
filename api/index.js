const Promise 	= require('bluebird')
const fs 		= Promise.promisifyAll(require('fs'))

module.exports = {
	sendEmail (email_data) {
		if (!email_data  && !email_data.email_to)
			return Promise.reject({
				message: 'email_to is required',
				success: false
			})

		const sendgrid = require('sendgrid')(nconf.get('SENDGRID_API_KEY'))
		const config = {
			method 	: 'POST',
			path 	: '/v3/mail/send',
			body 	: {
				personalizations: [
					{
						to: [{ email: email_data.email_to || nconf.get('DEFAULT_EMAIL_TO')}],
						subject: email_data.subject,
					}
				],
				from: {
					email: email_data.email_from || nconf.get('DEFAULT_EMAIL_FROM'),
					name: email_data.name_from || ''
				},
				content: [
					{
						type: 'text/html',
						value: email_data.body,
					}
				]
			}
		}

		if(email_data.attachments && email_data.attachments.length)
			config.body.attachments = email_data.attachments
		
		return sendgrid.API(sendgrid.emptyRequest(config))
	},

	prepareEmailBody (file, data) {
		return fs
			.readFileAsync(file, 'utf8')
			.then(response => {
				for (var key in data) {
					if (data.hasOwnProperty(key))
						response = response.replace('${' + key + '}', data[key]).replace('${' + key + '}', data[key])
				}

				return response
			})
	}		
}