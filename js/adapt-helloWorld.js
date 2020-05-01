define([
    'core/js/adapt',
    'core/js/views/componentView',
    'core/js/models/componentModel'
], function(Adapt, ComponentView, ComponentModel) {

    var HelloWorldView = ComponentView.extend({
        postRender: function() {
            this.setReadyStatus();
            this.setupInviewCompletion();
        }
    });

    var HelloWorldModel = ComponentModel.extend({
        // Implement your component model
    });

    return Adapt.register('helloWorld', {
        model: HelloWorldModel,
        view: HelloWorldView
    });

});
