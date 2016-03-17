var demoApp = angular.module('demoApp', ['angular-json-editor']);

demoApp.controller('MainController', function($scope) {
	$scope.form = {
		id: 0,
		title: '出国动机',
		description: [
			'－请认真回答以下问题，如有需要，可以花几天时间做更多的调研，从而最大化与导师咨询沟通的效果',
			'－你的回答将会发送给你的导师，以帮助导师更好的准备和你的咨询',
			'－你的答案将会帮助我们了解您的申请准备情况，从而有针对性的帮你设计服务流程（我们的服务流程是根据每个学生的情况个性化设计的）'
		],
		questions: [
			{
				id: 1,
				title: '我非常清楚我出国留学的目的',
				required: 'true',
				type: 'radio',
				options: ['是', '不是']
			},
			{
				id: 2,
				title: '申请动机',
				required: 'true',
				type: 'long text',
				options: []
			},
			{
				id: 3,
				title: '问题3',
				required: 'true',
				type: 'multiple',
				options: ['选项1', '选项2', '选项3']
			}
		]
	};
});