module.exports.platform = {
  config: {
    nodes: {
      native: ["sendgrid/send"],
    },
    aliases: {
      "/mail/send": "/sendgrid/send",
    },
  },
  hints: {
    setup: `Should work if you provide the correct configuration as shown below.<br>
    Documentation can be found <a href="https://www.npmjs.com/package/@sendgrid/mail">here</a>`,
    sendgrid: {
      apiKey: "<SENDGRID_API_KEY>",
    },
  },
};
