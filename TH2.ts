class Circle {
    private r: number;

    constructor(r: number) {
        this.r = r;

    }

    getR(): number {
        return this.r;

    }

    setR(r: number): void {
        this.r = r;
    }

    toString() {
        return "Aci rcle whith radius :" + this.r;
    }
}

interface Comparable {
    comparable(o: object): string;

}

class ComparableCircle extends Circle implements Comparable {
    constructor(r: number) {
        super(r);
    }

    comparable(o: ComparableCircle): string {
        if (this.getR() > o.getR()) {
            return "The current circle is larger.";
        } else if (this.getR() < o.getR()) {
            return `The current circle is smaller.`
        }else {
            return "The current circle is equal"
        }
    }

}

let circle = [];
circle.push(new ComparableCircle(10));
circle.push(new ComparableCircle(8));
circle.push(new ComparableCircle(8));
let rs = circle[1].comparable(circle[2]);
console.log(rs)
