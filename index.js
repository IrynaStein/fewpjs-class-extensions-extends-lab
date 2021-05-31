// Your code here

class Polygon {
    constructor(sidesCount) {
        this.sidesCount = sidesCount
        console.log(this.sidesCount)
        this.count = this.sidesCount.length
    }
    get countSides() {
        return this.sidesCount.length
    }
    get perimeter() {
        let array = []
        for (let i = 0; i < this.sidesCount.length; i++) {
            array.push(this.sidesCount[i])
        }
        return array.reduce((acc, element) => acc + element, 0)
    }
}

class Triangle extends Polygon {
    constructor(sidesCount) {
        super(sidesCount)
    }
    get isValid() {
        if (this.count == 3) {
            // console.log(this.count)
            let side1 = this.sidesCount[0]
            // console.log(this.sidesCount[0])
            let side2 = this.sidesCount[1]
            // console.log(this.sidesCount[1])
            let side3 = this.sidesCount[2]
            // console.log(this.sidesCount[2])
            if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
}


class Square extends Polygon {
    constructor(sidesCount) {
        super(sidesCount)
    }

    get isValid() {
        if (this.count === 4) {
            let side1 = this.sidesCount[0]
            // console.log(side1)
            let side2 = this.sidesCount[1]
            // console.log(side1)
            let side3 = this.sidesCount[2]
            // console.log(side1)
            let side4 = this.sidesCount[3]
            // console.log(side1)
            if (side1 === side2 && side1 === side3 && side1 === side4) {
                return true
            }
            else {
                return false
            }
        } else {
            return false
        }
    }
    get area (){
        if (this.count==4)
        return this.sidesCount[0]* this.sidesCount[0]
    }
}
