var nameBase = [];
for (var i = 0; i < 5 ; i++) {
  nameBase[i] = prompt ('Введіть ' + (i+1) + '-e ім""я', '');
}
var user = prompt ('Введіть користувача', '');
var check = false;
for (i = 0; i < 5 ; i++) {
  if (user == nameBase[i]) {
    var check = true;
    break;
  }
}
if (check == true) {
  alert (user + ', ви успішно увійшли!')
}  else {
  alert ('Користувача з іменем ' + user + ' не існує в базі!')
}
