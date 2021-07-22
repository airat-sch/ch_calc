window.onload = function () {
	let calc = document.getElementById('c_calculate');
	calc.onclick = function () {
		let fields = document.querySelectorAll('.calc__input');
		for (var i = 0, k = 0; i < fields.length; i++) {
			fields[i].style.border = '1px solid #ddd';
			if (!fields[i].value) {
				fields[i].style.border = '1px solid #e21f1f';
				k++;
			}
		}
		// if (k == 0) calculate();
		calculate();
		return false;
	}
}

function calculate() {
	let c_ch_price = parseFloat(document.getElementById("c_ch_price").value.replace(/,/, '.')); // Стоимость закупки, Руб.
	let c_ag_delivery = parseFloat(document.getElementById("c_ag_delivery").value.replace(/,/, '.')); //Стоимость доставки
	let c_outlay = parseFloat(document.getElementById("c_outlay").value.replace(/,/, '.')); //Затраты на подготовку к отправке (коробка,бирка, бумага, подарок, веревочка)
	let c_wb_transit = parseFloat(document.getElementById("c_wb_transit").value.replace(/,/, '.')); //Транзит на WB
	let c_receipt = parseFloat(document.getElementById("c_receipt").value.replace(/,/, '.')); //Приемка
	let c_storage = parseFloat(document.getElementById("c_storage").value.replace(/,/, '.')); //Стоимость хранения (исходя из оборач. 90)
	let c_pokat = parseFloat(document.getElementById("c_pokat").value.replace(/,/, '.')); //Стоимость логистики до покупателя (исх. Из выкупа 50%)
	let c_rc = parseFloat(document.getElementById("c_rc").value.replace(/,/, '.')); //Цена продажи
	let c_wb_percent = parseFloat(document.getElementById("c_wb_percent").value.replace(/,/, '.')); //Процент комиссии WB, %
	let c_rc_percent = parseFloat(document.getElementById("c_rc_percent").value.replace(/,/, '.')); //Процент налога от РЦ, %
	if (isNaN(c_ch_price)) { c_ch_price = 0; }
	if (isNaN(c_ag_delivery)) { c_ag_delivery = 0; }
	if (isNaN(c_outlay)) { c_outlay = 0; }
	if (isNaN(c_wb_transit)) { c_wb_transit = 0; }
	if (isNaN(c_receipt)) { c_receipt = 0; }
	if (isNaN(c_storage)) { c_storage = 0; }
	if (isNaN(c_pokat)) { c_pokat = 0; }
	if (isNaN(c_rc)) { c_rc = 0; }
	if (isNaN(c_wb_percent)) { c_wb_percent = 0; }
	if (isNaN(c_rc_percent)) { c_rc_percent = 0; }
	let c_wb_commission = c_rc / 100 * c_wb_percent; //Комиссия WB
	let c_rc_commission = c_rc / 100 * c_rc_percent; // Налог от РЦ
	let c_profit = c_rc - (c_ch_price + c_ag_delivery + c_outlay + c_wb_transit + c_receipt + c_storage + c_pokat + c_wb_commission + c_rc_commission); //Прогнозируемая прибыль
	let c_roi = c_profit * 100 / (c_ch_price + c_ag_delivery + c_outlay); //ROI
	if (isNaN(c_roi)) { c_roi = 0; }
	c_profit = c_profit.toFixed(2);
	c_roi = c_roi.toFixed(2);

	document.getElementById("c_wb_commission").textContent = c_wb_commission;
	document.getElementById("c_rc_commission").textContent = c_rc_commission;
	document.getElementById("c_profit").textContent = c_profit;
	document.getElementById("c_roi").textContent = c_roi;

	return false;
}
