function copyToClipboard(selector) {
    const element = document.querySelector(selector);
    const text = element.innerText;

    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard: ' + text);
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
}