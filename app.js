var config = require('./config.js');
const AV = require('./utils/av-weapp-min.js');

AV.init({
  appId: config['X-LC-Id'],
  appKey: config['X-LC-Key']
})

App({
  onLaunch: function () {
  },
  onShow: function () {
    var _this = this;
    AV.Promise.resolve(AV.User.current()).then(user => user ? user : AV.User.loginWithWeapp())
      .then(user => {
        wx.getUserInfo({
          success: ({userInfo}) => {
            user.set(userInfo).save().then(data => {
              Object.assign(_this.globalData, user.toJSON());
            })
          }
        });
        wx.getSystemInfo({
          success: function({sysInfo}) {
            Object.assign(_this.globalData, sysInfo);
          }
        })
      })
  },
  onHide: function () {
    console.log('App Hide')
  },
  getAVInstance: function () {
    return AV;
  },
  globalData: {
  }
});