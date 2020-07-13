const platform = require("connect-platform");

let config = platform.config.get("sendgrid", {});

const sendgridAPI = {
  sgMail: null,
  get client() {
    if (this.sgMail === null) {
      this.sgMail = require("@sendgrid/mail");

      this.sgMail.setApiKey(config.apiKey);
    }

    return this.sgMail;
  },
};

module.exports = sendgridAPI;
module.exports.config = config;
