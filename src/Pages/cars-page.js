import {Page} from './page-base.js';
import {Table} from '../UI/table.js';
import {application} from '../app.js';

export class CarsPage extends Page{

    constructor(){
        super('Cars');
    }

    createElement(){
        super.createElement();
        let t = new Table(['license', 'model', 'miles', 'make'], application.service.cars);     
        t.appendToElement(this.element);
    }

    getElementString(){
        return `<div style="margin: 20px;"><h3>${this.title}</h3></div>`;
    }

}