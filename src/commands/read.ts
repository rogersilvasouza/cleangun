
  import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'read',
  alias: ['r'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      print: { info, error },
      filesystem,
      prompt
    } = toolbox

    info(`Read history log`)
    info(`${filesystem.homedir()}`)

    if (filesystem.exists(`${filesystem.homedir()}/.zshrc`)) {
      info(``)
      info(`Arquivo existe`)
      const answer = await prompt.confirm(`Do you want to overwrite it?`)
      if (answer) {
        info(`Removido`)
      } else {
        return undefined
      }
    } else {
      error(`Arquivo não existe`)
    }
  },
}
