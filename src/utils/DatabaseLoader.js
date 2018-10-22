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
        xhr.addEventListener('progress', event => this._progress(event))
        xhr.addEventListener('error', reject)
        xhr.addEventListener('load', resolve)
        xhr.send()
      }).then((event) => this._finalize(event))
    }
  }

  _progress (event) {
    let uncompressedLength = event.target.getResponseHeader('x-amz-meta-x-amz-meta-uncompressed-content-length')
    let totalSize = null
    if (event.lengthComputable) {
      totalSize = event.total
    } else if (uncompressedLength) {
      totalSize = parseInt(uncompressedLength)
    }
    if (totalSize) {
      for (let listener of this.progressListeners) {
        listener(event.loaded, totalSize)
      }
    }
  }

  _finalize (event) {
    this.progressListeners = null
    this.database = new window.SQL.Database(new Uint8Array(event.target.response))
    return this.database
  }
}
