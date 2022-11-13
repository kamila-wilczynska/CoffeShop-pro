import Product from './components/product.js';
import { settings, classNames, select } from './settings.js';
import Home from './components/home.js';
import Contact from './components/contact.js';

const app = {

  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);


    const idFromHash = window.location.hash.replace('#/', '');
    console.log('idFromHash', idFromHash);

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    //Listenery do podstron	
    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePagee(id);

        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function(id) {
    for(const page of document.querySelectorAll(select.containerOf.pages)){
      page.classList.remove(classNames.active);
    }
    document.querySelector('#' + id).classList.add(classNames.active);
    window.location.hash = `#/${id}`;
  },
 
  initHome: function () {
    const thisApp = this;
    const homeWidget = document.querySelector(select.containerOf.home);
    thisApp.home = new Home(homeWidget);
  },

 


  initMenu: function () {
    const thisApp = this;

    for (let productData in thisApp.data.products) {
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },

  initContact: function(){
    const thisApp = this;
    const contactSub = document.querySelector(select.containerOf.contact);
    thisApp.contact = new Contact(contactSub);
  },

  initProduct: function(){
    const thisApp = this;
    const productWid = document.querySelector(select.containerOf.products);
    thisApp.product = new Product(productWid);
  },
  initData: function () {
    const thisApp = this;

    thisApp.data = {};

    const url = settings.db.url + '/' + settings.db.products;

    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        thisApp.data.products = parsedResponse;
        thisApp.initMenu();

      });
  },

  init: function () {
    const thisApp = this;
    //console.log('*** App starting ***');
    //console.log('thisApp:', thisApp);
    //console.log('classNames:', classNames);
    //console.log('settings:', settings);
    //console.log('templates:', templates);
    thisApp.initPages();
    thisApp.initHome();
    thisApp.initData();
    thisApp.initContact();
    thisApp.initProduct();
    
    

  },
};

app.init();


