import {CommonMethods} from "./commonMethods";

const addButton = '#addNewRecordButton'
const inputFields = '#userForm input'
const editButton = '[title="Edit"]'
const firstNameFromSecondRow = '[role="rowgroup"]:nth-child(2) .rt-td:nth-child(1)'
const lastNameFromSecondRow = '[role="rowgroup"]:nth-child(2) .rt-td:nth-child(2)'
const secondRowParent = 'div[role="row"]'


export class Tables extends CommonMethods {

    loadAddNewRecord(){
        return this.getElementAndClick(addButton)
    }

    registerForm(fields:any){
        this.fillEachField(inputFields, fields)
        return this.hitSubmit()
    }

    registerAndVerifyRowsCount(fields:any){
        let numRows = 0
        cy.get(editButton).its('length').then(len => {
            numRows = len
                this.registerForm(fields)
                return cy.get(editButton).its('length').should('eq', numRows + 1)
        }
        )
    }

    matchFirstName(name:string="Alden"){
        return this.elementContainsSpecificText(firstNameFromSecondRow, name)
    }

    matchLastName(name:string){
        return this.elementContainsSpecificText(lastNameFromSecondRow, name)
    }

    edit2ndRow(){
        this.matchFirstName().parents(secondRowParent)
            .find(editButton)
            .click()
    }

}