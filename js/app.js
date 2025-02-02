let kachBtn = document.getElementById('kach')
let kachActive = document.getElementById('kachWin')

let speedBtn = document.getElementById('speed')
let speedActive = document.getElementById('speedWin')

let priceBtn = document.getElementById('price')
let priceActive = document.getElementById('priceWin')



speedBtn.addEventListener('click', function() {
    speedActive.classList.toggle('dodwnActive'); 
    if (speedBtn.style.color === 'rgb(40, 167, 69)' || speedBtn.style.color === '#28A745') {
        speedBtn.style.color = '';
    } else {
        speedBtn.style.color = '#28A745';
    }
});


kachBtn.addEventListener('click', function() {
    kachActive.classList.toggle('dodwnActive'); 
    if (kachBtn.style.color === 'rgb(40, 167, 69)' || kachBtn.style.color === '#28A745') {
        kachBtn.style.color = '';
    } else {
        kachBtn.style.color = '#28A745';
    }
});


priceBtn.addEventListener('click', function() {
    priceActive.classList.toggle('dodwnActiveP'); 
    
    if (priceBtn.style.color === 'rgb(40, 167, 69)' || priceBtn.style.color === '#28A745') {
        priceBtn.style.color = '';
    } else {
        priceBtn.style.color = '#28A745';
    }
});


// -------------------popup
let butt1 = document.getElementById('button1')
let butt2 = document.getElementById('button2')
let popup = document.getElementById('popupWin')
let closedBtn = document.getElementById('closeBtnPopup')


function showPopup(){
    popup.classList.add('openP')
}

butt1.addEventListener('click', showPopup);
butt2.addEventListener('click', showPopup);


closedBtn.addEventListener('click', function() {
    popup.classList.remove('openP')
});


// ----------------------ПОЛИТИКА
let politicBtn = document.getElementById('politicBtn')
let politicWin = document.getElementById('politicWin')
let politicCls = document.getElementById('closeBtnPolitic')

politicBtn.addEventListener('click', function(){
    politicWin.classList.add('openPol')
});
politicCls.addEventListener('click', function() {
    politicWin.classList.remove('openPol')
});
// -----------------------

  function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
      var range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

  function mask(e) {
    //console.log('mask',e);
    var matrix = this.placeholder,// .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
      return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
  }
  window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#tel");
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
  })
  window.addEventListener("DOMContentLoaded", function() {
    var inputt = document.querySelector("#tell");
    inputt.addEventListener("input", mask, false);
    inputt.focus();
    setCursorPosition(3, inputt);
  });

  ;
