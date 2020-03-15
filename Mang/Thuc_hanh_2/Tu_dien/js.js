function tuDien() {
    let english = ["cat", "dog", "doctor", "teacher", "student", "development", "computer"];
    let tiengViet = ["con mèo", "con chó", "bác sĩ", "giáo viên", "học sinh", "phát triển","máy tính"];
    let translate = document.getElementById("input").value;
    let result = "" ;

    for (let i = 0 ; i < english.length ; i++) {
        if ( translate === english[i] ) {
            result = tiengViet[i] ;
            break ;
        }
        else {
            result = "Không dịch được" ;
        }
    }
    document.getElementById("output").value = result ;
}
