import './style.css'
import './node_modules/bootstrap/dist/css/bootstrap.css'

function mehet(){
  let kep = document.getElementById('img');
  kep.src = document.getElementById('url').value;
  kep.style.width = document.getElementById('szelesseg').value + 'px';
  kep.style.border = document.getElementById('vastagsag').value + 'px solid';
  kep.style.borderColor = document.getElementById('szin').value;
}

function mode(){
  document.body.classList.toggle('dark-mode');
}

document.getElementById('url').addEventListener('change',mehet)
document.getElementById('szelesseg').addEventListener('input',mehet)
document.getElementById('vastagsag').addEventListener('input',mehet)
document.getElementById('szin').addEventListener('input',mehet)
//document.getElementById('btn').addEventListener('click',mehet);
document.getElementById('btn-sotet').addEventListener('click',mode);