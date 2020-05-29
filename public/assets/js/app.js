
var planes     = 11,
	z_position = 99;

// Cursor action listener
AFRAME.registerComponent('cursor-listener', {
	init: function () {
		this.el.addEventListener('mouseenter', function(evt) {
			z_position--;
			if (z_position < 9) {
				z_position = 99;
			}

			this.setAttribute('position', '0 0 -4.' + z_position);
			this.setAttribute('rotation', '0 0 0');

			this.removeAttribute('cursor-listener');
			this.setAttribute('show-listener', '');
		});
	}
});

// Cursor action slider
AFRAME.registerComponent('show-listener', {
	init: function () {
		this.el.addEventListener('mouseup', function(evt) {
			var position = randomPosition(-16, 8),
				rotation = randomRotation();

			this.setAttribute('position', position);
			this.setAttribute('rotation', rotation);

			this.setAttribute('cursor-listener', '');
			this.removeAttribute('show-listener');
		});
	}
});

/**
 * Preload Items
 */
function preloadItems() {
	var assets = document.querySelector('a-assets'),
		items = [];

	for (var i = 1; i < planes; i++) {
		items[i] = document.createElement('img');
		items[i].setAttribute('id', 'item-' + i);
		items[i].setAttribute('src', 'public/uploads/' + i + '.jpg');

		assets.appendChild(items[i]);
	}
}

/**
 * Populate Sphere
 */
function populateSphere() {
	var sky = document.querySelector('a-scene');
	for (var i = 1; i < planes; i++) {
		var position = randomPosition(-8, 8),
			rotation = randomRotation();

		item = document.createElement('a-image');

		item.setAttribute('src', '#item-' + i);

		item.setAttribute('position', position);
		item.setAttribute('rotation', rotation);
		item.setAttribute('scale', '8 8 8');

		item.setAttribute('cursor-listener', '');

		sky.appendChild(item);
	}
}

/**
 * Observe position
 */
function observePosition() {
	var cursor = document.getElementById('cursor');

	var	x = cursor.x,
		y = cursor.y,
		z = cursor.z;

	var numbers = {};

	alert(Object.keys(cursor));
	alert(Object.values(cursor));

	numbers.x = x;
	numbers.y = y;
	numbers.z = z;

	return numbers;
}

/**
 * Random Position
 */
function randomPosition(min = 0, max = 1) {
	var numbers = {},

		x = Math.floor(Math.random() * (max - min + 1)) + min,
		y = Math.floor(Math.random() * (max - min + 1)) + min,
		z = Math.floor(Math.random() * (max - min + 1)) + min;

	numbers.x = x;
	numbers.y = y;
	numbers.z = z;

	return numbers;
}

/**
 * Random Rotation
 */
function randomRotation(min = 0, max = 180) {
	var numbers = {},
		x = Math.floor(Math.random() * (max - min + 1) + min),
		y = Math.floor(Math.random() * (max - min + 1) + min),
		z = Math.floor(Math.random() * (max - min + 1) + min);

	numbers.x = x;
	numbers.y = y;
	numbers.z = z;

	return numbers;
}

/**
 * Setup
 */
function setup() {
	preloadItems();
	populateSphere();
	randomPosition();
	randomRotation();
}

setup();
