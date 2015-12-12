function configMoney() {
	$(".moeda").maskMoney({
		decimal: ",", thousands: ".", allowZero: true
	});	
}
$(document).ready(function() {
	configMoney();
});
