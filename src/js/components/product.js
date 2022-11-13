

import {  templates } from '../settings.js';



class Product {
  constructor(element){
    const thisProducts = this;

    thisProducts.render(element);
  }
  
  render(element){
    const thisProducts = this;
    

    const generatedHTML = document.querySelector(templates.products).innerHTML;
    thisProducts.dom = {};
    thisProducts.dom.wrapper = element;
    thisProducts.dom.wrapper.innerHTML = generatedHTML;

    
   

    
  }
}


export default Product;


  