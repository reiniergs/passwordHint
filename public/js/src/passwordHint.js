define(['jquery','underscore','backbone','text!src/passwordHint.hbs','handlebars','./paper.js'],function ($, _, Backbone, downHint, hbs, Paper) {
    
    var passRegExp = "(((?=.*\\d+)(?=.*[a-z]+)(?=.*[A-Z]+)(^.{8,}))|^.{14,})";

    var passStateModel = Backbone.Model.extend({
        initialize : function () { 
            this.on('change:password',this.setStates)      
        },
        defaults : {
            password : '',
            least8char : false,
            more14char : false, 
            least1digit : false,
            least1lowChar : false,
            least1capChar : false,
            state : false
        },
        setStates : function () {
            var pass = this.get('password'); 
            this.set({   
                least8char : pass.length >= 8,
                more14char : pass.length >= 14,    
                least1digit : /\d/.test(pass),
                least1lowChar : /[a-z]/.test(pass),
                least1capChar : /[A-Z]/.test(pass),
                state : (pass.length >= 8  && /\d/.test(pass) && /[a-z]/.test(pass) && /[A-Z]/.test(pass)) || pass.length >= 14
            });
            var changed = this.changedAttributes();
            if (changed.hasOwnProperty('least8char') || changed.hasOwnProperty('more14char') 
                || changed.hasOwnProperty('least1digit') || changed.hasOwnProperty('least1lowChar') || changed.hasOwnProperty('least1capChar')
                || changed.hasOwnProperty('least14char'))
                this.trigger('change.state'); 
        }
    });

    var passwordHintView = Backbone.View.extend({
        initialize : function () {
            this.$el.attr('pattern',passRegExp);
            this.paper = new Paper(this.el);
            this.render();
            this.listenTo(this.model,'change.state',this.render);
        },
        events : {
            'input' : '_onInput',
            'focus' : 'show',
            'blur'  : 'hide'
        },
        render : function () {
            var target = hbs.compile(downHint);
            return $(this.paper.box).html(target(this.model.toJSON())); 
        },
        _onInput : function () {
            this.model.set({ password : this.$el.val() });
        },
        show : function () {
            this.paper.display(true);
        },
        hide : function () {
            this.paper.display(false);
        }
    });
    

    return {
        init : function (el) {
            if (el) return new passwordHintView({
                el : el,
                model : new passStateModel
            })
        }
    }
});