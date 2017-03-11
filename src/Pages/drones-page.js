import {Page} from './page-base.js';
import {Table} from '../UI/table.js';
import {application} from '../app.js';

export class DronesPage extends Page{

    constructor(){
        super('Drones');
    }

    createElement(){
        super.createElement();
        let t = new Table(['license', 'model', 'airTimeHours', 'base'], application.service.drones);     
        t.appendToElement(this.element);
    }

    getElementString(){
        return `<div style="margin: 20px;"><h3>${this.title}</h3></div>`;
    }

}