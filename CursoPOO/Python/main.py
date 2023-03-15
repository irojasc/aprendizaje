from car import car
from account import account

if __name__ == "__main__":
    car = car("AMS234", account("Andres Herrera", "ANDA876"))
    print(vars(car))
    print(vars(car.driver))

