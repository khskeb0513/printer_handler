const got = require('got')

module.exports = {
    get: async () => {
        return got.get('http://127.0.0.1:8080/api/v1/settings/read')
    }
}
