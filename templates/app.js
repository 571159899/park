//app.js
App({
  onLaunch:function () {
    var than = this
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        var code = res.code
        // console.log(code)
        wx.getUserInfo({
          success: res => {
            console.log(res),
              // this.globalData.userInfo = res.userInfo 
              //全局储存
            wx.request({
              url: 'https://exam.qhynice.top/index.php/Api/Login/getsessionkey',
              method: "POST",
              data: {
                code: code
              },
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              success: ress => {
                console.log(ress.data)
                var openid = ress.data.openid
                wx.setStorageSync('openid', ress.data.openid)
                wx.setStorageSync('session_key', ress.data.session_key)
                wx.request({
                  url: 'https://exam.qhynice.top/index.php/Api/Login/authlogin',
                  method: "POST",
                  data: {
                    openid: wx.getStorageSync('openid'),
                    NickName: res.userInfo.nickName,
                    HeadUrl: res.userInfo.avatarUrl,
                    gender: res.userInfo.gender
                  },
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  success(res) {
                    console.log(res)
                    var id = res.data.arr.ID
                    wx.setStorageSync('id', id)
                  },
                })
              }
            })
              }
            })
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          this.globalData.Custom = capsule;
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
