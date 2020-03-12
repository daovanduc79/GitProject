function ReadNumber() {
    let n = document.getElementById("inputNumber").value;
    let a = Math.floor(n / 1000000); // lấy 3 số đầu
    let b = Math.floor(n / 1000) % 1000; // lấy 3 số giữa
    let c = n % 1000; // lấy 3 số cuối
    if (n.length === 9) {
        n = parseInt(n);
        document.getElementById("outputNumber").innerHTML = " Số đã nhập: " + n;
        if ( ReadThreeNumber(b) === "")
            document.getElementById("result").innerHTML = "Có thể đọc là: " + ReadThreeNumber(a) + " triệu "
                                                                         + ReadThreeNumber(c)
        else
        document.getElementById("result").innerHTML = "Có thể đọc là: " + ReadThreeNumber(a) + " triệu "
                                    + ReadThreeNumber(b) + " nghìn " + ReadThreeNumber(c);
    } else
        document.getElementById("outputNumber").innerHTML = "Nhập 9 chữ số bạn êi !";
}
function ReadOneNumber(a) {
    switch (a) {
        case 0:
            return "";
        case 1:
            return " một";
        case 2:
            return " hai";
        case 3:
            return " ba";
        case 4:
            return " bốn";
        case 5:
            return " năm";
        case 6:
            return " sáu";
        case 7:
            return " bảy";
        case 8:
            return " tám";
        case 9:
            return " chín";
        default :
            return " không biết số này";
    }
}
    function ReadThreeNumber(a)
    {
        let tram = Math.floor( a / 100 );
        let chuc = Math.floor( a / 10) % 10 ; // 123 / 10 = 12 % 10 = 2
        let donVi = a % 10 ; // 123 / 10 = 3
        let str = "" ;
        if ( tram === 0 ){
            if ( chuc === 0 )
                if ( donVi === 0 )
                    str = ""
                else str += ReadOneNumber(donVi)
            else {
                str += ReadOneNumber(chuc) + " mươi "
                if (donVi !== 0)
                    str += ReadOneNumber(donVi)
            }

        }
        else {
            str += ReadOneNumber(tram) + " trăm ";
            if ( donVi === 0 ) {
                if ( chuc === 0 )
                    str = str // 100 : một trăm
                else
                    str += ReadOneNumber(chuc) + " mươi "
            } else {
                if ( chuc === 0 )
                    str += " linh " + ReadOneNumber(donVi)
                else str += ReadOneNumber(chuc) + " mươi " + ReadOneNumber(donVi)
            }
        }
        return str ;

    }


