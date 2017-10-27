// JavaScript Document

$(document).ready(function () {
	// Check if there is anything in local storage and update cart in nav.
	var cartArray = JSON.parse(localStorage.getItem("savePillow")) || [];
	if (cartArray.length == 0) {
		document.getElementById("nav-cart").innerHTML = "Cart (0)";
	} else {
		document.getElementById("nav-cart").innerHTML = "Cart (" + (JSON.parse(localStorage.getItem("savePillow"))).length + ")";
	}

	/*** Object Constructors ***/
	function Pillow(name, type, shape, typeImage, shapeImage, price, quantity, subtotal) {
		this.name = name;
		this.type = type;
		this.shape = shape;
		this.typeImage = typeImage;
		this.shapeImage = shapeImage;
		this.price = price;
		this.quantity = quantity;
		this.subtotal = subtotal;
	}

	/*** Functions ***/
	// Change tyep image.
	$("#type-select").change(function () {
		var pillowType = document.getElementById("type-select").value;
		document.getElementById("product-type").innerHTML = pillowType;
		if (pillowType === "Couch Pillow") {
			document.getElementById("main-photo").src = "img/details/main-product-couch.png";
			document.getElementById("product-price").innerHTML = "$40";
		} else if (pillowType === "Bed Pillow") {
			document.getElementById("main-photo").src = "img/details/main-product-bed.jpg";
			document.getElementById("product-price").innerHTML = "$30";
		} else if (pillowType === "Round Pillow") {
			document.getElementById("main-photo").src = "img/details/main-product-round.jpg";
			document.getElementById("product-price").innerHTML = "$35";
		} else {
			document.getElementById("main-photo").src = "img/details/main-product-floor.jpg";
			document.getElementById("product-price").innerHTML = "$50";
		}
	});

	// Change shape image.
	$("#shape-select").change(function () {
		var pillowShape = document.getElementById("shape-select").value;
		document.getElementById("product-shape").innerHTML = pillowShape;
		if (pillowShape === "Square") {
			document.getElementById("shape-img").src = "img/details/shapes-square.png";
		} else if (pillowShape === "Round") {
			document.getElementById("shape-img").src = "img/details/shapes-round.png";
		} else if (pillowShape === "Dog") {
			document.getElementById("shape-img").src = "img/details/shapes-dog.png";
		} else if (pillowShape === "Bear") {
			document.getElementById("shape-img").src = "img/details/shapes-bear.png";
		} else if (pillowShape === "Bunny") {
			document.getElementById("shape-img").src = "img/details/shapes-bunny.png";
		} else {
			document.getElementById("shape-img").src = "img/details/shapes-cat.png";
		}
	});

	// Local storage.
	$(".add-cart-btn").click(function () {
		$("#item-confirmation").css("display", "block");
		$(".content-wrapper").css("top", "40px");
		// Store all data into variables.
		var name = document.getElementById("product-name").innerHTML;
		var type = document.getElementById("type-select").value;
		var shape = document.getElementById("shape-select").value;
		var typeImage = document.getElementById("main-photo").getAttribute("src");
		var shapeImage = document.getElementById("shape-img").getAttribute("src");
		var price = document.getElementById("product-price").innerHTML;
		var quantity = document.getElementById("quantity").value;
		var subtotal = Number(price.substring(1, price.length)) * quantity;

		// Put data into local storage.
		var pillowToAdd = new Pillow(name, type, shape, typeImage, shapeImage, price, quantity, subtotal);
		cartArray.push(pillowToAdd);
		localStorage.setItem("savePillow", JSON.stringify(cartArray));document.getElementById("nav-cart").innerHTML = "Cart (" + (JSON.parse(localStorage.getItem("savePillow"))).length + ")";
	});

});
