
import { GluegunCommand } from 'gluegun'


const command: GluegunCommand = {
  name: 'cleangun',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to CleanGun')
    print.info('Help you remove duplicated content of your history')
  },
}

module.exports = command
