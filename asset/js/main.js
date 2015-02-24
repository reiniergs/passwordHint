require.config({
	paths : {
		'backbone' : 'vendor/backbone',
		'underscore' : 'vendor/underscore',
		'jquery' : 'vendor/jquery',
		'text' : 'vendor/text',
		'handlebars' : 'vendor/handlebars'
	}
});

define(['asset/js/build/component.js'],function (passwordHint) {
    passwordHint.init('.pass');
})