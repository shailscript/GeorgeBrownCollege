module.exports = {
  default: {
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

    contracts: {
      SimpleLoan: {},
    },
  },

  development: {
    dappConnection: [
      "ws://localhost:8546",
      "http://localhost:8545",
      "$WEB3",
    ],
  },
};
