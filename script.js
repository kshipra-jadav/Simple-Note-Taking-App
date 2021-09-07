let buttons = document.getElementsByClassName('images')
const wordCount = document.querySelector('.notes')
let wc = document.querySelector('.wordcount')

for (let btn of buttons) {
  let command = btn.dataset['command']
  size = 0

  btn.addEventListener('click', () => {
    if(command === 'fontSize' && btn.classList.contains('big')){
      document.execCommand(command, false, size)
      size++
    }
    else if(command === 'fontSize' && btn.classList.contains('small')){
      document.execCommand(command, false, size)
      size--
    }
    else if(command === 'print'){
      var prtContent = document.getElementById('print');
      var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
      WinPrint.document.write(prtContent.innerHTML);
      WinPrint.document.close();
      WinPrint.focus();
      WinPrint.print();
      // WinPrint.close();
    }
    else{
      document.execCommand(command, false, null)
    }


  })

  // btn.onmouseover = () => {
  //   console.log('hi')
  // }

}

Countable.on(wordCount, (counter) => {

  wc.innerHTML = `Word Count : ${counter.words}`

})
