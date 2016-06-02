"use strict";

define([
    "pillar"
], function(Pillar){

    var view = Pillar.View.create({
        el: 'body'
    });

    return function(){
        view.render();
        run();
    };

});


function run(){
    var ar = [];
    var size = parseInt(document.getElementById('arraySize').value);
    var i;
    for(i = 0;i<size;i++){
        ar[i] = parseInt(Math.random()*10000000);
    }

    // algorithms
    for(var name in Algs){
        document.getElementById(name+'Consumed').innerHTML = Algs[name](ar);
    }

    // native
    var start = Date.now();
    ar.sort();
    document.getElementById('nativeConsumed').innerHTML = parseInt(Date.now() - start);

}

function tryRun(e){
    if(e.keyCode == 13) run();
}
