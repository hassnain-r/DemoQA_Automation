import {BasePage} from "./basePage";

const availableCards = '.card-body h5'
const brokenImageUrl = 'img[src$="1.jpg"]'
const brokenImageText = 'p'

export class Dashboard extends BasePage {

    sideNavItemSelector(item:number, childIndex:number){
        return `.accordion :nth-child(${childIndex}).element-group #item-${item} .text`
    }

    navigateToDesiredCard(cardName:string, index:number){
        this.loadElementBasedOnIndexAndText(availableCards, index, cardName)
        return this.urlIncludesText(cardName.toLowerCase())
    }

    loadSideNavItem(sideNavItemValue:string, itemIndex:number, childIndex:number){
        return this.elementContainsSpecificText(this.sideNavItemSelector(itemIndex, childIndex), sideNavItemValue).click()
    }

    verifyBrokenImage(broken:string){
        return this.getPreviousElement(brokenImageUrl, brokenImageText).should('have.text', broken)
    }


}