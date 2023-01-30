import { ChainablePromiseElement } from 'webdriverio';
import Page from './page';


class ReplyPage extends Page {

public async serchResult () {
    const texto = $("//*[contains(text(),'+ results')]");
    const resultado = await (await texto).getText();
    console.log("ESTE ES EL RESULTADO ", resultado);
  return texto;
}

}
export default new ReplyPage();
