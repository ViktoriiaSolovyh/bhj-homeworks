const fileInput = document.querySelector('input[type=file]');
const progressBar = document.getElementById('progress');

fileInput.addEventListener('change', function() {
	const xhr = new XMLHttpRequest();
	const formData = new FormData();
	formData.append('file', fileInput.files[0]);

	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

	xhr.upload.addEventListener('progress', function(event) {
		if (event.lengthComputable) {
			const percentComplete = event.loaded / event.total;
			progressBar.value = percentComplete;
		}
	}, false);

	xhr.addEventListener('load', function(event) {
	}, false);

	xhr.addEventListener('error', function(event) {
	}, false);

	xhr.send(formData);
});