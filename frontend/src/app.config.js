const _config = {
    dev: {
        todoapi: "http://localhost:8080/api",
        google: {
            client_id: "651816047225-1us03r4vchvce7h51t0c49f4u0ip7ubm.apps.googleusercontent.com",
            base_url: "https://accounts.google.com/o/oauth2/v2/auth",
        },
        oid:  {
            client_id: "mycid",
            base_url: "http://localhost:3000",
        },
    },
    prod: {
        todoapi: process.env.REACT_APP_TODOAPI || "http://localhost:8080/api",
        google_client_id: process.env.REACT_APP_CLIENTID || "651816047225-1us03r4vchvce7h51t0c49f4u0ip7ubm.apps.googleusercontent.com",
        google_base_url: process.env.REACT_APP_CLIENT_ID || "https://accounts.google.com/o/oauth2/v2/auth",
    },
}

const config = process.env.NODE_ENV === "development" ? _config.dev : _config.prod;

export default config;