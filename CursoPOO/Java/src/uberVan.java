import java.util.ArrayList;
import java.util.Map;

public class uberVan extends car {
    Map<String, Map<String, Integer>> typeCarAccepted;
    ArrayList<String> seatsMaterial;
    private Integer passenger;

    public uberVan(String license, account driver, Map<String, Map<String, Integer>> typeCarAccepted,
            ArrayList<String> seatsMaterial) {
        super(license, driver);
        this.typeCarAccepted = typeCarAccepted;
        this.seatsMaterial = seatsMaterial;
    }

    @Override
    public void setPassenger(Integer passenger) {
        // TODO Auto-generated method stub
        // super.setPassenger(passenger); //esto se borra para cambiar
        if (passenger >= 6) { // evalua passenger mayor igual que 6
            this.passenger = passenger;
        }
    }
}
