class uberX extends car {
    String brand;
    String model;

    public uberX(String license, account driver, String brand, String model) {
        super(license, driver);
        this.brand = brand;
        this.model = model;
    }

    @Override
    void printDataCar() {
        // TODO Auto-generated method stub
        super.printDataCar(); // respeta el procedimiento del clase padre
        System.out.println("Hola Mundo");
    }
}