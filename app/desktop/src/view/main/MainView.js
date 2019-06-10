Ext.define('ModernTunes.view.main.MainView', {
  extend: 'Ext.tab.Panel',
  xtype: 'mainview',
  controller: 'mainviewcontroller',
  tabBarPosition: 'bottom',
  viewModel: {
    type: 'mainviewmodel'
  },
  items: [
    {
    title: "Thumbnails",
    html: '<h1>tunes view</h1'
    }, 
    {
    title: "Grid",
    html: '<h1>tunes grid</h1>'
    }
  ]
})
