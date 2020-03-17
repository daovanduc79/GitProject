let myArray ;
let nRow , nColumn ;

// khai báo một mảng
function initArray() {
    nRow = +prompt("Nhập số hàng : ") ;
    nColumn = +prompt("Nhập số cột : ") ;

    myArray = new Array(nRow) ;
    for (let i = 0 ; i < nRow ; i++) {
        myArray[i] = new Array(nColumn) ;
        for (let j = 0 ; j < nColumn ; j++) {
            myArray[i][j] = Math.round(Math.random()*100) ;
        }
    }

}
// hiện thị mảng ra màn hình
function showArray() {
    let i , j ;
    document.write("<table border='1'>") ;
    for (i = 0 ; i < nRow ; i++) {
        document.write("<tr>") ;
        for (j = 0 ; j < nColumn ; j++) {
            document.write("<td>" + myArray[i][j] + " " + "</td>") ;
        }
        document.write("</tr>") ;
    }
    document.write("</table>") ;
}
// tìm giá trị nhỏ nhất của mảng
function minArray() {
    let min = myArray[0][0] ;
    let locaRow , locaColumn ;
    for (let i = 0 ; i < nRow ; i++) {
        for (let j = 0 ; j <nColumn ; j++) {
            if (myArray[i][j] < min) {
                min = myArray[i][j] ;
                locaRow = i + 1;
                locaColumn = j + 1 ;
            }
        }
    }
    document.write("Giá trị nhỏ nhất của mảng là : " + min + " tại hàng " + locaRow + " cột " + locaColumn) ;
}
initArray();
showArray();
minArray();