import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';


class EbayPage extends Page {
    
    public get searchInput () {
        return $('#kw');
    }

    public async serchArticle  (articulo: string) {
        await this.searchInput.clearValue();
        await this.searchInput.setValue(articulo);
     
        
    }
     public async submit  () {
       browser.keys('Enter');
       
     }
   
    public open () {
        return super.open();
    }

   
}

export default new EbayPage();
