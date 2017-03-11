import {TitleBar} from '../UI/title-bar.js';

export class ApplicationBase{

    constructor(title)
    {
        this.title = title;
        this.titlebar = new TitleBar(this.title);
        this.routeMap = {};
        this.defaultRoute = null;
    }

    show(element){
        this.titlebar.appendToElement(element);

        this.titlebar.element.find('.mdl-navigation__link').click((event) => {
            let route = event.target.innerHTML;
            this.activateRoute(route.trim());
        });

        if(this.defaultRoute)
        {
            this.activateRoute(this.defaultRoute);
        }
    }

    addRoute(id, pageObject, defaultRoute = false)
    {
        this.titlebar.addLink(id, '');
        this.routeMap[id] = pageObject;
        if(defaultRoute)
        {
            this.defaultRoute = id;
        }
    }

    activateRoute(route)
    {
        let content = this.titlebar.element.find('.page-content');
        content.empty();

        this.routeMap[route].appendToElement(content);
    }
}