import {Dashboard} from "../../pageObjects/uiObjects/dasboard";
import {Tables} from "../../pageObjects/uiObjects/tablesDetails";


const updatedFName = "Gerimedica"
const updatedLName = 'BV'
const dashboard = new Dashboard();
const table = new Tables()
const fields = ["Alden", "Cantrell","test@test.com",30, 12345, "QA"]


describe('Enter and Edit New Data into Table', function () {

    it('TC01-A Verify user can enter new data into the table', function () {
        dashboard.visit()
        dashboard.navigateToDesiredCard("Elements", 0)
        cy.log("user landed on Elements page")
        dashboard.loadSideNavItem("Web Tables", 3, 1)
        cy.log("Click on Web Tables")
        table.loadAddNewRecord()
        cy.log("Click on Add button")
        table.registerAndVerifyRowsCount(fields)
        cy.log("Enter fName, lName, Email, Age, Salary and Department fields and Hit submit")
    });

    it("TC01-B Verify user can edit the row in a table", ()=>{
        table.edit2ndRow()
        cy.log("user clicked on edit icon in the second row of the table that contains firstname Alden")
        table.editNames(updatedFName, updatedLName)
        table.hitSubmit()
        cy.log(`Edit the First Name to ${updatedFName} and Last Name to ${updatedLName} and Hit save.`)
        table.matchFirstName(updatedFName)
        table.matchLastName(updatedLName)
        cy.log("2nd Row is successfully edited with provided data")

    })
});
