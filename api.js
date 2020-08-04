const baseUrl = "http://47.106.180.157:16060/app"
function request(method, params, url) {
  return new Promise((resolve) => {
    wx.request({
      url: `${baseUrl}${url}`,
      method,
      data: method === 'POST' ? JSON.stringify(params) : params,
      header: {
        'content-type': 'application/json',
        // 'appKey': 'key-value'
      },
      success(res) {
        resolve(res.data)
      },
      fail(err) {
        throw err
      }
    })
  })
}
module.exports = {
  request
}