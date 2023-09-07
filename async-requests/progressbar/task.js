const form = document.getElementById('form')
const progress = document.getElementById('progress');

document.forms.form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();

    xhr.upload.addEventListener("progress", (e) => {
        let value = e.loaded / e.total
        progress.value = value
    })

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload")
    xhr.send(formData)
    console.log(xhr.responseText)
});