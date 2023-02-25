import {BaseApi} from "./apiBase";


export class AddBook extends BaseApi {

    bookMustNotGetAddedWithInvalidUserId(keyword: string, jsonValue: any) {
        cy.fixture(jsonValue).then((finalJson) => {
            this.submitApiRequest(
                this.baseUrl(keyword),
                finalJson,
                this.bearerToken(),
                "POST",
                { failOnStatusCode: false },
            ).then((response) => {
                let responseBody = response.body;
                this.checkStatusCode(response, 401);
                this.verifyValueContainsSomeText(responseBody, "message", "User Id not correct!")
            });
        });
    }

    bookMustGetAddedWithValidUserId(keyword: string, jsonValue: any) {
        cy.fixture(jsonValue).then((finalJson) => {
            cy.log(Cypress.env("userID"), "///////////////////////////////////////////");
            finalJson['userId'] = Cypress.env("userID");
            this.submitApiRequest(
                this.baseUrl(keyword),
                finalJson,
                this.bearerToken(),
            ).then((response) => {
                let responseBody = response.body;
                this.checkStatusCode(response, 201);
                return expect(responseBody["books"][0]["isbn"]).to.include(finalJson["collectionOfIsbns"][0]["isbn"])

            });
        });
    }


}