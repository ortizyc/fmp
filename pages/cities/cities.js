// cities.js
// 引入SDK核心类
var broadcast = require('../../utils/broadcast.js');
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
var config = require('../../config.js');

// 实例化API核心类
var wxMap = new QQMapWX({
  key: config.QQMapWXKey // 必填
});
// 调用接口
var getCityList = function(){
  var defer = Q.defer();
  wxMap.getCityList({
    success: function (res) {
      defer.resolve(res.result[1]);
    },
    fail: function (res) {
      defer.reject(res);
    },
  });
  return defer.promise;
}

var DIRECT_UNDER_THE_CENTRAL_GOVERNMENT_CODE = ['11','12','31','50'];
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sViewId:'',
    nScrollViewHeight: 667,
    aNav:[],
    aHotCities:['北京市','上海市','广州市','深圳市','杭州市','南京市','武汉市','成都市','西安市'],
    oCitiesAfterClassified:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      nScrollViewHeight:app.globalData.systemInfo.screenHeight
    })
    try {
      var oCitiesAfterClassified = wx.getStorageSync('oCitiesAfterClassified');
      var aNav = wx.getStorageSync('aNav');
      if (!oCitiesAfterClassified) {
        getCityList().then(cities => {
          var oCities = {};
          cities.forEach(city => {
            var sFirstCharOfPinyin = city.pinyin[0][0].toUpperCase();
            if (!oCities.hasOwnProperty(sFirstCharOfPinyin)) {
              oCities[sFirstCharOfPinyin] = [];
              switch (sFirstCharOfPinyin) {
                case 'B': oCities[sFirstCharOfPinyin].push('北京市'); break;
                case 'S': oCities[sFirstCharOfPinyin].push('上海市'); break;
                case 'T': oCities[sFirstCharOfPinyin].push('天津市'); break;
                case 'C': oCities[sFirstCharOfPinyin].push('重庆市'); break;
              }
            }
            if (DIRECT_UNDER_THE_CENTRAL_GOVERNMENT_CODE.indexOf(city.id.slice(0, 2)) === -1) {
              oCities[sFirstCharOfPinyin].push(city.fullname);
            }
          })
          return oCities;
        }).then(oCities => {
          var oSortCities = {}
          var keys = Object.keys(oCities).sort();
          keys.forEach(key => {
            if (!oSortCities.hasOwnProperty(key)) {
              oSortCities[key] = [];
            }
            oSortCities[key] = oCities[key];
          })
          return [keys, oSortCities];
        }).then((aResult) => {    // 不支持解构
          oCitiesAfterClassified=aResult[1];
          aNav=aResult[0];
          wx.setStorageSync('oCitiesAfterClassified', oCitiesAfterClassified);
          wx.setStorageSync('aNav', aNav);
          this.setData({
            oCitiesAfterClassified: oCitiesAfterClassified,
            aNav: aNav
          });
        })
      }
      this.setData({
        oCitiesAfterClassified: oCitiesAfterClassified,
        aNav: aNav
      });
    } catch (e) {
      console.log(e)
    }
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

  /**
   * 用户点击侧边栏
   */
  bindSideNavTap: function(e){
    var targetId = e.currentTarget.dataset.target;
    this.setData({
      sViewId:targetId
    })
  },

  /**
   * 用户点击城市名后
   */
  bindCityTap: function(e){
    var sSelected = e.currentTarget.dataset.selected;
    broadcast.fire('selectedCityEvent',sSelected);
    wx.navigateBack({
      delta: 1,
    })
  }
})