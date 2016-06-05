
function extractor (holder, method, url, item_name) {
	holder.open(method, url, false);
	holder.send();
	h_hol = JSON.parse(holder.response);	
	return h_hol.results[0][item_name];
}


var stuff = new XMLHttpRequest();

var user_id = extractor(stuff,"GET", "users",  'uid'); 
var fullname = extractor(stuff,"GET", "users",  'fullname'); 
var account_id = extractor(stuff, "GET", "account?uid="+String(user_id), 'aid');
var balance_val = extractor(stuff,"GET", "account/balance?aid="+String(account_id), 'balance');

var fname = document.getElementById('fname');
// var aid = document.getElementById('aid');
var balance = document.getElementById('balance');
var c_bal = document.getElementById('cad');
var g_bal = document.getElementById('gbp');
var a_bal = document.getElementById('aud');
var submit_but = document.getElementById('flipsub');
var cad = balance_val*0.9;
var gbp = balance_val*1.8;
var aud = balance_val*0.95;

fname.textContent = String(fullname);
// aid.textContent = String(account_id);
balance.textContent = " $ " + String(balance_val) + " USD";
c_bal.textContent = " $ " + String(cad) + " CAD";
g_bal.textContent = " $ " + String(gbp) + " GBP";
a_bal.textContent = " $ " + String(aud) + " AUD";

var cash = document.getElementById('addcash');

submit_but.addEventListener('click', function() {
	stuff.open("POST", "transaction/add?uid="+String(user_id)+"&cid=1&aid="+String(account_id)+"&amount="+String(cash.value));
	stuff.send();
	console.log("transaction/add?uid"+String(user_id)+"&cid=1&aid="+String(account_id)+"&amount="+String(cash.value));
	location.reload();
}, false);
