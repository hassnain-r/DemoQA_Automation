import {CreateUser} from "../../pageObjects/apiObjects/createUser";
import {AddBook} from "../../pageObjects/apiObjects/addBook";
import {RemoveBook} from "../../pageObjects/apiObjects/removeBook";


describe('APIs for User Creation, Book Addition and Removal', function () {
    let user = new CreateUser();
    const createUserKeyword = 'Account/v1/User'
    const authKeyword = 'Account/v1/GenerateToken'
    const createUserJson = "userCreation.json"

    let book = new AddBook();
    const addBookKeyword = 'BookStore/v1/Books'
    const addBooksJson = "addBooks.json"

    const removeBook = new RemoveBook()
    const removeBookKeyword = 'BookStore/v1/Book'
    const removeBookJson = "removeBook.json"



    it('create user with unique username and valid password', function () {
        user.validateUserCreation(createUserKeyword, createUserJson)
        cy.log("verify status code to be 201," +
            " user got created with some valid userID and books key exist with value to be empty")

    });

    it('generate auth token from already created user', function () {
        user.saveAuthToken(authKeyword, createUserJson)
        cy.log("verify status code to be 200")
        cy.log("status key exist with value to be success")
        cy.log("save the auth token for further usage")

    });

    it('verify user is not getting created with wrong password schema', function () {
        user.validateUserCreationWithInvalidPassword(createUserKeyword, createUserJson)
        cy.log("verify status code to be 400, code key exist" +
            " and message key contains value 'Passwords must have at least'")

    });

    it('verify user is able to add book with valid user id and isbn number', function () {
        book.bookMustGetAddedWithValidUserId(addBookKeyword, addBooksJson)
        cy.log("verify status code to be 201, code key exist" +
            " and message key contains value 'User Id not correct!'")
    });

    it('verify user is not able to add book with invalid user id', function () {
        book.bookMustNotGetAddedWithInvalidUserId(addBookKeyword, addBooksJson)
        cy.log("verify status code to be 400, code key exist" +
            " and message key contains value 'User Id not correct!'")
    });

    it('Remove one of the added books', function () {
        removeBook.removeOneOfTheAddedBook(removeBookKeyword, removeBookJson)
        cy.log("status code to be 204")

    });

    it('try to Remove one of the added book with invalid isbn number', function () {
        removeBook.removeOneOfTheAddedBookUsingInvalidISBNNumber(removeBookKeyword, removeBookJson)
        cy.log("status code to be 400")
        cy.log("message key exist with value to be ISBN supplied is not available in User's Collection!")

    });

});