import {BaseApi} from "./apiBase";


export class CreateUser extends BaseApi {

    saveAuthToken(keyword: string, jsonValue: any) {
        cy.fixture(jsonValue).then((finalJson) => {
            finalJson['userName'] = Cypress.env("username")
            this.submitApiRequest(
                this.baseUrl(keyword),
                finalJson,
                {},
            ).then((response) => {
                let responseBody = response.body;
                Cypress.env('authToken', responseBody['token']);
                this.checkStatusCode(response);
                this.verifyValueMatched(responseBody, "status", 'Success');

            });
        });
    }


    validateUserCreation(keyword: string, jsonValue: any) {
        cy.fixture(jsonValue).then((finalJson) => {
            let userName = this.generateUsername();
            finalJson['userName'] = userName
            Cypress.env('username', userName)
            this.submitApiRequest(
                this.baseUrl(keyword),
                finalJson,
                {},
            ).then((response) => {
                let responseBody = response.body;
                this.checkStatusCode(response, 201);
                this.verifyValueMatched(responseBody, "username", finalJson["userName"]);
                this.compareObjects(responseBody, "books", [])
                this.verifyKeysExist(responseBody, 'userID');
                Cypress.env('userID', responseBody['userID']);
            });
        });
    }

    validateUserCreationWithInvalidPassword(keyword: string, jsonValue: any) {
        cy.fixture(jsonValue).then((finalJson) => {
            finalJson['password'] = "wrong";
            this.submitApiRequest(
                this.baseUrl(keyword),
                finalJson,
                {},
                "POST",
                { failOnStatusCode: false },
            ).then((response) => {
                let responseBody = response.body;
                this.checkStatusCode(response, 400);
                this.verifyKeysExist(responseBody, 'code');
                this.verifyValueContainsSomeText(responseBody, "message", "Passwords must have at least")
            });
        });
    }


}
