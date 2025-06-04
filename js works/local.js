let count = localStorage.getItem('visitCount') || 0;
count++;
localStorage.setItem('visitCount', count);
alert("You've opened this page " + count + " times!");



function saveName() {
  let name = document.getElementById('nameInput').value;
  localStorage.setItem('username', name);
}

function showName() {
  let name = localStorage.getItem('username');
  document.getElementById('display').textContent = "Congratulations, " + name;
}