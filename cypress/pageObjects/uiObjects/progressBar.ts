import {BasePage} from "./basePage";

const startButton = '#startStopButton'
const progressBar = '.progress-bar'

export class ProgressBar extends BasePage {

    hitStartButtonAndVerifyProgressBar(){
        this.getElementAndClick(startButton)
        const bar = cy.get(progressBar);
        return bar.should('have.attr', 'aria-valuenow', '100');
    }
}