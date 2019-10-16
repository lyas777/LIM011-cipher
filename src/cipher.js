window.cipher = {
	// Acá escribe tu código.
	encode: (mensaje, offset) => {
		let oldASCCI = 0;
		let newASCCI = 0;
		offset = parseInt(offset);
		let newMensaje = '';
		for (let i = 0; i < mensaje.length; i++) {
			oldASCCI = mensaje[i].charCodeAt();
<<<<<<< HEAD
			if (oldASCCI == 10) {newASCCI = 10;
=======
<<<<<<< HEAD
			if (oldASCCI == 10) {newASCCI = 10;
=======
			if (oldASCCI == 10) {
				newASCCI = 10;
>>>>>>> f27969b46167a7d515718b40d8d73091df0d52d0
>>>>>>> e565711ca69c2a5889b95f9080c1963536ae07ff
			} else if (oldASCCI >= 32 && oldASCCI <= 64) {
				newASCCI = (oldASCCI - 32 + offset) % 33 + 32;
			} else if (oldASCCI >= 65 && oldASCCI <= 90) {
				newASCCI = (oldASCCI - 65 + offset) % 26 + 65;
			} else if (oldASCCI >= 97 && oldASCCI <= 122) {
				newASCCI = (oldASCCI - 97 + offset) % 26 + 97;
			} else {
				newASCCI = "";
			} 
			newMensaje = newMensaje.concat(String.fromCharCode(newASCCI));
		}
		return newMensaje;
	},
	decode: (mensaje, offset) => {
		let oldASCCI = 0;
		let newASCCI = 0;
		offset = parseInt(offset);
		let newMensaje = '';
		for (let i = 0; i < mensaje.length; i++) {
			oldASCCI = mensaje.charCodeAt(i);
			if (oldASCCI == 10) {
				newASCCI = 10;
			} else if (oldASCCI >= 32 && oldASCCI <= 64) {
				newASCCI = (oldASCCI - 32 - offset) % 33;
				if (newASCCI < 0) {newASCCI = newASCCI + 32 + 33;
				} else {
					newASCCI = newASCCI + 32;
				}
			} else if (oldASCCI >= 65 && oldASCCI <= 90) {
				newASCCI = (oldASCCI - 65 - offset) % 26;
				if (newASCCI < 0) {
					newASCCI = newASCCI + 65 + 26;
				} else {
					newASCCI = newASCCI + 65;
				}
			} else if (oldASCCI >= 97 && oldASCCI <= 122) {
				newASCCI = (oldASCCI - 97 - offset) % 26;
				if (newASCCI < 0) {
					newASCCI = newASCCI + 97 + 26;
				} else {
					newASCCI = newASCCI + 97;
				}
			}
			newMensaje = newMensaje.concat(String.fromCharCode(newASCCI));
		}
		return newMensaje;
	}
};
