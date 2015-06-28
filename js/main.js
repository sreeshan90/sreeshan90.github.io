var updatePage = function (item) {

	var selectPage = function (item) {
		if (item === "Send money back home") {
			return "#sendmoneyPage";
		}
		if (item === "Get a bank account") {
			return "#bankPage";
		}
		if (item === "Get out of debt") {
			return "#debtPage";
		}
		if (item === "Get money now") {
			return "#getmoneyPage";
		}
		if (item === "Save for an emergency") {
			return "#savePage";
		}
		return undefined;
	};

	var load = selectPage(item);
	if (load !== undefined) {
		$("#debtPage").hide();
		$("#socialzbar1").hide();
		$("#socialzbar2").hide();
		$("#sendmoneyPage").hide();
		$('')
		$(load).show();
	}
};