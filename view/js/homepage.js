document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".navbar ul li"); // Seleciona todos os itens do menu

    menuItems.forEach(item => {
        const submenu = item.querySelector(".submenu"); // Submenu dentro do item

        if (submenu) {
            item.addEventListener("click", function (e) {
                e.stopPropagation(); // Impede que o clique feche imediatamente o submenu

                // Fecha outros submenus abertos
                document.querySelectorAll(".submenu").forEach(sm => {
                    if (sm !== submenu) sm.style.display = "none";
                });

                // Alterna a exibição do submenu
                submenu.style.display = submenu.style.display === "block" ? "none" : "block";
            });
        }
    });

    // Clique fora do menu fecha todos os submenus
    document.addEventListener("click", function () {
        document.querySelectorAll(".submenu").forEach(submenu => {
            submenu.style.display = "none";
        });
    });
});
