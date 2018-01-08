const path = require('path')
module.exports = function (content, map) {
  const context =
    (this._compiler && this._compiler.context) ||
    this.options.context ||
    process.cwd()
  const filePath = this.resourcePath
  const shortFilePath = path.relative(context, filePath).replace(/^(\.\.[\\\/])+/, '')
  const {target} = this.query
  if(target == 'web'){
    content += "Component.options.__path = {absolute: '"+filePath+"', relative: '"+shortFilePath+"'}"
  }else if(target == 'native'){
    content += "__vue_options__.__path = {absolute: '"+filePath+"', relative: '"+shortFilePath+"'}"
  }
  return content
}
