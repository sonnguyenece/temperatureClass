function temperature(Celc) {
    this.celcius = Celc;
    this.getFah = function () {
        return 1.8 * Celc + 32;
    };
    this.getKen = function () {
        return Celc + 273.15;
    };
    this.display = function () {
        document.getElementById("result").innerHTML =
            this.celcius + " C = " + this.getKen() + " K = " + this.getFah() + " F";
    };
}

let tempa = new temperature(parseFloat(prompt("Nhap vao gia tri do C : ")));
tempa.display();
