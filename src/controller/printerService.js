const printer = require('printer')

module.exports = {
    list: async () => {
        return printer.getPrinters()
    }, printer: async (name) => {
        return name ? await printer.getPrinter(name) : await printer.getPrinter()
    }, direct: async (data, callback) => {
        return printer.printDirect({
            data,
            options: {
                format: 'A4',
                media: 'A4',
                'fit-on-page': true
            }, success: async (id) => {
                const job = await printer.getJob(await printer.getPrinter()['name'], id)
                console.log(job)
                callback = job
            }, error: async (err) => {
                console.error(err)
                callback = err
            }
        })
    }
}
