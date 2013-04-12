billingstack.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {layout : 'default', templateUrl:'app/templates/home.html'})
		.when('/sign-up', {layout : 'default', templateUrl:'app/templates/sign_up.html'})
		.when('/sign-in', {layout : 'default', templateUrl:'app/templates/sign_in.html'})
		.when('/payment-gateways', {layout : 'merchant', templateUrl:'app/templates/payment_gateways/list.html'})
		.when('/payment-gateways/new', {layout : 'merchant', templateUrl:'app/templates/payment_gateways/create.html'})
		.when('/payment-gateways/:payment_gateway_id', {layout : 'merchant', templateUrl:'app/templates/payment_gateways/create.html'})
		.when('/products', {layout : 'merchant', templateUrl:'app/templates/products/list.html'})
		.when('/products/new', {layout : 'merchant', templateUrl:'app/templates/products/edit.html'})
		.when('/products/:product_id', {layout : 'merchant', templateUrl:'app/templates/products/edit.html'})
		.when('/plans', {layout : 'merchant', templateUrl:'app/templates/plans/list.html'})
		.when('/plans/new', {layout : 'merchant', templateUrl:'app/templates/plans/create.html'})
		.when('/plans/:plan_id', {layout : 'merchant', templateUrl:'app/templates/plans/edit.html'})
		.when('/customers', {layout : 'merchant', templateUrl:'app/templates/customers/list.html'})
		.when('/customers/new', {layout : 'merchant', templateUrl:'app/templates/customers/create.html'})
		.when('/customers/:customer_id', {layout : 'customer', templateUrl:'app/templates/customers/create.html'})
		.when('/customers/:customer_id/payment-methods', {layout : 'customer', templateUrl:'app/templates/payment_methods/list.html'})
		.when('/customers/:customer_id/payment-methods/new', {layout : 'customer', templateUrl:'app/templates/payment_methods/create.html'})
		.when('/customers/:customer_id/subscriptions', {layout : 'customer', templateUrl:'app/templates/subscriptions/list.html'})
		.when('/customers/:customer_id/subscriptions/new', {layout : 'customer', templateUrl:'app/templates/subscriptions/edit.html'})
		.when('/customers/:customer_id/subscriptions/:subscription_id', {layout : 'customer', templateUrl:'app/templates/subscriptions/edit.html'})
		.when('/customers/:customer_id/usage', {layout : 'customer', templateUrl:'app/templates/usage/list.html'})
		.when('/customers/:customer_id/invoices', {layout : 'customer', templateUrl:'app/templates/invoices/list.html'})
		.when('/customers/:customer_id/invoices/new', {layout : 'customer', templateUrl:'app/templates/invoices/edit.html'})
		.when('/customers/:customer_id/invoices/:invoice_id', {layout : 'customer', templateUrl:'app/templates/invoices/edit.html'})
		.when('/customers/:customer_id/transactions', {layout : 'customer', templateUrl:'app/templates/transactions/list.html'})
		.when('/customers/:customer_id/transactions/new', {layout : 'customer', templateUrl:'app/templates/transactions/create.html'})
		.when('/subscriptions', {layout : 'merchant', templateUrl:'app/templates/subscriptions/list.html'})
		.when('/subscriptions/:subscription_id/usage/new', {layout : 'merchant', templateUrl:'app/templates/usage/create.html'})
		.when('/usage', {layout : 'merchant', templateUrl:'app/templates/usage/list.html'})
		.when('/invoices', {layout : 'merchant', templateUrl:'app/templates/invoices/list.html'})
		.when('/transactions', {layout : 'merchant', templateUrl:'app/templates/transactions/list.html'})
		.when('/settings', {layout : 'merchant', templateUrl:'app/templates/settings/index.html'})
		.otherwise({redirectTo:'/'});
}])