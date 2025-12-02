/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
    this.lotSize = new Map();

    this.lotSize.set(1, big);
    this.lotSize.set(2, medium);
    this.lotSize.set(3, small);
};

/**
 * @param {number} carType 1, 2, and 3 (big, medium, small)
 * @return {boolean} false if cannot park, true if succesfully parked
 */
ParkingSystem.prototype.addCar = function (carType) {
    if (!this.lotSize.has(carType) || this.lotSize.get(carType) <= 0) {
        return false;
    }
    else {
        this.lotSize.set(carType, this.lotSize.get(carType) - 1)
        return true;
    }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */