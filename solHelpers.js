// https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript/59578316#59578316
function saveFile(bytesBase64, mimeType, fileName) {
    let fileUrl = "data:" + mimeType + ";base64," + bytesBase64;
    fetch(fileUrl)
        .then(response => response.blob())
        .then(blob => {
            let link = window.document.createElement("a");
            link.href = window.URL.createObjectURL(blob, { type: mimeType });
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
}

// Checks if the given string is base64-encoded SharedObject (SOL) data
function isB64SOL(str) {
    try {
        let decodedData = atob(str);
        return decodedData.slice(6, 10) === 'TCSO';
    } catch(e) {
        return false;
    }
}

// Export SOL files from LocalStorage
function exportSharedObjects() {
    Object.keys(localStorage).forEach(function(key) {
        let solName = key.split('/').pop();
        let solData = localStorage.getItem(key);
        if (isB64SOL(solData)) {
            saveFile(solData, 'application/octet-stream', solName + '.sol');
        }
    });
}

// Export SOL file from data entered into HTML input boxes
function exportSOL() {
    const invalidDataMsg = 'Invalid data. Make sure to copy a LocalStorage value (without the key).';
    const invalidNameMsg = 'Please specify a filename.';
    const msgElem = document.getElementById('error');
    const b64DataBox = document.getElementById('base64textbox');
    const filenameBox = document.getElementById('filenametextbox');

    let solData = b64DataBox.value;
    if (!isB64SOL(solData)) {
        msgElem.innerHTML = invalidDataMsg;
        return;
    }

    let solName = filenameBox.value;
    if (!solName) {
        msgElem.innerHTML = invalidNameMsg;
        return;
    }
    if (solName.slice(-4) !== '.sol') {
        solName += '.sol';
    }

    msgElem.innerHTML = '';
    b64DataBox.value = '';
    filenameBox.value = '';
    saveFile(solData, 'application/octet-stream', solName);
}
