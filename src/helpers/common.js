const path = require('path')

const Url = {
  root: filePath => path.resolve(__dirname, filePath),
  view: filePath => root('views/' + filePath),
  page: filePath => view('page/' + filePath),
  reducer: filePath => root('reducers/' + filePath),
}

export default Url