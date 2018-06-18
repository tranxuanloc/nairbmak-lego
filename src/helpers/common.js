const path = require('path')

const root = filePath => path.resolve(__dirname, filePath)
const view = filePath => root('views/' + filePath)
const page = filePath => view('page/' + filePath)
const component = filePath => view('components/' + filePath)
const reducer = filePath => root('reducers/' + filePath)