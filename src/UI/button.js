import {BaseElement} from './base-element.js';

export class Button extends BaseElement {

    constructor(title)
    {
        super();
        this.title = title;
        this.style = null;
    }

    getElementString(){
        return `
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" style="${this.style}">
            ${this.title}
        </button>`;
    }

    setStyleString(style)
    {
        this.style = style;
    }

}