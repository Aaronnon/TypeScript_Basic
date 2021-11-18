interface IRadio {
    switchRadio(trigger: boolean): void
}
interface IBattery {
    checkBattrtyStatus(): void
}
interface RadioWithBattery extends IRadio {
    checkBattrtyStatus(): void

}

class Car implements IRadio {
    switchRadio(trigger: boolean) {

    }
}

class CellPhone implements RadioWithBattery {
    switchRadio(trigger: boolean) {

    }
    checkBattrtyStatus() {

    }
}