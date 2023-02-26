import {Dashboard} from "../../pageObjects/uiObjects/dasboard";

const dashboard = new Dashboard();


describe('Check broken image feature', function () {

    it('TC03 - Verify broken image', function () {
        dashboard.visit()
        dashboard.navigateToDesiredCard("Elements", 0)
        cy.log("user landed on Elements page")
        dashboard.loadSideNavItem("Broken Links - Images", 6, 1)
        cy.log("Click on Broken Links - Images from side nav")
        dashboard.verifyBrokenImage("Broken image")
        cy.log("first image is broken")
    });

});
