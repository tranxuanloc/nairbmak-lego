const config = {
  local: {
    api: "http://localhost:3002",
    socket: "http://localhost:3002"
  },

  /*
  ** !!!WARNING!!!
  ** DO NOT CHANGE BELOW CONFIGURATION. THIS WILL BE USED BY CI/CD
  */
  development: {
    api: "http://ec2-54-218-64-48.us-west-2.compute.amazonaws.com:3002",
    socket: "http://ec2-54-218-64-48.us-west-2.compute.amazonaws.com:3002"
  },
  staging: {
    api: "http://ec2-18-237-91-1.us-west-2.compute.amazonaws.com:3002",
    socket: "http://ec2-18-237-91-1.us-west-2.compute.amazonaws.com:3002"
  },
  testnet: {
    api: "http://localhost:3002",
    socket: "http://localhost:3002"
  },
  production: {
    api: "https://api.kambria.io",
    socket: "https://api.kambria.io"
  }
};

export default config;
