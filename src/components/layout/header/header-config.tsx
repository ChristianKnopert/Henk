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
      title: 'Basics', 
      href: '/basics',
      subItems: [
        {title: 'Types', href:'/types'},
        {title: 'Types (example)', href:'/types/example'},
      ]
    },
    {
      title: 'Components', 
      href: '/components',
      subItems: [
        {title: 'AlertDialog', href:'/alert-dialog'},
        {title: 'DataTable', href:'/data-table'},
        {title: 'Select', href:'/select'},
        {title: 'Toast', href:'/toast'},
      ]
    },
  ]
}