module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
      version: '4.0.7',
      skidMD5: true
    },
    autoStart: false
  }
}
