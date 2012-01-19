$(document).ready(function() {
    var FACE_SIZE = 16;
    var N_FACE_BITS = Math.pow(FACE_SIZE, 2);
    var N_FACES = 3;
    var faces = [];
	var $faces = $("div#faces");
    function zeroonetobool(x) {
		return !!Number(x);
	}
	for (var face = 0; face < N_FACES; face++) {
		faces[face] = [];
		while (faces[face].length < N_FACE_BITS) {
			var bits = Math.random().toString(2).substr(2).split("").map(zeroonetobool);
			while (bits.length < 32) {
				bits.push(false);
			}
			faces[face] = faces[face].concat(bits);
		}
		if (faces[face].length > N_FACE_BITS) {
			faces[face].splice(N_FACE_BITS);
		}
        var canvas = document.createElement('canvas');
        canvas.width = canvas.height = FACE_SIZE;
        $faces.append(canvas);
		var context = canvas.getContext("2d");
		context.fillStyle = "white";
		context.fillRect(0, 0, canvas.width, canvas.height);

		context.fillStyle = "black";
		for (var i = 0; i < faces[face].length; i++) {
			if (faces[face][i]) {
				var column = i % FACE_SIZE;
				var row = (i - column) / FACE_SIZE;
				context.fillRect(row, column, 1, 1);
			}
		}
	}

	//var dataURL = canvas.toDataURL();
	//$("#data").text(dataURL);
	//$("#i").attr("src",dataURL);
});