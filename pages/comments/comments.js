// pages/comments/comments.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        coms:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var type = options.type;
      var id = options.id;
      var _this = this;
      var target;
      if (type == "show"){target = 1}
      else {target = 2}
      wx.request({
          url: 'http://localhost/GuDao/' + type + '/getCommentNReply',
          method: 'GET',
          data:{
            target : target,
            id : id
          },
          success: function (res) {
              console.log(res.data.data);
              _this.setData({
                  coms: res.data.data
              })
          }
      })
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
  
  }
})