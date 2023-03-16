class car {
    private Integer id;
    private String license;
    private account driver;
    private Integer passenger; // cuando no tiene nada, toma el default
    // private passenger; // cuando no tiene nada, toma el default

    public car(String license, account driver) {
        this.license = license;
        this.driver = driver;
        System.out.print("passenger" + this.passenger);
    }

    void printDataCar() {
        System.out.print(this.license + this.passenger);
    }

    public Integer getPassenger() {
        return passenger;
    }

    public void setPassenger(Integer passenger) {
        if (passenger >= 4) { // esto evalua que el valor de pasajeros sea mayor a 4
            this.passenger = passenger;
        }
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    public account getDriver() {
        return driver;
    }

    public void setDriver(account driver) {
        this.driver = driver;
    }

}