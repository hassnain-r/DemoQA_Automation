import {Dashboard} from "../../pageObjects/uiObjects/dasboard";
import {PracticeForm} from "../../pageObjects/uiObjects/practiceForm";

const dashboard = new Dashboard();
const form = new PracticeForm();


describe('submit the registration form and verify the response', function () {

    it('TC04 - Verify user can submit the form successfully', function () {
        cy.fixture('studentDetails.json').then((data) => {
            dashboard.visit()
            dashboard.navigateToDesiredCard("Forms", 1)
            cy.log("user landed on Forms page")

            dashboard.loadSideNavItem("Practice Form", 0, 2)
            cy.log("Click on Practice Form from side nav")

            form.editNames(data.FName, data.LName)
            cy.log("pass first and last name")

            form.fillStudentForm(
                data.Email, data.Gender, data.Mobile, data.Subjects, data.CurrentAddress
            )
            cy.log("pass gender, birthdate, phone number, email, address and subject value")
            form.selectStateAndCity(data.State, data.City)
            cy.log("select state and city using dropdown flow")
            form.hitSubmit()
            form.verifyFormIsSubmittedSuccessfully("Thanks for submitting the form")
            cy.log("Form is submitted successfully with provided data")
            form.hitCloseButton("Close")
            cy.log("close the window")
    })
    });

});
