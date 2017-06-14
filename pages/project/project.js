// project.js
var app = getApp();

var AV = app.getAVInstance();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    projects:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.data){
      var oProject = JSON.parse(decodeURI(options.data));
      this.setData({
        projects:oProject
      });
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
  bindNavToAddproTap: function(e){
    var index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../addpro/addpro?data='+encodeURI(JSON.stringify(this.data.projects[index])),
    })
  },
  /**
   * 添加新项目
   */
  bindAddTap: function(e){
    wx.navigateTo({
      url: '../addpro/addpro'
    })
  }
})