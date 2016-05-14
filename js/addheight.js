// Definir la taille des sections  
        $(document).ready(function () {
            jQuery('document').ready(function () {
                //Définition de la variable min_height à la hauteur de la fenetre
                var min_height = jQuery(window).height();
                // si la section est inferieure à min_height alors on donne à sa propriété css une hauteur égale minimale à min_height
                if (jQuery('section').height() < min_height) {
                    jQuery('section').css({
                        'min-height': +min_height + 'px'
                    });
                }
            });
        });