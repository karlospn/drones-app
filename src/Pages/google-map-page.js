import {Page} from './page-base.js';
import {GoogleMap} from '../UI/google-map.js';
import {application} from '../app.js';

export class GoogleMapPage extends Page{

     constructor(){
        super('Google Map Page');
    }

    createElement(){
        
        super.createElement();
        let centerMap = { lat: 43.779233, lng: -73.3329};
        let map = new GoogleMap(centerMap, application.service.cars);
        map.appendToElement(this.element);
    }

    getElementString(){
        return `<div style="margin: 20px;"><h3>${this.title}</h3></div>`;
    }
}