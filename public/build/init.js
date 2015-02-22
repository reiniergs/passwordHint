require.config({
	paths : {
		'backbone' : 'vendor/backbone',
		'underscore' : 'vendor/underscore',
		'jquery' : 'vendor/jquery',
		'text' : 'vendor/text',
		'handlebars' : 'vendor/handlebars'
	}
});

define(['js/src/passwordHint.js'],function (passwordHint) {
    passwordHint.init('.pass');
})