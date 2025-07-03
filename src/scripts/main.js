const faqQuestion = document.querySelectorAll('.faq__question')

faqQuestion.forEach(function(btn){
    // console.log(btn)
    const icon = btn.querySelector('.faq-icon')
    // console.log(icon)
    btn.addEventListener('click', function(){
        const faqAnswer = btn.nextElementSibling
        const isOPen = faqAnswer.classList.contains('active')

        document.querySelectorAll('.faq__answer').forEach(answer => {
            answer.classList.remove('active')
            // console.log(answer)
        })

        document.querySelectorAll('.faq-icon').forEach(icon => {
            icon.src = './build/assets/images/icon-plus.svg'
            // console.log(icon)
        })

        if(!isOPen){
            faqAnswer.classList.add('active')
            icon.src = './build/assets/images/icon-minus.svg'
        }
        // faqAnswer.classList.toggle('active')
        // const isOpen = faqAnswer.classList.contains('active')
        // icon.src = isOpen ? './build/assets/images/icon-minus.svg' : './build/assets/images/icon-plus.svg'
    })
})

