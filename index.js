const btnMode = document.getElementById("btnMode");

//Obtengo la config del user
const configUser = window.matchMedia('(prefers-color-scheme: dark)')

const localConfig = localStorage.getItem('tema');
if(localStorage === 'dark'){
    document.body.classList.toggle('dark-theme');
}else if(localStorage ==='light'){
    document.body.classList.toggle('light-theme');
}

btnMode.addEventListener('click',()=>{
    let colorTema;
    if(configUser.matches){
        document.body.classList.toggle('light-theme')
        colorTema = document.body.classList.contains('light-theme') ? 'light ' : 'dark';
    }else{
        document.body.classList.toggle('dark-theme')
        colorTema = document.body.classList.contains('dark-theme') ? 'dark ' : 'light';
    }
    localStorage.setItem('tema',colorTema)
})