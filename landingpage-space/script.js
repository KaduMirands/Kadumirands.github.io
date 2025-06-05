// STARTUP

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.body.classList.remove('hidden');
    }, 300); 
    setTimeout(function() {
        const banners = document.querySelector('.banners');
        if (banners) {
            banners.classList.remove('hidden1');
        }
    }, 2000);
});

// BANNERS

document.addEventListener("DOMContentLoaded", function () {
    const banners = document.querySelectorAll(".banner");

    banners.forEach(banner => {
        const voltarBtn = banner.querySelector(".voltar-btn");
        const textoEscondido = banner.querySelector(".texto-escondido");

        // Garante que o texto escondido esteja oculto no início
        if (textoEscondido) {
            textoEscondido.style.display = "none";
        }

        banner.addEventListener("click", function () {
            const isExpanded = banner.classList.contains("expandido");

            if (!isExpanded) {
                banners.forEach(b => {
                    if (b !== banner) b.style.display = "none";
                });

                banner.classList.add("expandido");
                document.querySelector(".banners").style.flexDirection = "column";
                document.querySelector(".banners").style.alignItems = "center";
                document.querySelector(".banners").style.justifyContent = "center";

                if (voltarBtn) voltarBtn.style.display = "inline-block";
                if (textoEscondido) textoEscondido.style.display = "block";
            }
        });

        if (voltarBtn) {
            voltarBtn.addEventListener("click", function (event) {
                event.stopPropagation();

                banners.forEach(b => {
                    b.style.display = "flex";
                });

                banner.classList.remove("expandido");
                document.querySelector(".banners").style.flexDirection = "row";
                document.querySelector(".banners").style.alignItems = "flex-start";
                document.querySelector(".banners").style.justifyContent = "center";

                if (textoEscondido) textoEscondido.style.display = "none";
                voltarBtn.style.display = "none";
            });
        }
    });
});
