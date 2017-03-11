import $ from 'jquery';
import {fleetSeeder} from './Services/fleet-data-seeder.js';
import {FleetDataService} from './Services/fleet-data-service.js';
import {ApplicationBase} from './Pages/app-base.js';
import {HomePage} from './Pages/home-page.js';
import {CarsPage} from './Pages/cars-page.js';
import {DronesPage} from './Pages/drones-page.js';
import {GoogleMapPage} from './Pages/google-map-page.js';

export class App extends ApplicationBase{

    constructor()
    {
        super('Fleet Manager');
        this.service = new FleetDataService();
        this.service.loadData(fleetSeeder);

        this.addRoute('Home', new HomePage(), true);
        this.addRoute('Cars', new CarsPage());
        this.addRoute('Drones', new DronesPage());
        this.addRoute('Map', new GoogleMapPage());
    }
}

export var application = new App();
application.show($('body'));