import {Dashboard} from "../../pageObjects/uiObjects/dasboard";
import {ToolTips} from "../../pageObjects/uiObjects/toolTips";


const dashboard = new Dashboard();
const tools = new ToolTips();


describe('Check tool tip feature is working good', function () {

    it('TC05 - Verify the tool tip', function () {
        dashboard.visit()
        dashboard.navigateToDesiredCard("Widgets", 3)
        cy.log("user landed on Widgets page")

        dashboard.loadSideNavItem("Tool Tips", 6, 4)
        cy.log("Click on Tool Tips from side nav")

        tools.verifyHoverOnToolTipButton("You hovered over the Button")
        cy.log('hover to tooltip and Verify that tool tip “You hover over the button” is appeared')

    });

});
