"use strict";

require.config({
    paths: {
        underscore: "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min",
        jquery: "//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min",
        backbone: "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone-min",
        pillar: "../modules/Pillar/pillar",
        text: "//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min"
    },
    shim: {
        underscore: { exports: '_'},
        jquery: { exports: '$'},
        backbone: {
            deps: [ 'underscore', 'jquery'],
            exports: "Backbone"
        }
    }
});

require([
    "pillar",
    "main"
], function(Pillar, main){

    // init main page
    Pillar.Router.create({
        routes: { '': main }
    });

    Pillar.history.start();

});
