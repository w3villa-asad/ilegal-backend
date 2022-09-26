require('dotenv').config(); // this is important!

module.exports = {
    targetEnv: process.env.TARGET_ENV || process.env.NODE_ENV,
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'secret',

    // Database
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        username: process.env.DB_USER || 'toor',
        password: process.env.DB_PASS || 'toor',
        name: process.env.DB_NAME || 'ilegal'
    },

    // Back
    BackUrl: process.env.BACKEND_URL || 'localhost',

    contracts:{
        // QANOON_REWARDS_ADD : "",
        // QANOON_TOKEN_ADD: "",
        // QANOON_ASASI_ADD: "",
        // QANOON_PREMIUM_ADD: "",
        // QANOON_PLUS_ADD: "",
        // QANOON_COMPLEMENTARY_ADD: "",
        // QANOON_DOCUMENT_ADD: "",
    },
}