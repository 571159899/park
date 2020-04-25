// pages/buying/buying.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oneday:'今天04-14',
    money:'60',
    color:'black',
    twoday:'明天04-15',
    moneys:'60',
    colors:'black',
    threday:'后天04-16',
    moneyes:'60',      
    colores:'black',
    shu:1,
    username:'',
    account:'',
    phone:'',
    total:'60',
    fous:[
      {
        photo:'https://youimg1.c-ctrip.com/target/350v1600000110n5f9841_C_500_280_Q60.jpg'
      },
      {
        photo:'https://youimg1.c-ctrip.com/target/350f160000010pm3w01D1_C_500_280_Q60.jpg'
      },
      {
        photo:'https://youimg1.c-ctrip.com/target/350u160000010pkdb07FB_C_500_280_Q60.jpg'
      }
    ],
    show: false,
    date:'',
    showes:false
  },
  // 今天
  change:function(){
    this.setData({
      color:"red",
      colors:"black",
      colores:"black"
    })
  },
  // 明天
  changes:function(){
    this.setData({
      color:"black",
      colors:"red",
      colores:"black"
    })
  },
  // 后天
  changess:function(){
    this.setData({
      color:"black",
      colors:"black",
      colores:"red"
    })
  },
  // 姓名
  name:function(e) {
    this.setData({
      name:e.detail.value
    })
    if (this.data.name == "" || this.data.name == null) {
      wx.showToast({
        title: '收款人姓名必填',
        duration: 1000,
        icon: 'none'
      })
      return false;
    } else if (!(/^[\u4E00-\u9FA5]{2,4}$/.test(this.data.name))) {
      wx.showToast({
        title: '姓名有误',
        duration: 1000,
        icon: 'none'
      })
      return false;
    }
  },
  // 身份证
  account:function(e){
    this.setData({
      account:e.detail.value
    })
    if (this.data.account == "" || this.data.account == null) {
      wx.showToast({
        title: '身份证必填',
        duration: 1000,
        icon: 'none'
      });
      return false;
    } else if(this.data.account.length != 18 && !(/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(this.data.phone))){
      wx.showToast({
        title: '您输入的身份证号码不是有效格式',
        duration: 1000,
        icon: 'none'
      });
      return false;
    }
  },
  // 手机号
  phone: function(e) {
    this.setData({
      phone:e.detail.value
    })
    if (this.data.phone == "" || this.data.phone == null){
      wx.showToast({
        title: '手机号必填',
        duration: 1000,
        icon: 'none'
      });
    }else if(!(/^1[34578]\d{9}$/.test(this.data.phone))) {
      wx.showToast({
        title: '手机号输入有误',
        duration: 1000,
        icon: 'none'
      });
      return false;
    }
  },
  // 支付
  pay:function(){
    if (this.data.name == "" || this.data.name == null) {
      wx.showToast({
        title: '收款人姓名必填',
        duration: 1000,
        icon: 'none'
      })
      return false;
    } else if (!(/^[\u4E00-\u9FA5]{2,4}$/.test(this.data.name))) {
      wx.showToast({
        title: '姓名有误',
        duration: 1000,
        icon: 'none'
      })
      return false;
    }else if (this.data.account == "" || this.data.account == null) {
      wx.showToast({
        title: '身份证必填',
        duration: 1000,
        icon: 'none'
      });
      return false;
    } else if(this.data.account.length != 18 && !(/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(this.data.phone))){
      wx.showToast({
        title: '您输入的身份证号码不是有效格式',
        duration: 1000,
        icon: 'none'
      });
      return false;
    }else if (this.data.phone == "" || this.data.phone == null){
      wx.showToast({
        title: '手机号必填',
        duration: 1000,
        icon: 'none'
      });
      return false;
    }else if(!(/^1[34578]\d{9}$/.test(this.data.phone))) {
      wx.showToast({
        title: '手机号输入有误',
        duration: 1000,
        icon: 'none'
      });
      return false;
    }else{
      wx.showToast({
        title: '支付成功！',
        duration: 1000,
        icon: 'none'
      });
      return false;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  buy:function(){
    this.setData({ show: true });
  },
  // 关闭时触发
  onClose() {
    this.setData({ show: false });
  },
  // 步进器
  onChange(event) {
    // console.log(event.detail);
    this.setData({
      shu: event.detail
    })
    // 单价
    var shu = event.detail
    // 总价 = 数量*单价
    var total = shu*60
    this.setData({
      total:total
    })
  },
   // 日历
   onDisplay() {
    this.setData({ showes: true });
  },
  onCloses() {
    this.setData({ showes: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail)
    });
  }
})