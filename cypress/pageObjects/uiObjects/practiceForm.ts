import {CommonMethods} from "./commonMethods";

const emailID  = '#userEmail'
const mobileNumber  = '#userNumber'
const birthDate  = '#dateOfBirthInput'
const subjectField = '#subjectsContainer'
const readingCheckBox = '#hobbies-checkbox-2'
const currentAddress = '#currentAddress'
const uploadPicture = '#uploadPicture'
const stateField = "#state"
const cityField = "#city"
const stateFirstOption = '#react-select-3-option-0'
const cityFirstOption = '#react-select-4-option-0'
const formSuccessPage = 'div.modal-title'


export class PracticeForm extends CommonMethods {

    selectGender(value:string){
        let selector = `[value="${value}"]`
        return this.clickElementAndVerifyItIsChecked(selector)
    }

    selectReadingAsHobby(){
        return this.clickElementAndVerifyItIsChecked(readingCheckBox)
    }

    uploadImage(){
        cy.fixture('sample.jpeg').then(fileContent => {
            // @ts-ignore
            cy.get(uploadPicture).attachFile({
                fileContent: fileContent,
                fileName: 'sample.jpeg',
                mimeType: 'jpeg'
            });
        });

    }

    selectMonthOrYear(monthOrYear:string, index:number){
        let selector = `.react-datepicker__${monthOrYear}-select option[value="${index}"]`
        return this.getElementAndClick(selector)

    }

    selectDay(dayValue:number){
        let day = `.react-datepicker__day--0${dayValue}`
        return this.getElementAndClick(day)

    }


    selectDateOfBirth(month:number, year:number, day:number){
        this.getElementAndClick(birthDate)
        this.selectMonthOrYear("month", month)
        this.selectMonthOrYear("year", year)
        this.selectDay(day)
    }

    selectStateAndCity(state:string, city:string){
        this.typeAndSelectFirstValueFromDropdown(stateField, state, stateFirstOption)
        return this.typeAndSelectFirstValueFromDropdown(cityField, city, cityFirstOption)

    }

    fillStudentForm(email:string, gender:string, mobile:string, subject:string, address:string){
        this.getInputFieldAndTypeValue(emailID, email)
        this.selectGender(gender)
        this.getInputFieldAndTypeValue(mobileNumber, mobile)
        this.selectDateOfBirth(1, 1990, 25)
        this.selectReadingAsHobby()
        this.getInputFieldAndTypeValue(currentAddress, address)
        this.uploadImage()
        this.getElementAndClick(subjectField).type(subject)
    }

    verifyFormIsSubmittedSuccessfully(message:string){
        this.elementContainsSpecificText(formSuccessPage, message)
    }

}