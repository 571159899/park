Page({
  data:{
   longitude: 114.33681,
   latitude: 34.81064,
   markers:[{
     id: 0,
     iconPath: "../images/iphone.png",
     latitude: 23.099994,
     longitude: 113.324520,
     width: 50,
     height: 50
   }],
   value: ''
  },
  onLoad: function(){
    var that = this;
    wx.getLocation({
      type: "wgs84",
      success: function(res){
        var latitude = res.latitude;
        var longitude = res.longitude;
       //console.log(res.latitude);
        that.setData({
         latitude: res.latitude,
         longitude: res.longitude,
         markers:[{
           latitude: res.latitude,
           longitude: res.longitude
         }]
        })
      }
    })
  },
  onReady: function(){

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
  }
})