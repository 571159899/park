//index.js
//获取应用实例
const app = getApp();
Page({
   // 解密用户敏感信息获取手机号接口
  getPhoneNumber(e) {
    var that = this
    console.log(e.detail.errMsg == "getPhoneNumber:ok")
    if (e.detail.errMsg == "getPhoneNumber:ok"){
      wx.request({
        url: 'https://exam.qhynice.top/index.php/Api/User/deciphering',
        method: 'GET',
        data: {
          sessionID: wx.getStorageSync('session_key'),
          encryptedDataStr: e.detail.encryptedData,
          iv: e.detail.iv
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          console.log(res)
          var phoneNumber = res.data.phoneNumber
          wx.setStorageSync('phoneNumber', res.data.phoneNumber)
          // wx.navigateTo({
          //   url: '../bindleader/bindleader',
          // })
        }
      })
    }else{
      wx.showToast({
        title: '获取手机号失败',
        duration: 2000,
        icon: 'none'
      })
    }
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    motto: 'Hi 开发者！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    TabCur: 0,
    ColorList: app.globalData.ColorList,
    cardCur: 0,
    // 新项目
    ggtop:[
      {
        photo:'https://youimg1.c-ctrip.com/target/fd/tg/g3/M05/9A/5E/CggYG1ZcBOiAM6JOABnG0z8MwI4389_C_500_280_Q60.jpg'
      },
      {
        photo:'https://youimg1.c-ctrip.com/target/350g160000010qachB11D_C_500_280_Q60.jpg'
      },
      {
        photo:'https://dimg04.c-ctrip.com/images/350e160000010sceeAFFF_C_500_280_Q60.jpg'
      },
      {
        photo:'https://youimg1.c-ctrip.com/target/100812000000sfnb44574_C_500_280_Q60.jpg'
      }
    ],
    introduce:'一朝步入画卷，一日梦回千年',
    introduces:'国家AAAAA级旅游景区，国家文化产业示范基地，大型宋文化主题公园。',
    prolist:[
      {
        url:'../details/details',
        img:'https://i2.tiimg.com/704744/a4d5b8476ad23fee.png',
        name:'自助购票'
      },
      {
        url:'../guide/guide',
        img:'https://i2.tiimg.com/704744/0eaa86f1f0d4bb00.png',
        name:'景区导览'
      },
      {
        url:'../announce/announce',
        img:'https://i2.tiimg.com/704744/2406cec9dfcd7bd9.png',
        name:'景区通知'
      },
      {
        url:'',
        img:'https://i2.tiimg.com/704744/548141929c7bc5af.png',
        name:'评价建议'
      }
    ],
    vertical_icon:'https://i1.fuimg.com/704744/72f7e33ef15268b9.png',
    vertical_icons:'https://i1.fuimg.com/704744/72f7e33ef15268b9.png',
    people:[
      {
        name:'清明上河园全价大门票',
        price:'￥120',
        price_d:'￥120',
        time:'16:00前可购票',
        src:'../buying/buying'
      },
      {
        name:'清明上河园全价大门票',
        price:'￥60',
        price_d:'￥60',
        time:'16:00前可购票',
        src:'../haif/haif'
      }
    ],
    strategy:'https://dimg04.c-ctrip.com/images/350g160000010qachB11D_C_500_280_Q60.jpg',
    head:'https://i1.fuimg.com/704744/5a79b795ad920747.png'
  },
  isCard(e) {
    this.setData({
      isCard: e.detail.value
    })
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function() {
    // 轮播接口
    var that = this
    wx.request({
      url: 'https://exam.qhynice.top/index.php/Api/Index/index',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: res => {
        console.log(res)
        that.setData({
          // ggtop:res.data.ggtop,
          // prolist:res.data.prolist
        })
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var that = this;
    return {
      title: '清明上河园小程序',
      path:'../index/index',
      success: function(res) {
        console.log("转发成功:" + JSON.stringify(res));
        that.shareClick();
      },
      fail: function(res) {
        console.log("转发失败:" + JSON.stringify(res));
      }
    }
  },
  // 点击微信授权
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  // 进入详情页
  detail: function(e) {
    var id =e.currentTarget.dataset.id
    wx.setStorageSync('sp_id', e.currentTarget.dataset.id)
    // console.log(id)
    wx.navigateTo({
      url: '../details/details'
    })
  }
})