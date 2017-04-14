export default class DatabaseLoader {
  constructor (location) {
    this.location = location
    this.progressListeners = []
    this.database = null
  }

  onProgress (listener) {
    if (this.progressListeners) {
      this.progressListeners.push(listener)
    }
  }

  loadDatabase () {
    if (this.database) {
      return Promise.resolve(this.database)
    } else {
      return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', this.location, true)
        xhr.responseType = 'arraybuffer'
        xhr.addEventListener('progress', (event) => {
          if (event.lengthComputable) {
            for (let listener of this.progressListeners) {
              listener(event.loaded, event.total)
            }
          }
        })
        xhr.addEventListener('error', (event) => {
          reject(event)
        })
        xhr.addEventListener('load', () => {
          this.progressListeners = null
          this.database = new window.SQL.Database(new Uint8Array(xhr.response))
          resolve(this.database)
        })
        xhr.send()
      })
    }
  }
}
