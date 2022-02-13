// Your solution goes here 
function isStrongPassword(password) {
	if (password.length < 8) {
		return false;
	}
	if (password.indexOf("password") != -1) {
		return false;
	}
	for (i=0; i<password.length; i++) {
		if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
			return true;
		} 
	}
	return false;
}
