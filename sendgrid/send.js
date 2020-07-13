const platform = require("connect-platform");
const sgMail = require("../instance").client;

platform.core.node(
  {
    path: "/sendgrid/send",

    public: false,

    inputs: ["msg"],
    outputs: ["res", "error"],
    controlOutputs: [],

    hints: {
      node:
        'sends an email with the corresponding <span class="hl-blue">msg</span>.',
      inputs: {
        msg: '<span class="hl-blue">message</span> parameter',
      },

      outputs: {
        res:
          'the result of the request corresponding to the <span class="hl-blue">msg</span>.',
        error: "the error in case of an error getting triggered.",
      },

      controlOutputs: {},
    },
  },

  (inputs, output) => {
    sgMail.send(inputs.msg).then(
      (res) => {
        output("res", res);
      },
      (error) => {
        console.error(error);

        output("error", error);
      }
    );
  }
);
