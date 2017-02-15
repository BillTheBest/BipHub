import nconf from 'nconf'
import path from 'path'

const loadNConf = () => {
  const configPath = __dirname
  const ENV_DEV = 'development'
  const ENV_PROD = 'production'
  const PATH_DEV = 'env/dev/'
  const PATH_PROD = 'env/prod/'
  let configDir = PATH_DEV

  // Loads environment variables
  nconf.argv().env()
  const nodeEnv = nconf.get('NODE_ENV')

  if (nodeEnv === ENV_DEV) {
    configDir = path.join(configPath, PATH_DEV)
  } else if (nodeEnv === ENV_PROD) {
    configDir = path.join(configPath, PATH_PROD)
  }

  // Loads configs
  nconf.file('hub', { file: `${configDir}hub.json` })
  nconf.file('web', { file: `${configDir}web.json` })
  return nconf
}

export default loadNConf()
