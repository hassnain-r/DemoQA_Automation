import {BasePage} from "./basePage";

const fName = '#firstName'
const lName = '#lastName'
const submitButton = '#submit'
const closeButton = '#closeLargeModal'

export class CommonMethods extends BasePage {

    editNames(first:string, last:string){
        this.getInputFieldAndTypeValue(fName, first)
        this.getInputFieldAndTypeValue(lName, last)
    }

    hitSubmit(){
        return this.getElementAndClick(submitButton)
    }

    hitCloseButton(name:string){
        this.elementContainsSpecificText(closeButton, name).click()
    }

}