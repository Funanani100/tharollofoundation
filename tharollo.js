/*
window.addEventListener('load', function() {
var features = document.querySelectorAll('.feature');

features.forEach(function(feature) {
var paragraph = feature.querySelector('p');
var content = paragraph.textContent;
var words = content.split(' ');

if (words.length > 70) {
var collapsedContent = words.slice(0, 70).join(' ');
var expandedContent = words.join(' ');

paragraph.innerHTML = collapsedContent + '... <span class="expanded-content">' + expandedContent + '</span>';

var readMoreButton = feature.querySelector('.read-more');
readMoreButton.style.display = 'block';

readMoreButton.addEventListener('click', function() {
    var expandedText = feature.querySelector('.expanded-content');

    if (paragraph.classList.contains('collapsed')) {
    paragraph.classList.remove('collapsed');
    readMoreButton.textContent = 'Read less';
    } else {
    paragraph.classList.add('collapsed');
    readMoreButton.textContent = 'Read more';
    }
});
}
});
});

*/