var iniit_stock_lookup;

iniit_stock_lookup = function(){
	$('#stock-lookup-form').on('ajax:success', function(event, data, status){
		$('#stock-lookup').replaceWith(data);
		iniit_stock_lookup();
	});

	$('#stock-lookup-form').on('ajax:error', function(event, xhr, status, error){
		$('#stock-lookup-results').replaceWith(' ');
		$('#stock-lookup-errors').replaceWith('Stock not found!');
	});
}




$(document).ready(function(){
	iniit_stock_lookup();
})