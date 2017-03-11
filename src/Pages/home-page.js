import {Page} from './page-base.js';
import {Button} from '../UI/button.js';
import {Image} from '../UI/image.js';
import {application} from '../app.js';

export class HomePage extends Page{

    constructor(){
        super('Home');
    }

    createElement(){
        super.createElement();

        let i = new Image('../src/UI/images/drone.jpg');
        i.appendToElement(this.element);

        let b = new Button('Self Driving Cars');
        b.setStyleString('width: 300px; height: 80px;')
        b.appendToElement(this.element);
        b.element.click(() => application.activateRoute('Cars'));

        b = new Button('Drones');
        b.setStyleString('width: 300px; height: 80px;')
        b.appendToElement(this.element);
        b.element.click(() => application.activateRoute('Drones'));

    }

    getElementString(){
        return `<div style="text-align:center;"></div>`;
    }

}