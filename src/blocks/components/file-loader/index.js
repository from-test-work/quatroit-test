let reader;
const progressBar = document.getElementById('progress-bar');
const progress = progressBar.querySelector('.percent');
const progressAttr = progressBar.querySelector('.progress-circle');

function errorHandler(evt) {
    switch(evt.target.error.code) {
        case evt.target.error.NOT_FOUND_ERR:
            alert('File Not Found!');
            break;
        case evt.target.error.NOT_READABLE_ERR:
            alert('File is not readable');
            break;
        case evt.target.error.ABORT_ERR:
            break; // noop
        default:
            alert('An error occurred reading this file.');
    }
}
function updateProgress(evt) {
    // evt is an ProgressEvent.
    if (evt.lengthComputable) {
        let percentLoaded = Math.round((evt.loaded / evt.total) * 100);
        // Increase the progress bar length.
        if (percentLoaded < 100) {
            (percentLoaded > 50) ? progressAttr.classList.add('over50') : null;
            progress.textContent = percentLoaded + '%';
            progressAttr.dataset.percent = percentLoaded;
        }
    }
}
function handleFileSelect(evt) {
    // Reset progress indicator on new file selection.
    progress.textContent = '0%';

    reader = new FileReader();
    reader.onerror = errorHandler;
    reader.onprogress = updateProgress;
    reader.onabort = function(e) {
        alert('File read cancelled');
    };
    reader.onloadstart = function(e) {
        progressBar.className = 'loading';
    };
    reader.onload = function(e) {
        // Ensure that the progress bar displays 100% at the end.
        // progressAttr.dataset.percent = percentLoaded;
        progress.textContent = '100%';
        progressAttr.dataset.percent = 100;
        // setTimeout("progressBar.className='';", 2000);
    };

    // Read in the image file as a binary string.
    reader.readAsBinaryString(evt.target.files[0]);
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);
