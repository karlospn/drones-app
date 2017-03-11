import $ from 'jquery';
import {fleetSeeder} from './Services/fleet-data-seeder.js';
import {FleetDataService} from './Services/fleet-data-service.js';
import {TitleBar} from './UI/title-bar.js';
import {Table} from './UI/table.js';
import {GoogleMap} from './UI/google-map.js';

//LOAD DATA FROM SERVICE
let service = new FleetDataService();
service.loadData(fleetSeeder);

//CREATE TITLEBAR
// let tb = new TitleBar('Drones');
// tb.addLink('Home','');
// tb.addLink('Cars','');
// tb.addLink('Drones','');
// tb.addLink('Map','');
// tb.appendToElement($('#title-bar'));

//CREATE TABLE AND POPULATE WITH DATA
// let headers = ['license', 'model', 'latLong', 'miles', 'make'];
 let data = service.cars;
// let table = new Table(headers, data);
// table.appendToElement($('#table'));

let centerMap = { lat: 43.779233, lng: -73.3329};
let map = new GoogleMap(centerMap, data)
map.appendToElement($('body'));
