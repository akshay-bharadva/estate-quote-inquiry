var maxLength = 1000000000;

function validate_ind(frm, field_name, captionName, isCompulsory) {
	var fieldvalue = frm.elements[field_name].value;
	alpharegexpr = /^([a-zA-Z][a-zA-Z'. ]*)$/;

	if (isCompulsory == true) {
		// when flage is true then both validation fired.
		if (Trim(fieldvalue) == "") {
			value_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
	}
	if (Trim(fieldvalue) != "") {
		if (alpharegexpr.test(fieldvalue) != true) {
			valid_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
	}

	return true;
}

function validate_comp(frm, field_name, captionName, isCompulsory) {
	var fieldvalue = frm.elements[field_name].value;
	alpharegexpr = /^([a-zA-Z][a-zA-Z0-9&-/.' ]+)$/;

	if (isCompulsory == true) {
		if (Trim(fieldvalue) == "") {
			value_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
	}

	if (Trim(fieldvalue) != "") {
		if (alpharegexpr.test(fieldvalue) != true) {
			valid_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
		return true;
	}
	return true;
}
/*////USED FOR VALIDATING PHONE NO,MOBILE NO AND FAX NO////////////////*/
function validate_phonno(frm, field_name, captionName, isCompulsory) {
	var fieldvalue = frm.elements[field_name].value;
	alpharegexpr = /^([+]{0,1}[0-9]+[-]{0,1}[0-9]+)$/;
	if (isCompulsory == true) {
		if (Trim(fieldvalue) == "") {
			value_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
	}
	if (Trim(fieldvalue) != "") {
		if (alpharegexpr.test(fieldvalue) != true) {
			valid_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
		return true;
	}
	return true;
}

function validate_pincode(frm, field_name, captionName, foriegn, isCompulsory) {
	var fieldvalue = frm.elements[field_name].value;

	if (foriegn == "yes") alpharegexpr = /^([a-zA-Z0-9][a-zA-Z0-9]{1,20})$/;
	if (foriegn == "no") alpharegexpr = /^[0-9]{1,15}$/;

	if (isCompulsory == true) {
		if (Trim(fieldvalue) == "") {
			value_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
	}

	if (Trim(fieldvalue) != "") {
		if (alpharegexpr.test(fieldvalue) != true) {
			if (foriegn == "yes") {
				valid_common_alert_alphanumeric(captionName);
			}
			if (foriegn == "no") {
				valid_common_alert_numeric(captionName);
			}
			frm.elements[field_name].focus();
			return false;
		}
		return true;
	}
	return true;
}

function validate_chequeno(frm, field_name, captionName, isCompulsory) {
	var fieldvalue = frm.elements[field_name].value;
	alpharegexpr = /^([0-9]{1,6})$/;
	if (isCompulsory == true) {
		if (Trim(fieldvalue) == "") {
			value_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
	}

	if (Trim(fieldvalue) != "") {
		if (alpharegexpr.test(fieldvalue) != true) {
			valid_common_alert_numeric(captionName);
			frm.elements[field_name].focus();
			return false;
		}
		return true;
	}
	return true;
}

function validate_panno(frm, field_name, captionName, isCompulsory) {
	var fieldvalue = frm.elements[field_name].value;
	alpharegexpr = /^([a-zA-Z]{5,5}[0-9]{4,4}[a-zA-Z])$/;
	if (isCompulsory == true) {
		if (Trim(fieldvalue) == "") {
			value_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
	}

	if (Trim(fieldvalue) != "") {
		if (alpharegexpr.test(fieldvalue) != true) {
			valid_common_alert_alphanumeric(captionName);
			frm.elements[field_name].focus();
			return false;
		}
		return true;
	}
	return true;
}

function validate_amount(frm, field_name, captionName, isCompulsory) {
	var fieldvalue = frm.elements[field_name].value;
	alpharegexpr = /^([0-9]*[.]{0,1}[0-9]+)$/;
	if (isCompulsory == true) {
		if (Trim(fieldvalue) == "") {
			value_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
	}
	if (Trim(fieldvalue) != "") {
		if (alpharegexpr.test(fieldvalue) != true) {
			valid_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
		return true;
	}
	return true;
}

function validate_quantity(frm, field_name, captionName, isCompulsory) {
	var fieldvalue = frm.elements[field_name].value;
	alpharegexpr = /^([0-9]*[.]{0,1}[0-9]+)$/;
	if (isCompulsory == true) {
		if (Trim(fieldvalue) == "") {
			value_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
	}

	if (Trim(fieldvalue) != "") {
		if (alpharegexpr.test(fieldvalue) != true) {
			valid_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
		return true;
	}

	return true;
}

function validate_nav(frm, field_name, captionName, isCompulsory) {
	var fieldvalue = frm.elements[field_name].value;
	alpharegexpr = /^([0-9]*[.]{0,1}[0-9]+)$/;
	if (isCompulsory == true) {
		if (Trim(fieldvalue) == "") {
			value_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
	}

	if (Trim(fieldvalue) != "") {
		if (alpharegexpr.test(fieldvalue) != true) {
			valid_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
		return true;
	}

	return true;
}
function validate_age(frm, field_name, withDecimal, captionName, isCompulsory) {
	var fieldvalue = frm.elements[field_name].value;
	if (withDecimal == true) alpharegexpr = /^([1-9]*[.]{0,1}[0-9]+)$/;
	if (withDecimal == false) alpharegexpr = /^([1-9]*[0-9]+)$/;

	if (isCompulsory == true) {
		if (Trim(fieldvalue) == "") {
			value_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
	}

	if (Trim(fieldvalue) != "") {
		if (alpharegexpr.test(fieldvalue) != true) {
			valid_age_alert(captionName, "validAge");
			frm.elements[field_name].focus();
			return false;
		}
		if (fieldvalue > 150) {
			valid_age_alert(captionName, "ageLimit");
			frm.elements[field_name].focus();
			return false;
		}
		return true;
	}
	return true;
}
function validate_foliono(frm, field_name, captionName, isCompulsory) {
	var fieldvalue = frm.elements[field_name].value;
	var str = fieldvalue;
	alpharegexpr =
		/^([a-zA-Z0-9]+[/.-]{0,1}[a-zA-Z0-9]+[-.]{0,1}[a-zA-Z0-9]*)$/;

	if (isCompulsory == true) {
		if (Trim(fieldvalue) == "") {
			value_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
	}

	if (fieldvalue.length != 0) {
		if (alpharegexpr.test(fieldvalue) != true) {
			valid_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}

		if (str.indexOf(".") > 0) {
			if (str.indexOf(".") != str.lastIndexOf(".")) {
				valid_common_alert(captionName);
				frm.elements[field_name].focus();
				return false;
			}
		}
		if (str.indexOf("-") > 0) {
			if (str.indexOf("-") != str.lastIndexOf("-")) {
				valid_common_alert(captionName);
				frm.elements[field_name].focus();
				return false;
			}
		}

		return true;
	}
	return true;
}
function validate_email(frm, field_name, captionName, isCompulsory) {
	var fieldvalue = frm.elements[field_name].value;
	alpharegexpr = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

	if (isCompulsory == true) {
		if (Trim(fieldvalue) == "") {
			value_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
	}

	if (Trim(fieldvalue) != "") {
		if (alpharegexpr.test(fieldvalue) != true) {
			valid_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
		if (fieldvalue.length > 80) {
			valid_email_alert(captionName, 80);
			frm.elements[field_name].focus();
			return false;
		}
	}
	return true;
}

function validate_radio(frm, field_name, captioName, isCompulsory) {
	var count = 0;
	if (frm.elements[field_name].length > 0) {
		for (i = 0; i < frm.elements[field_name].length; i++) {
			if (frm.elements[field_name][i].checked) {
				count++;
				break;
			}
		}
	} else {
		if (frm.elements[field_name].checked) {
			count++;
		}
	}
	if (count == 0) {
		valid_radio_alert(captioName);
		return false;
	}
	return true;
}
function validate_checkbox(frm, field_name, captionName, isCompulsory) {
	var count = 0;
	if (frm.elements[field_name].length > 0) {
		for (i = 0; i < frm.elements[field_name].length; i++) {
			if (frm.elements[field_name][i].checked) {
				count++;
				break;
			}
		}
	} else {
		if (frm.elements[field_name].checked) {
			count++;
		}
	}
	if (count == 0) {
		valid_checkbox_alert(captionName);
		return false;
	}
	return true;
}

function validate_dropdown(frm, field_name, captionName, isCompulsory) {
	var field = frm.elements[field_name];
	if (field.multiple) {
		if (field.selectedIndex < 0) {
			valid_select_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
		return true;
	} else {
		if (field.selectedIndex == 0) {
			valid_select_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
		return true;
	}
}

function validate_select_limit(
	frm,
	field_name,
	captionName,
	limit,
	isCompulsory
) {
	var count = 0;
	for (i = 0; i < frm.elements[field_name].options.length; i++) {
		if (frm.elements[field_name].options[i].selected) {
			count++;
		}
	}
	if (count > limit) {
		valid_select_limit_alert(captionName, limit, isCompulsory);
		frm.elements[field_name].focus();
		return false;
	}
	return true;
}

function validate_password(frm, field_name, captionName, isCompulsory) {
	var fieldvalue = frm.elements[field_name].value;
	alpharegexpr =
		/^([0-9]*[a-zA-Z]+[a-zA-Z0-9!#$^\&~`()\\/{}<>"'-_+=\[\]:.]*)$/;
	if (alpharegexpr.test(fieldvalue) != true) {
		alert("Enter valid value for '" + captionName + "'.");
		frm.elements[field_name].focus();
		return false;
	}
	return true;
}
function validate_loginid(frm, field_name, captionName, isCompulsory) {
	var fieldvalue = frm.elements[field_name].value;
	alpharegexpr = /^([a-zA-Z0-9]+)$/;

	if (isCompulsory == true) {
		if (Trim(fieldvalue) == "") {
			value_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
	}

	if (Trim(fieldvalue) != "") {
		if (alpharegexpr.test(fieldvalue) != true) {
			valid_common_alert_alphanumeric(captionName);
			frm.elements[field_name].focus();
			return false;
		}
	}
	return true;
}

function validate_address(
	frm,
	field_name,
	captionName,
	isCompulsory,
	maxLength
) {
	var fieldvalue = frm.elements[field_name].value;
	alpharegexpr = /^([a-zA-Z0-9][a-zA-Z0-9()-/,. ]+)$/;

	if (isCompulsory == true) {
		if (Trim(fieldvalue) == "") {
			value_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
	}

	if (Trim(fieldvalue) != "") {
		if (alpharegexpr.test(fieldvalue) != true) {
			valid_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
		if (fieldvalue.length > maxLength) {
			valid_email_alert(captionName, maxLength);
			frm.elements[field_name].focus();
			return false;
		}
	}
	return true;
}
function validate_njbrcode(frm, field_name, captionName, isCompulsory) {
	var fieldvalue = frm.elements[field_name].value;
	alpharegexpr = /^([0-9a-zA-Z]*[(]{0,1}[0-9A-Za-z]+)$/;

	if (isCompulsory == true) {
		if (Trim(fieldvalue) == "") {
			value_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
	}
	if (Trim(fieldvalue) != "") {
		if (alpharegexpr.test(fieldvalue) != true) {
			valid_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
	}
	return true;
}
function validate_only_number(frm, field_name, captionName, isCompulsory) {
	var fieldvalue = frm.elements[field_name].value;
	alpharegexpr = /^([0-9]+)$/;

	if (isCompulsory == true) {
		if (Trim(fieldvalue) == "") {
			value_common_alert(captionName);
			frm.elements[field_name].focus();
			return false;
		}
	}
	if (Trim(fieldvalue) != "") {
		if (alpharegexpr.test(fieldvalue) != true) {
			valid_common_alert_numeric(captionName);
			frm.elements[field_name].focus();
			return false;
		}
		return true;
	}
	return true;
}
//-------------trim functions--------------

function Trim(TRIM_VALUE) {
	if (TRIM_VALUE.length < 1) return "";
	TRIM_VALUE = LTrim(TRIM_VALUE);
	TRIM_VALUE = RTrim(TRIM_VALUE);
	if (TRIM_VALUE == "") return "";
	else return TRIM_VALUE;
}
function RTrim(VALUE) {
	var w_space = String.fromCharCode(32);
	var w_enter = String.fromCharCode(10);
	var v_length = VALUE.length;
	var strTemp = "";
	if (v_length < 0) return "";
	var iTemp = v_length - 1;
	while (iTemp > -1) {
		if (VALUE.charAt(iTemp) == w_space || VALUE.charAt(iTemp) == w_enter)
			iTemp = iTemp - 1;
		else break;
	}
	strTemp = VALUE.substring(0, iTemp + 1);
	return strTemp;
}
function LTrim(VALUE) {
	var w_space = String.fromCharCode(32);
	var w_enter = String.fromCharCode(10);
	if (v_length < 1) return "";
	var v_length = VALUE.length;
	var strTemp = "";
	var iTemp = 0;
	while (iTemp < v_length) {
		if (VALUE.charAt(iTemp) == w_space || VALUE.charAt(iTemp) == w_enter)
			iTemp = iTemp + 1;
		else break;
	}
	strTemp = VALUE.substring(iTemp, v_length);
	return strTemp;
}
function myTrim(msg) {
	msg.value = Trim(msg.value);
}

//-----------alert Messages function starts here---------------

function valid_common_alert(caption) {
	caption = caption.replace('"', "'");
	alert("Please enter valid value for '" + caption + "'.");
}

function value_common_alert(caption) {
	caption = caption.replace('"', "'");
	alert("Please enter value for '" + caption + "'.");
}

function valid_age_alert(caption, validationFor) {
	caption = caption.replace('"', "'");
	if (validationFor == "ageLimit") {
		alert("'" + caption + "' should not be greater than 150.");
	} else {
		alert("Please enter valid value for '" + caption + "'.");
	}
}

function value_age_alert(caption) {
	caption = caption.replace('"', "'");
	alert("Please enter value for '" + caption + "'.");
}

function valid_email_alert(caption, maxLength) {
	caption = caption.replace('"', "'");
	alert(
		"'" +
			caption +
			"' should not be greater than " +
			maxLength +
			" characters."
	);
}

function valid_radio_alert(caption) {
	caption = caption.replace('"', "'");
	alert(" Please make selection for '" + caption + "'.");
}

function valid_select_alert(caption) {
	caption = caption.replace('"', "'");
	alert(" Please make selection for '" + caption + "'.");
}
function valid_select_limit_alert(caption, limit, isMandatory) {
	caption = caption.replace('"', "'");
	if (isMandatory == undefined || isMandatory == false) {
		alert(
			" Selected '" +
				caption +
				"' count should not be greater than " +
				limit +
				"."
		);
	} else {
		alert(
			"'" +
				caption +
				"' selection should not be greater than " +
				limit +
				". If you want to select all '" +
				caption +
				"', don't make any selection."
		);
	}
}

function valid_checkbox_alert(caption) {
	caption = caption.replace('"', "'");
	alert(" Please make selection for '" + caption + "'.");
}

function succes_add_alert(caption) {
	caption = caption.replace('"', "'");
	if (caption == "") caption = "Record";
	if (caption == "Record") alert(caption + " has been added successfully.");
	else alert("'" + caption + "' has been added successfully.");
}

function succes_update_alert(caption) {
	caption = caption.replace('"', "'");
	if (caption == "") caption = "Record";
	if (caption == "Record") alert(caption + " has been updated successfully.");
	else alert("'" + caption + "' has been updated successfully.");
}
function succes_delete_alert(caption) {
	caption = caption.replace('"', "'");
	if (caption == "") caption = "Record";
	if (caption == "Record") alert(caption + " has been deleted successfully.");
	else alert("'" + caption + "' has been deleted successfully.");
}

function delete_confirmation(caption) {
	caption = caption.replace('"', "'");
	if (caption == "" || caption == "Record") {
		if (caption == "") caption = "Record";
		if (confirm(" Are you sure you want to delete " + caption + " ?")) {
			return true;
		} else {
			return false;
		}
	} else {
		if (confirm(" Are you sure you want to delete '" + caption + "'?")) {
			return true;
		} else {
			return false;
		}
	}
}

function value_already_exists(caption) {
	caption = caption.replace('"', "'");
	if (caption == "") caption = "Record";
	if (caption == "Record") alert(caption + " already exists!");
	else alert("'" + caption + "' already exists!");
}

function value_already_exists(caption, value) {
	caption = caption.replace('"', "'");
	value = value == undefined ? "" : value.replace('"', "'");
	if (caption == "") {
		caption = "Record";
	}
	if (caption == "Record") {
		alert(caption + " already exists!");
	} else {
		if (value == "") {
			alert("'" + caption + "' already exists!");
		} else {
			alert("'" + caption + "' '" + value + "' already exists!");
		}
	}
}

function valid_common_alert_alphabets(caption) {
	caption = caption.replace('"', "'");
	alert("Please enter valid value (alphabets) for '" + caption + "'.");
}
function valid_common_alert_alphanumeric(caption) {
	caption = caption.replace('"', "'");
	alert("Please enter valid value (alphanumeric) for '" + caption + "'.");
}
function valid_common_alert_numeric(caption) {
	caption = caption.replace('"', "'");
	alert("Please enter valid value (numeric) for '" + caption + "'.");
}
