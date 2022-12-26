class QuadraticEquation {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getter() {
        return a;
        return b;
        return c;
    }
    getDiscriminant() {
        return b*b - 4*a*c;
    }
    getRoot1() {
        if (this.getDiscriminant()<0) return 0;
        return ((-b+Math.sqrt(this.getDiscriminant())))/(2*a);
    }
    getRoot2() {
        if (this.getDiscriminant()<0) return 0;
        return ((-b-Math.sqrt(this.getDiscriminant())))/(2*a);
    }
}