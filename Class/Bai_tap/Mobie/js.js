/*
* - Xây dựng lớp mô tả điện thoại
* _ hiện thị pin (max 100)
* _ có vùng nhớ lưu mess đang soạn
* _ có vùng nhớ lưu inbox
* _ có vùng nhớ lưu outbox
* + kiểm tra trạng thái bật tắt
* + chức năng bật tắt điện thoại
* + chức năng sạc pin
* + chức năng soạn tin nhắn
* + chức năng nhận tin nhắn
* + chức năng gửi tin nhắn
* + chức năng xem tin trong inbox
* + chức năng xem tin trong outbox
* + mỗi lần dùng chức năng giảm 1 pin
* + nếu điện thoại chưa bật thì không dùng được chức năng nào
* */

class Mobile {
    constructor(name) {
        this.name = name;
        this.status = true;
        this.battery = 100;
        this.msg = "";
        this.inbox = [];
        this.outbox = [];
    }

    decreaseBattery() {
        if (this.battery > 0)
            return this.battery--;
        else
            this.status = false;
            return 0;
    }

    writeMsg(value) {
        this.msg = value;
    }

    receiveMsg(name, msg) {
        this.inbox.push(name + " : " + msg);
    }

    sendMsg(mobile) {
        mobile.receiveMsg(this.name, this.msg);
        this.outbox.push(this.msg);
    }

    turnOn() {
        return this.status = true;
    }

    turnOff() {
        return this.status = false;
    }

    checkStatus() {
        if (this.status) {
            alert(this.name + " đã bật");
        } else {
            alert(this.name + " đã tắt");
        }
    }
}

let mobile1 = new Mobile("Iphone");
let mobile2 = new Mobile("SamSung");
let turn = 1;

function clickHome(phone) {
    if (phone.battery <= 0) {
        phone.turnOff();
        phone.checkStatus();
    } else {
        if (turn === 1) {
            phone.turnOn();
            phone.checkStatus();
            turn = 2;
        } else {
            phone.turnOff();
            phone.checkStatus();
            turn = 1;
        }
    }
}

function sendMess(m1, m2) {

    m1.decreaseBattery();
    if (m1.status <= 0) {
        alert(m1.name + " đã hết Pin")
    } else {
        m1.sendMsg(m2);
        disPlayMess();
    }


}

function disPlayMess() {
    document.getElementById("iphone-inbox").innerHTML = mobile1.inbox ;
    document.getElementById("iphone-outbox").innerHTML = mobile1.outbox;
    document.getElementById("samsung-inbox").innerHTML = mobile2.inbox;
    document.getElementById("samsung-outbox").innerHTML = mobile2.outbox;
    document.getElementById("iphone-msg").value = "";
    document.getElementById("samsung-msg").value = "";
    document.getElementById("iphone-battery").innerHTML = mobile1.decreaseBattery() + '%';
    document.getElementById("samsung-battery").innerHTML = mobile2.decreaseBattery() + '%';

}




