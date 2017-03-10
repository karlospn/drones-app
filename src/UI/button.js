import {BaseElement} from './base-element.js';

export class Button extends BaseElement {

    constructor(title)
    {
        super();
        this.title = title;
    }

    getElementString(){
        return `<button>boton</button>`;
    }

}