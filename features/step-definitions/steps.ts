import { Given, When, Then } from '@wdio/cucumber-framework';
import ebayPage from '../pageobjects/ebay.page';
import replyPage from '../pageobjects/reply.page';



Given(/^enter Ebay page$/, async () => {
    await ebayPage.open();
});

When(/^search the article(.+)$/, async (articulo) => {
    await ebayPage.serchArticle(articulo);
   
});

When(/^click on the magnifying glass$/, async () => {
   await ebayPage.submit();
   
});

Then(/^search result$/, async () => {
  const element = await replyPage.serchResult();
  const resultado = await element.getText();
  expect(resultado).toBeExisting();

});