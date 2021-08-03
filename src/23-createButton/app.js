const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  this.innerHTML = parseInt(this.innerHTML, 10) + 1;
});
