import $ from 'jquery';

export class BaseElement{

    constructor(){
        this.element = null;
    }

    appendToElement(el){
        this.createElement();
        el.append(this.element);
        this.enableJS();
    }

    createElement(){
        let s = this.getElementString();
        this.element = $(s);
    }

    getElementString(){
        throw 'Must override this method';
    }
    
    enableJS(){
        componentHandler.upgradeElement(this.element[0]);
    }

}