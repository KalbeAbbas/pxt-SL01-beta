enum SI1145_ADDR {
    //% block="0x60"
    ADDR_0x60 = 0x60
}

namespace SL01 {
    let SI1145_I2C_ADDR = SI1145_ADDR.ADDR_0x60

    function setreg(reg: number, dat: number): void {
        let buf = pins.createBuffer(2);
        buf[0] = reg;
        buf[1] = dat;
        pins.i2cWriteBuffer(SI1145_I2C_ADDR, buf);
    }

    function getreg(reg: number): number {
        pins.i2cWriteNumber(SI1145_I2C_ADDR, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(SI1145_I2C_ADDR, NumberFormat.UInt8BE);
    }

    function getInt8LE(reg: number): number {
        pins.i2cWriteNumber(SI1145_I2C_ADDR, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(SI1145_I2C_ADDR, NumberFormat.Int8LE);
    }

    function getUInt16LE(reg: number): number {
        pins.i2cWriteNumber(SI1145_I2C_ADDR, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(SI1145_I2C_ADDR, NumberFormat.UInt16LE);
    }

    function getInt16LE(reg: number): number {
        pins.i2cWriteNumber(SI1145_I2C_ADDR, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(SI1145_I2C_ADDR, NumberFormat.Int16LE);
    }

    /* calaulates Ultra Violet Index
    */
    //% block="readUVI"
    //% weight=74 blockGap=8
    export function readUVI(): number {
        return getUInt16LE(0x2C)
    }

    /* calaulates Ambient Light Intensity
    */
    //% block="readLight"
    //% weight=74 blockGap=8
    export function readLight(): number {
        return getUInt16LE(0x22)
    }

    /* calaulates Infra Red Intensity
    */
    //% block="readIR"
    //% weight=74 blockGap=8
    export function readIR(): number {
        return getUInt16LE(0x24)
    }

    /* calaulates Proximity
    */
    //% block="readProximity"
    //% weight=74 blockGap=8
    export function readProximity(): number {
        return getUInt16LE(0x26)
    }
} 