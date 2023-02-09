require('dotenv').config();
const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
    let url = process.env.API_URL;
    return EleventyFetch(`${url}/users`, {
        duration: "1d",
        type: "json"
    });
}