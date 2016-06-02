"use strict";

define([
    "pillar"
], function(Pillar){

    var model = Pillar.Model.create({
        arraySize: 10
    });

    var view = Pillar.View.create({
        events: {
            'click .run-anchor': 'run',
            'keyup .size-input': 'tryRun'
        },
        run: run,
        tryRun: tryRun,
        model: model,
        selector: '.wrapper'
    });

    return function(){
        view.render();
        view.run();
    };

});


function run(){
    var ar = [];
    var size = this.model.get('arraySize');
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
    this.model.set('arraySize', e.target.value);
    if(e.keyCode == 13) this.run();
}
