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
		if (k == 0) calculate();
		return false;
	}
}

function calculate() {
	let c_ch_price = parseFloat(document.getElementById("c_ch_price").value.replace(/,/, '.')); // Стоимость в Китае Руб.
	let c_ag_delivery = parseFloat(document.getElementById("c_ag_delivery").value); //Доставка до Агента
	let c_log_price = parseFloat(document.getElementById("c_log_price").value); //Стоимость логистики
	let c_outlay = parseFloat(document.getElementById("c_outlay").value); //Затраты на подготовку к отправке (коробка,бирка, бумага, подарок, веревочка)
	let c_wb_transit = parseFloat(document.getElementById("c_wb_transit").value); //Транзит на WB
	let c_receipt = parseFloat(document.getElementById("c_receipt").value); //Приемка
	let c_storage = parseFloat(document.getElementById("c_storage").value); //Стоимость хранения (исходя из оборач. 90)
	let c_pokat = parseFloat(document.getElementById("c_pokat").value); //Покатушки (исх. Из выкупа 50%)
	let c_rc = parseFloat(document.getElementById("c_rc").value.replace(/,/, '.')); //РЦ
	let c_wb_commission = c_rc / 100 * 15; //Комиссия WB 15%
	let c_rc_commission = c_rc / 100 * 7; // Налог 7% от РЦ
	let c_profit = c_rc - (c_ch_price + c_ag_delivery + c_log_price + c_outlay + c_wb_transit + c_receipt + c_storage + c_pokat + c_wb_commission + c_rc_commission); //Прогнозируемая прибыль
	let c_roi = c_profit * 100 / (c_ch_price + c_ag_delivery + c_log_price + c_outlay); //ROI
	c_profit = c_profit.toFixed(2);
	c_roi = c_roi.toFixed(2);

	document.getElementById("c_wb_commission").textContent = c_wb_commission;
	document.getElementById("c_rc_commission").textContent = c_rc_commission;
	document.getElementById("c_profit").textContent = c_profit;
	document.getElementById("c_roi").textContent = c_roi;

	return false;
}
