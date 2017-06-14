// work.js
var app = getApp();
var AV = app.getAVInstance();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    works:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.data) {
      var oWork = JSON.parse(decodeURI(options.data));
      console.log(oWork);
      this.setData({works:oWork});
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
 * 点击公司名称跳转，并传输必要数据
 */
  bindNavToAddWorkTap: function (e) {
    var index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../addwork/addwork?data=' + encodeURI(JSON.stringify(this.data.works[index])),
    })
  },
  /**
   * 用户点击添加
   */
  bindAddTap: function () {
    wx.navigateTo({
      url: '../addwork/addwork'
    })
  }
})