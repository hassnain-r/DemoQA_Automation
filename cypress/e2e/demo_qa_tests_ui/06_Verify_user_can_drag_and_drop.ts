import {Dashboard} from "../../pageObjects/uiObjects/dasboard";
import {Droppable} from "../../pageObjects/uiObjects/droppable";


const dashboard = new Dashboard();
const drag = new Droppable();


describe('Check for drag and drop feature', function () {

    it('TC06 - Verify user can drag and drop an object successfully', function () {
        dashboard.visit()
        dashboard.navigateToDesiredCard("Interaction", 4)
        cy.log("user landed on Interactions page")

        dashboard.loadSideNavItem("Droppable", 3, 5)
        cy.log("Click on Droppable Item from side nav")
        drag.dragAndDropObject()
        cy.log("drag and drop is happening for the user")
    });

});
