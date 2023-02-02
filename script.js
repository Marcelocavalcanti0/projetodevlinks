function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

     if(html.classList.contains('light')) {
        img.setAttribute("src", "./assets/profile_light.png"),
        img.setAttribute("alt", "Imagem de perfil - Modo Claro")
     }
     else {
        img.setAttribute("src", "./assets/profile_dark.png"),
        img.setAttribute("alt", "Imagem de perfil - Modo Escuro")         
     }

    
    
}


