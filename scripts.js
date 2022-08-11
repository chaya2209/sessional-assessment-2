

document.querySelector('form.searchbox').addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    const searchValue = document.querySelector('#data-input');
    console.log(searchValue.value);


});