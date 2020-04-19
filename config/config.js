const config = {
    //to diferenciate between dev and production modes
    env: process.env.NODE_ENV || 'development',
    
    //to define the listening port for the server
    port: process.env.PORT || 3000,

    //The secret key to be used to sign jwt tokens
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",

    //the location of the MongoDB database instance for the project
    mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject'
}

export default config;