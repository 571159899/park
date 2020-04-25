// pages/user/user.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list:[
      {
        phone:'https://i2.tiimg.com/704744/bff52854e5628ffe.png',
        title:'会员卡'
      },
      {
        phone:'https://i2.tiimg.com/704744/bff1d912e9e4a6cf.png',
        title:'优惠券'
      },
      {
        phone:'https://i2.tiimg.com/704744/800dd9b6ff2a55a8.png',
        title:'我的评价'
      }
    ],
    activity:'',
    person:[
      {
        ticked:'https://i1.fuimg.com/704744/4e15cc739e93b527.png',
        name:'购票订单'
      },
      {
        ticked:'https://i1.fuimg.com/704744/124fb38ac9d89778.png',
        name:'餐饮订单'
      },
      {
        ticked:'https://i1.fuimg.com/704744/e2288081de014bac.png',
        name:'商城订单'
      },
      {
        ticked:'https://i1.fuimg.com/704744/296646c1a87f9f91.png',
        name:'停车订单'
      }
    ],
    people:[
      {
        hotel:'https://i2.tiimg.com/704744/f4794e8bf3827a07.png',
        names:'酒店订单'
      },
      {
        hotel:'https://i1.fuimg.com/704744/b91b3a646050d3fd.png',
        names:'活动订单'
      }
    ]
    // empower:'../../images/grant.png',
    // mine:'../../images/iphone.png',
    // map:'../../images/navigation.png',
    // phoneNum:'0373-7158656'
  },

  /***/
  onLoad: function(options) {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res)
              // console.log(res.userInfo)
              that.setData({
                nickName: res.userInfo.nickName, //昵称
                avatarUrl: res.userInfo.avatarUrl //头像
              })
            }
          })
        } else {
          wx.navigateTo({
            url: '../empower/empower', //跳转到授权页面
          })
        }
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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    wx.checkSession({ //检测当前用户的session_key是否过期
      success: function () { //session_key 未过期，并且在本生命周期一直有效
        console.log("授权未过期")
        return;
      },
      fail: function () { //session_key 已经失效，需要重新执行登录流程
        console.log("授权过期")
        wx.navigateTo({
          url: "../empower/empower" //重新授权
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 跳转积分兑换页面
  integral:function(){
    wx.navigateTo({
      url: '../integral/integral'
    })
  },
  // 跳转授权页面
  empower:function(){
    wx.navigateTo({
      url: '../empower/empower'
    })
  },
  // 拨打咨询电话
  freeTell: function(){
    var that=this;
      // 显示操作菜单提示呼叫号码还是将号码添加到手机通讯录
    wx.showActionSheet({
      itemList: ['呼叫','添加联系人'],
      success:function(res){
        if(res.tapIndex===0){
          // 呼叫号码
          wx.makePhoneCall({
            phoneNumber: that.data.phoneNum,
          })
        }else if(res.tapIndex==1){
          // 添加到手机通讯录
          wx.addPhoneContact({
            firstName: 'test',//联系人姓名
            mobilePhoneNumber: that.data.phoneNum,//联系人手机号
          })
        }
      }
    })
  },
  // 跳转地图导航页面
  navgat:function(){
    wx.navigateTo({
      url: '../map/map'
    })
  }
})