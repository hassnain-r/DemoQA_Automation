import {BaseApi} from "./apiBase";



export class RemoveBook extends BaseApi {


    removeOneOfTheAddedBook(keyword: string, jsonValue: any) {
        cy.fixture(jsonValue).then((finalJson) => {
            finalJson['userId'] = Cypress.env("userID");
            this.submitApiRequest(
                this.baseUrl(keyword),
                finalJson,
                this.bearerToken(),
                "DELETE"
            ).then((response) => {
                this.checkStatusCode(response, 204);
            });
        });
    }

    removeOneOfTheAddedBookUsingInvalidISBNNumber(keyword: string, jsonValue: any) {
        cy.fixture(jsonValue).then((finalJson) => {
            finalJson['userId'] = Cypress.env("userID");
            finalJson['isbn'] = "00000";
            this.submitApiRequest(
                this.baseUrl(keyword),
                finalJson,
                this.bearerToken(),
                "DELETE",
                { failOnStatusCode: false },
            ).then((response) => {
                let responseBody = response.body;
                this.checkStatusCode(response, 400);
                this.verifyValueContainsSomeText(responseBody, "message", "ISBN supplied is not available in User's Collection!")

            });
        });
    }
}