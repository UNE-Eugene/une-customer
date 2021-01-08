module.exports = {
  pages: ['pages/index/index','pages/personal/personal', "pages/login/login"],
  window: {
    navigationBarTitleText: '酒店客服系统',
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
      "selectedIconPath": "search_filled.png"
    },
    {
      "text": "我的",
      "pagePath": "pages/personal/personal",
      "iconPath": "people.png",
      "selectedIconPath": "people_fill.png"
    }]
  }
};
