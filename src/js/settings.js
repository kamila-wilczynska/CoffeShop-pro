export const select = {
  containerOf: {
    home: '.home-wrapper',
    pages: '#pages',
    contact: '#contact-wrapper',
    products: '#products-list',

  },
  template: {
    ProductTemplate: '#template-products-page',
    ContactTemplate: '#template-contact-page',
    PageTemplate: '#template-home-page',
    
  },
  nav: {
    links: '.main-nav ul a',
  },
};
export const settings = {
  db: {
    url: '//localhost:3131',
    products: 'products',
  },
};

export const classNames = {
  active: 'active',
};
export const templates = {
  home: Handlebars.compile(document.querySelector(select.template.PageTemplate).innerHTML),
  menuProduct: Handlebars.compile(document.querySelector(select.template.ProductTemplate).innerHTML),
  contact: Handlebars.compile(document.querySelector(select.template.ContactTemplate).innerHTML),
  products: Handlebars.compile(document.querySelector(select.containerOf.products).innerHTML),
  
};