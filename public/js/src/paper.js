
define(['jquery'],function () { 

	var Paper = function (element) {
		this.el = element;
		this.parent = $(element).parent();
		$(window).resize(function () {
			this.setPosition();
		}.bind(this));
		this.render();
	}

	Paper.prototype.render = function () {
		this.box = $('<div class="passwordHintBox" style="display : none;"></div>');
		this.setPosition();
		$(this.parent).append(this.box);
	}

	Paper.prototype.setPosition = function () {
		var position = this.position();
		$(this.box).css({
			position : 'absolute',
			width     : position.width,
			top : position.top,
			left : position.left	
		});
	}

	Paper.prototype.display = function (visible) {
		visible = typeof visible == undefined ? true : visible;
		this.box.css('display', visible ? 'block' : 'none');
	}

	Paper.prototype.position = function () {
		var position = $(this.el).position();
		position.top += $(this.el).outerHeight(true) - Number($(this.el).css('margin-bottom').replace('px',''));
		position.left += Number($(this.el).css('margin-left').replace('px',''));
		position.width = $(this.el).outerWidth() + 'px';
		return position;
	}

	return Paper;
});