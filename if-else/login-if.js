function login() {
    let name,pass ;
    name = document.getElementById('usename').value ;
    pass = document.getElementById('password').value ;

    if ( name === 'duc07092000' ) {
        if ( pass === '22090709' ) {
            alert('Xin chào trai đẹp <3')
        }
        else
        if ( pass === '' ) {
            alert('Vui lòng nhập mật khẩu !')
        }
        else {
            alert('Mật khẩu không chính xác')
        }
    }
    else
    if ( name === '' ) {
        alert('Vui lòng nhập tên đăng nhập !')

    }
    else {
        alert('Tên đăng nhập không chính xác')
    }
}
