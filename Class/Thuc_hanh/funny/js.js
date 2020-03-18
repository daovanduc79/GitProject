// Khởi tạo một hình tròn có vị trí và bán kính
function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}
// Tạo hàm lấy giá trị ngẫu nhiên từ 0 - 255
function getRandomHex() {
    return Math.floor(Math.random() * 255);
}
// Hàm tạo màu ngẫu nhiên
function getRandomColor() {
    let red = getRandomHex();
    let yellow = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + yellow + ")"

}
// Hàm vẽ 1 hình tròn bằng những thông tin ngẫu nhiên
function createCircle() {
    let ctx = document.getElementById('myCanvas').getContext('2d');
    let radius = Math.floor(Math.random() * 100);
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let circle = new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}
// vòng lặp vẽ ra 50 hình tròn ngẫu nhiên
function createMultipleCircle() {
    for (let i = 1; i < 51; i++)
        createCircle();
}

createMultipleCircle();
