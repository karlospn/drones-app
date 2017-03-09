import { Vehicle } from './vehicle.js';

class Drone extends Vehicle {
    constructor(license, model, latLong, airTimeHours, base)
    {
        super(license, model, latLong);
        this.airTimeHours = airTimeHours;
        this.base = base;

    }
}

export { Drone };