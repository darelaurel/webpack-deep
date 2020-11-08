
    let modal=document.getElementById('modal')
    let modalBtn=document.getElementById('modal-btn')
    let closeModal=document.getElementById('close-modal')

    let openModal=((e)=>{
        modal.classList.toggle('modal-d-block')
    })

    let downModal=((e)=>{
        if(e.target ==modal)
        {
            modal.classList.remove('modal-d-block')
        }
    })

    modalBtn.addEventListener('click',openModal)

    closeModal.addEventListener('click', openModal)

    window.addEventListener('click',downModal)
