require('dotenv').config();

console.log("Checking environment variables");

//system environment variables from .bash_profile
console.log(process.env.MNEMONIC);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
console.log(process.env.SYSTEM_ADMIN);
console.log(process.env.SYSTEM_USER);

//app environment variables from .env
console.log(process.env.APP_NAME);
console.log(process.env.APP_ENV);
console.log(process.env.APP_DEBUG_MODE);
console.log(process.env.APP_HOST_URL);
console.log(process.env.APP_PORT);