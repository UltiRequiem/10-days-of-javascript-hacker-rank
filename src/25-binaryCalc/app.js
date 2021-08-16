document.getElementById('btn0').addEventListener('click', () => {
  document.getElementById('res').insertAdjacentHTML('beforeend', '0')
})

document.getElementById('btn1').addEventListener('click', () => {
  document.getElementById('res').insertAdjacentHTML('beforeend', '1')
})

function operatorAction(eve) {
  document
    .getElementById('res')
    .insertAdjacentHTML('beforeend', eve.target.innerHTML)
}

document.getElementById('btnSum').onclick = operatorAction
document.getElementById('btnMul').onclick = operatorAction
document.getElementById('btnDiv').onclick = operatorAction
document.getElementById('btnSub').onclick = operatorAction

document.getElementById('btnClr').onclick = () => {
  document.getElementById('res').innerHTML = ''
}
