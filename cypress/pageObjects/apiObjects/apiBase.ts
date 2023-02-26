
interface ApiOptions {
    failOnStatusCode?: boolean;
}

export class BaseApi {
    baseUrl(keyword: string ) {
        return `${Cypress.env('baseUrl')}${keyword}`;
    }

    submitApiRequest(
        url: string,
        body: any,
        headers: object,
        method: string = 'POST',
        options: ApiOptions = {},
    ) {
        return cy.request({
            method: method,
            url: url,
            body: body,
            headers: headers,
            failOnStatusCode: options.failOnStatusCode,
        });
    }

    generateUsername() {
        const suffix = Math.random().toString(36).substring(2, 8);
        return `user${suffix}`;
    }


    bearerToken() {
        return { Authorization: `Bearer ${Cypress.env("authToken")}`};
    }


    checkStatusCode(response: any, value: number = 200) {
        return expect(response.status).to.eq(value);
    }

    verifyKeysExist(response: any, key: any) {
        return expect(response[key]).to.not.be.null;
    }

    verifyValueMatched(response: any, key: any, value: any) {
        return expect(response[key]).to.equals(value);
    }

    compareObjects(response: any, key: any, value: any) {
        return expect(response[key]).to.deep.equal(value);
    }


    verifyValueContainsSomeText(response: any, key: any, subValue: any) {
        return expect(response[key]).to.include(subValue);
    }

}
