export interface Car {
    wheels: number;
    weight: number;
    maxSpeed: number;
    name: string;
    manufacturer: string;
    driver: Driver;
}

export interface Driver {
    name: string;
    age: number;
}
