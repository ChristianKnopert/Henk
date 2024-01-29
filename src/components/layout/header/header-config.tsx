export const headerConfig = {
  menuItems: [
    {
      title: 'Home', 
      href: '/',
    },
    {
      title: 'Test', 
      href: '/test',
      subItems: [
        {title: 'Link 1', href:'#'},
        {title: 'Link 2', href:'#'},
      ]
    },
    {
      title: 'Components', 
      href: '/components',
      subItems: [
        {title: 'DataTable', href:'/data-table'},
        {title: 'Select', href:'/select'},
        {title: 'Toast', href:'/toast'},
      ]
    },
  ]
}