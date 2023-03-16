import java.util.ArrayList;
import java.util.Map;

public class uberBlack extends car {
    Map<String, Map<String, Integer>> typeCarAccepted;
    ArrayList<String> seatsMaterial;

    public uberBlack(String license, account driver) {
        super(license, driver);
        this.typeCarAccepted = typeCarAccepted;
        this.seatsMaterial = seatsMaterial;
    }
}
