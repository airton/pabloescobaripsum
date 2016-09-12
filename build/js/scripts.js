(function(){
    'use strict';

    // Config
    var app = {
        body:   document.querySelector('body'),
        number: document.getElementById('number'),
        ipsum:  document.querySelector('.ipsum'),
    };

    // Default scripts
    var initialConfig = {

        // Start functions
        init: function(){
            var self = this;
            self.externalLinks();
            self.changeIpsum();
        },

        // External links
        externalLinks: function() {
            [].forEach.call(document.querySelectorAll("a[href*='http://']:not([href*='"+location.hostname+"']),[href*='https://']:not([href*='"+location.hostname+"'])"), function(el) {
                el.setAttribute('target','_blank');
            });
        },

        // New function ...
        changeIpsum: function(){

            var quotes = [
              "Ustedes pueden aceptar mi negocio o aceptar las consequências. ¿Plata o plomo? Compremos una lavadora más grande, pues. Los políticos se espantan fácil. Una pistola y ya. La cárcel em Estados Unidos es peor que la muerte.",
              "Ya no queda nadie que se nos enfrente. ¿Y sabes por qué, Fabito? Porque nadie tiene los huevos como nosotros. A la guerra, pues. Las mentiras son necesarias cuando la verdade es muy difícil de creer. El propósito de la guerra es la paz. Hay momentos para pelear y hay momentos para ser astutos.",
              "¿Plata o plomo? Ustedes pueden aceptar mi negocio o aceptar las consequências. Una pistola y ya. A la guerra, pues. Las mentiras son necesarias cuando la verdade es muy difícil de creer.",
              "Soy el fuego que arde tu piel. Soy el agua que mata tu sed. El castillo, la torre yo soy. La espada que guarda el caudal. Tu el aire que respiro yo. Y la luz de la luna en el mar. La garganta que ansio mojar. Que temo ahogar de amor. Y cuales deseos me vas a dar? Dices tu: mi tesoro basta con mirarlo. Y tuyo será, y tuyo será"
            ];

            app.number.addEventListener('change', function(e) {
                console.log(e);

                var text = "";

                while(app.ipsum.firstChild) app.ipsum.removeChild(app.ipsum.firstChild);

                for (var i=0; i<=this.value-1; i++) {

                    text = text + quotes[Math.floor(Math.random() * quotes.length-1) + 1] + "\n\n";
                    app.ipsum.innerHTML = text;

                }

            });
        }
    };

    initialConfig.init();

})();

