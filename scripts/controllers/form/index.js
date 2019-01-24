

'use strict';
angular.module("myApp").controller('indexCtrl', function($scope, $http) {
	var self = this;
	var model = self;
	var url = "localhost.com"

	self.username = "";
	self.password = "";
	self.email = "";
	self.agree = false;

	self.confirm = function(){
		$("#confirmModal").modal('show');
	}

	self.submit = function(){
		$("#confirmModal").modal('hide');
		$('.main-alert').addClass('active');
		
		setTimeout(function(){
			self.closeAlert();
		}, 4000);

		self.eraseData();

	}

	self.eraseData = function(){
		self.username = "";
		self.password = "";
		self.email = "";
		self.agree = false;
	}

	self.closeAlert = function(){
		$('.main-alert').removeClass('active');
	}

});

