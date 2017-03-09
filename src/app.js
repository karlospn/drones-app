import {Drone} from './Models/drone.js';
import {Car} from './Models/car.js';
import {Error} from './Models/error.js';
import {fleetSeeder} from './Services/fleet-data-seeder.js';
import {FleetDataService} from './Services/fleet-data-service.js';

console.log("module");
let service = new FleetDataService();
service.loadData(fleetSeeder);

for(let car of service.cars){
    console.log(car.license);
}

for(let error of service.errors){
    console.log(error.message);
}

var licenseCar = service.getCarByLicense('AT9900');
console.log("License: " + licenseCar.license);

var sortedCars = service.getsCarsSortedByLicense();
console.log('Sorted cars');
for(let sortedCar of sortedCars){
    console.log(sortedCar.license);
}

var filteredCars = service.filterCarsByMake('Tesla');
console.log('Filtered cars');
for(let filteredCar of filteredCars){
    console.log(filteredCar.license);
}