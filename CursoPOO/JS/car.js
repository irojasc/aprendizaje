class car{
    constructor(license, driver){
        this.driver;
        this.license = license; 
        this.driver = driver;
        this.passenger;
    }

    printDataCar(){
        console.log(this.license, this.driver);
    }
}
