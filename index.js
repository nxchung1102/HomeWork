function table(e, nameTable) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
    document.getElementById(`table ${nameTable}`).textContent = '';
  }

  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  document.getElementById(nameTable).style.display = 'block';
  e.currentTarget.className += ' active';

  multiplicationTable(nameTable);
}

function multiplicationTable(number) {
  var result = '';
  for (var i = 1; i <= 9; i++) {
    result += number + ' x ' + i + ' = ' + number * i + '<br>';
  }
  document.getElementById(`table ${number}`).innerHTML = result;
}
