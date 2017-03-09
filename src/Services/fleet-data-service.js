import {Drone} from '../Models/drone.js';
import {Car} from '../Models/car.js';
import {Error} from '../Models/error.js';

export class FleetDataService{

    constructor()
    {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }

    loadData(data){
        
        for(let item of data){
            switch(item.type){
                case 'car':
                    let car = this.loadCar(item);
                    this.cars.push(car);                 
                    break;
                case 'drone':
                    let drone = this.loadDrone(item);
                    this.drones.push(drone);
                    break;
                default:
                    this.errors.push(new Error('type not found', item));
                    break;
            }
        }
    }

    loadCar(car)  {
        try {
            let c = new Car(car.license, car.model, car.latLong, car.miles, car.make);
            return c;
        } catch (error) {
            this.errors.push(new Error('error creating car type', car));
        }
        return null;
    }

    loadDrone(drone){
        try {
            let d = new Drone(drone.license, drone.model, drone.latLong, drone.airTimeHours, drone.base);
            return d;   
        } catch (error) {
            this.errors.push(new Error('error creating drone type', drone));
        }
        return null;
    }

    getCarByLicense(license){
        return this.cars.find(function(car){
            return car.license === license;
        });
    }

    getsCarsSortedByLicense()
    {
        return this.cars.sort(function(car1, car2){
            if(car1.license  < car2.license) return -1;
            if(car1.license > car2.license) return 1;
            return 0;
        });
    }

    filterCarsByMake(make)
    {
        return this.cars.filter(car => car.make.indexOf(make) >= 0);
    }
}