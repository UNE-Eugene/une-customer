module.exports = {
  pages: ['pages/index/index','pages/personal/personal'],
  window: {
    navigationBarTitleText: 'Remax Wechat Template',
    navigationBarBackgroundColor: '#282c34'
  },
  tabBar: {
    "backgroundColor": "#fff",
    "selectedColor": "blue",
    "color": "black",
    list: [{
      "text": "查询",
      "pagePath": "pages/index/index",
      "iconPath": "search.png",
      "selectedIconPath": "search.png"
    },
    {
      "text": "我的",
      "pagePath": "pages/personal/personal",
      "iconPath": "profile.png",
      "selectedIconPath": "profile.png"
    }]
  }
};
