import {BaseElement} from './base-element.js';

export class Table extends BaseElement {

    constructor(headers, data)
    {
        super();
        this.headers = headers;
        this.data = data;
       
    }

    appendHeaders()
    {
        let headers = '';
        for(let header of this.headers){
            headers += `<th class="mdl-data-table__cell--non-numeric">${header}</th>`;
        }
        return headers;
    }

    appendBody()
    {
        let body = '';
        for(let data of this.data){
            body += `<tr>`;
            body += `<td>${data.license}</td>`;
            body += `<td>${data.model}</td>`;
            body += `<td>${data.latLong}</td>`;
            body += `<td>${data.miles}</td>`;
            body += `<td>${data.make}</td>`;
            body += `</tr>`;
        }
        return body;
    }


    getElementString(){

        let header = this.appendHeaders();
        let body = this.appendBody();
        return `
        <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
            <thead>
                <tr>
                 ${header}
                </tr>
            </thead>
            <tbody>
                ${body};
            </tbody>
        </table>
        `;
    }

    enableJS(){
        componentHandler.upgradeElement(this.element[1]);
    }

}