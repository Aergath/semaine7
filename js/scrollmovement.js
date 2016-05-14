//Mouvement fluide
    $(function(){
        // Quand un lien est cliqué on appelle la fonction animate de JQuery
        $("nav a").on('click', function(e){
            e.preventDefault();
            // hash permet de cibler le href des liens 
            var hash = this.hash;
            $('html, body').animate({
                scrollTop : $(this.hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        });
    });