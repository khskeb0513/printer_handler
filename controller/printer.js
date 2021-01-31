const express = require('express')
const router = express.Router()

const printer = require('printer')

const setting = require('../service/SettingService')

router.get('/getPrinters', async (req, res, next) => {
    res.json(await printer.getPrinters())
})

router.get('/getPrinter', async (req, res, next) => {
    const name = req.query['name']
    res.json(await printer.getPrinter(name ? name : null))
})

router.get('/printDirect', async (req, res, next) => {
    res.json(await printer.printDirect())
})

router.get('/printFile', async (req, res, next) => {
    res.json(await printer.printFile())
})

router.get('/getSupportedPrintFormats', async (req, res, next) => {
    res.json(await printer.getSupportedPrintFormats())
})

router.get('/getJob', async (req, res, next) => {
    const query = {
        name: req.query['name'],
        jobId: req.query['id']
    }
    res.json(query.name && query.jobId ? await printer.getJob(query.name, query.jobId) : null)
})

router.get('/setJob', async (req, res, next) => {
    const query = {
        name: req.query['name'],
        jobId: req.query['id'],
        cmd: req.query['cmd']
    }
    res.json(query.name && query.jobId && query.cmd ? await printer.setJob(query.name, query.jobId, query.cmd) : null)
})

router.get('/getSupportedJobCommands', async (req, res, next) => {
    res.json(await printer.getSupportedJobCommands())
})

router.get('/setting', async (req, res, next) => {
    res.json(await setting.get())
})

module.exports = router
