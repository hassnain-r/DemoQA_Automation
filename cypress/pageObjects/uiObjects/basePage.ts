
export class BasePage {
  visit(url: string=Cypress.env('baseUrl')) {
    cy.visit(url);
  }

  urlIncludesText(text: string ) {
    return cy.url().should('include', text);
  }

  getInputFieldAndTypeValue(inputFieldElem: any, value: string) {
    return cy.get(inputFieldElem).clear().type(value);
  }

  getElementAndClick(selector: any) {
    return cy.get(selector).click({ force: true });
  }

  elementContainsSpecificText(selector: any, text: string) {
    return cy.get(selector).should('contain.text', text);
  }

  verifyElementExistAndIsVisible(selector: any) {
    return cy.get(selector).should('exist').should('be.visible');
  }

  loadElementBasedOnIndexAndText(selector: any, index: number, text:any, time:number=15000) {
    return cy.get(selector, {timeout:time}).eq(index).should('contain.text', text).click();
  }

  getPreviousElement(selector:any, selector2:any){
    return cy.get(selector).first().prev(selector2)
  }

  clickElementAndVerifyItIsChecked(selector:any){
    return this.getElementAndClick(selector).should('be.checked')
  }

  typeAndSelectFirstValueFromDropdown(selector:any, keyword:string, dropdownSelector:any){
    return cy.get(selector).type(keyword).find(dropdownSelector).should('contain.text', keyword).click()

  }

  fillEachField(selector:any, text:any){
    cy.get(selector).each(($input, index) => {
      cy.wrap($input).clear().type(text[index])
    })
  }


}
