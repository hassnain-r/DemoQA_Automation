import {Dashboard} from "../../pageObjects/uiObjects/dasboard";
import {ProgressBar} from "../../pageObjects/uiObjects/progressBar";


const dashboard = new Dashboard();
const bar = new ProgressBar();


describe('Verify progress bar feature is working good', function () {

    it('TC04 - Verify the progress bar', function () {
        dashboard.visit()
        dashboard.navigateToDesiredCard("Widgets", 3)
        cy.log("user landed on Widgets page")

        dashboard.loadSideNavItem("Progress Bar", 4, 4)
        cy.log("Click on Progress Bar from side nav")

        bar.hitStartButtonAndVerifyProgressBar()
        cy.log("the progress bar is showing 100 percent complete status")


    });

});
