import {BasePage} from "./basePage";

const toolTipButton = '#toolTipButton'
const hoveredText = '.tooltip-inner'

export class ToolTips extends BasePage {

    verifyHoverOnToolTipButton(text:string){
        const button = cy.get(toolTipButton);
        button.trigger('mouseover');
        return this.elementContainsSpecificText(hoveredText, text)

    }
}