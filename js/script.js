var experience = prompt('Введите ваше количество стажа');

var allowance1 = '0%';
var allowance2 = '10%;'
var allowance3 = '20%';
var allowance4 = '25%;'

if (experience >= 0 && experience <= 3){
    alert('Ваша надбавка составляет ' + allowance1)
} else if (experience >= 4 && experience <= 10){
    alert('Ваша надбавка составляет ' + allowance2);
} else if (experience >=11 && experience <= 20) {
    alert('Ваша надбавка составляет ' + allowance3);
} else if (experience >=20){
    alert('Ваша надбавка составляет ' + allowance4);
} else {
    alert('Неправильное значение');
}