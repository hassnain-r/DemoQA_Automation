# DemoQA UI + API Automation


## Installations

- Clone repo
- Open New Terminal
- Go to project directory
- Execute following command to install project dependencies
-     npm install


- Execute following command to open cypress dashboard

      npx cypress open
###

- you can click test case on dashboard it will start executing

#

- Execute following command to run all API Test cases as headless also it will generate a html report as well and the videos

      npm run run_api_test_cases
- 
- Execute following command to run all UI Test cases as headless also it will generate a html report as well and the videos

      npm run run_ui_test_cases

- After running the above command we will get 2 new folders videos and reports


## basic Setup for reporting

- Execute following command to install reporting dependencies

    - npm install mocha
    - npm install mochawesome
    - npm install mochawesome-merge
    - npm install mochawesome-report-generator

Note: For now I am not adding cypress.env.json to .gitignore, but we can do that

- if devs want to run test cases at their end change below command

      cypress run --spec cypress/e2e/ --env baseUrl=https://demoqa.com/ --browser chrome
    
    - spec will be the file having certain test cases we will execute only the test cases that ara available in that
    - DASHBOARD_URL is basically the instance url 
    - browser we can select any browser