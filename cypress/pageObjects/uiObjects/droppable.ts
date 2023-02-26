import {BasePage} from "./basePage";

const dragMeObj = '#draggable'
const dropHere = '#simpleDropContainer #droppable'
const highlightedBlock = '#droppable.ui-state-highlight'

export class Droppable extends BasePage {

    dragAndDropObject() {
        cy.get(dragMeObj).drag(dropHere)
        return this.verifyElementExistAndIsVisible(highlightedBlock)
    }
}