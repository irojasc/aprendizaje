// from car import car
public class main {
    public static void main(String[] args) {
        uberX objUberX = new uberX("AMQ123", new account("Andres Herrera", "AND123"),
                "Chevrolet", "Sonic");
        objUberX.setPassenger(4);

        
        uberVan objuberVan = new uberVan("FGH123", new account("Andres Herrera", "AND123"));
        uberVan.setPassenger(6)
    }
}