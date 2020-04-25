// pages/details/details.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardCur: 0,
    ColorList: app.globalData.ColorList,
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
    person:[
      {
        logo:'https://i1.fuimg.com/704744/067e8bf6044bb090.png',
        name:'清明上河园全价大门票',
        sold:'已售：789',
        price:'￥120',
        price_d:'￥120',
        order:'../buying/buying'
      },
      {
        logo:'https://i1.fuimg.com/704744/067e8bf6044bb090.png',
        name:'清明上河园半价大门票',
        sold:'已售：170',
        price:'￥60',
        price_d:'￥60',
        order:'../haif/haif'
      }
    ],
    head:'https://i1.fuimg.com/704744/5a79b795ad920747.png',
    show: false,
    pro:[],
    shu:1,
    value:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this
    // 商品信息
    // wx.request({
    //   url: 'https://exam.qhynice.top/index.php/Api/Product/index',
    //   method:'POST',
    //   data:{
    //     pro_id: wx.getStorageSync('sp_id')
    //   },
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   },
    //   success:res =>{
    //     console.log(res.data)
    //     wx.setStorageSync('pro', res.data.pro),
    //     that.setData({
    //       fous:res.data.pro.photo_d,
    //       pro:res.data.pro,
    //       name:res.data.pro.name,
    //       num:res.data.pro.num,
    //       price_yh: res.data.pro.price_yh
    //     })
    //   }
    // })
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
  // 搜索栏开始
  onChange(e) {
    this.setData({
      value: e.detail
    });
  },
  onSearch() {
    Toast('搜索' + this.data.value);
  },
  onClick() {
    Toast('搜索' + this.data.value);
  },
  // 搜索栏结束
  SetShadow(e) {
    this.setData({
      shadow: e.detail.value
    })
  },
  SetBorderSize(e) {
    this.setData({
      bordersize: e.detail.value
    })
  },
  // 点击购买按钮触发函数,弹出内容
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
    wx.setStorageSync('num', event.detail)
  },
  // 点击购买进入订单确认页面
  // once:function(){
  //   var shu = this.data.shu
  //   var photo_x = this.data.pro.photo_x
  //   var name = this.data.pro.name
  //   var price_yh = this.data.pro.price_yh
  //   var num = this.data.pro.num
  //   // console.log(price)
  //   wx.navigateTo({
  //     url: '../order/order?shu=' + shu + '&photo_x=' + photo_x + '&name=' + name + '&price_yh=' + price_yh+'&num='+num
  //   })
  // }
})