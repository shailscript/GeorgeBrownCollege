module.exports = {
  // default applies to all environments
  default: {
    // Blockchain node to deploy the contracts
    deployment: {
      host: "localhost",
      port: 8555,
      type: "ws",
    },

    dappConnection: [
      "$WEB3",
      "ws://localhost:8555",
      "http://localhost:8545",
    ],

    gas: "auto",

    contracts: {},
  },

  development: {
    dappConnection: [
      "ws://localhost:8546",
      "http://localhost:8545",
      "$WEB3",
    ],
  },
};
