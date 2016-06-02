"use strict";

define([
    "jquery",
    "underscore",
    "backbone"
], function($, _, Backbone){
    var Pillar = {};

    // clone Backbone
    var props = Object.keys(Backbone).reduce(function(map, attr){
        map[attr] = {value: Backbone[attr]};
        if(typeof Backbone[attr] === 'function' && Backbone[attr].hasOwnProperty('extend')){
            map[attr].prototype = Object.create(Backbone[attr].prototype);
        }
        return map;
    }, {});
    Object.defineProperties(Pillar, props);

    Object.defineProperty(Pillar.Model, 'create', {
        /**
         * Create a Backbone.Model instance.
         */
        value: function(params){
            var Model = Pillar.Model.extend({});
            return new Model(params);
        }
    });

    Object.defineProperty(Pillar.View, 'create', {
        /**
         * Create a Backbone.View instance as a component.
         * @param {String} params.selector CSS selector of $el object.
         * @param {String} params.template Html string to construct the $el.
         * @param {String} params.templateData Array or JSON data that will be applied to the template
         * @param {String} params.model
         */
        value: function(params){
            if(params.selector !== undefined) params.template = $(params.selector).html();
            if(typeof params.template != 'function') params.template = _.template(params.template || '');
            if(!params.render) params.render = function(){
                var templateData = this.templateData;
                if(this.model) templateData = this.model.attributes;
                this.$el.html(this.template(templateData));
                return this;
            };

            if(params.selector !== undefined) params.el = $(params.selector);

            var View = Pillar.View.extend(params);
            return new View();
        }
    });

    Object.defineProperty(Pillar.Router, 'create', {
        /**
         * Create a Backbone.Router instance.
         */
        value: function(params){
            var Router = Pillar.Router.extend(params);
            return new Router();
        }
    });

    return Pillar;

});
