
var planes = 11;

// preload items
function preloadItems() {
	var assets = document.querySelector('a-assets'),
		items = [];
	for (var i = 1; i < planes; i++) {
		items[i] = document.createElement('img');
		items[i].setAttribute('id', 'item' + i);
		items[i].setAttribute('src', './assets/img/' + i + '.jpg');
		assets.appendChild(items[i]);
	}
}
preloadItems();

// populate
function populateSphere() {
	var sky = document.querySelector('a-scene');
	for (var i = 1; i < planes; i++) {
		var position = randomPosition(),
			rotation = randomRotation();

		item = document.createElement('a-image');
		item.setAttribute('src', '#item' + i);
		item.setAttribute('position', position);
		item.setAttribute('rotation', rotation);
		item.setAttribute('scale', '8 8 8');
		sky.appendChild(item);
	}
}
populateSphere();

// random position
function randomPosition() {
	var numbers = {},
		max = 16,
		min = -16,
		x = Math.floor(Math.random() * (max - min + 1)) + min,
		y = Math.floor(Math.random() * (max - min + 1)) + min,
		z = Math.floor(Math.random() * (max - min + 1)) + min;

	numbers.x = x;
	numbers.y = y;
	numbers.z = z;
	return numbers;
}
randomPosition();

// random rotation
function randomRotation() {
	var numbers = {},
		max = 180,
		min = 45,
		x = Math.floor(Math.random() * (max - min + 1) + min),
		y = Math.floor(Math.random() * (max - min + 1) + min),
		z = Math.floor(Math.random() * (max - min + 1) + min);

	numbers.x = x;
	numbers.y = y;
	numbers.z = z;
	return numbers;
}
randomRotation();
