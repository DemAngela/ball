const box = document.querySelectorAll('.box')
const check = document.querySelectorAll('.check')
const allCheck =document.querySelector('.allCheck')

console.log(box)

box.forEach((box, i) => {
    box.addEventListener('click', () => {
        box.classList.toggle('bgBox')
        check[i].checked = !check[i].checked
    })
})

allCheck.addEventListener('click', function () {
    check.forEach((el, i)=>{
       el.checked = !el.checked;
        if (el.checked) {
            box[i].classList.add('bgBox');
        } else {
            box[i].classList.remove('bgBox');
        }
   })
})


