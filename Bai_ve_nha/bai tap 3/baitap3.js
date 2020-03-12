function KTso() {
    let a, b, c;
    a = prompt("Nhập cạnh a : ");
    a = Number.parseFloat(a);
    b = prompt("Nhập cạnh b : ");
    b = Number.parseFloat(b);
    c = prompt("Nhập cạnh c : ");
    c = Number.parseFloat(c);
    if ((a + b > c) && (b + c > a) && (c + a > b)) {
        alert('a,b,c là ba cạnh của một tam giác ABC');
        alert('Chu vi tam giác ABC là : ' + (a + b + c));
        let p = (a + b + c) / 2;
        let S = Math.sqrt(p * (p + a) * (p + b) * (p + c));
        alert('Diện tích tam giác ABC là : ' + S);
        //console.log('kiểm tra')
        if ((a * a + b * b == c * c) || (b * b + c * c == a * a) || (c * c + a * a == b * b))
        {
            alert('ABC là tam giác vuông')
        } else
            alert('ABC KHÔNG là tam giác vuông')
        if (a == b || b == c || c == a) {
            alert('ABC là tam giác cân') }
        else  { alert('ABC KHÔNG là tam giác cân') }
        if (a == b && a == c) {
            alert('ABC là tam giác đều') }
        else { alert('ABC KHÔNG là tam giác đều') }

    }
    else alert('a,b,c KHÔNG là ba cạnh của một tam giác')
}
