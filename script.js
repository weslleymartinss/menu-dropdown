function activeDropDown () {
    const dropdownPrincipal = document.querySelector('.dropdown-principal-ativar')
    const institucional = document.querySelector('.institucional-dropdown')

    dropdownPrincipal.addEventListener('click', () =>{
    institucional.classList.toggle('dropdown-principal-ativo')
})
}

activeDropDown()

