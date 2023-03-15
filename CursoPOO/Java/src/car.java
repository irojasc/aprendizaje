class car {
    Integer id;
    String license;
    account driver;
    Integer passenger;

    public car(String license, account driver) {
        this.license = license;
        this.driver = driver;
    }

    void printDataCar() {
        System.out.print(this.license);
    }
}