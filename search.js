function searchDefinition() {
  const word = document.getElementById('searchInput').value.trim();

  if (!word || /\d/.test(word)) {
    document.getElementById('searchResult').textContent = 'Please enter a valid word to search (no numbers allowed).';
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://main--mellow-torte-fc97e7.netlify.app/api/definitions?word=${encodeURIComponent(word)}`, true);

  xhr.onload = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        if (response.found) {
          document.getElementById('searchResult').innerHTML = `Word: ${word}<br>Definition: ${response.definition}<br>Request #: ${response.numberOfRequest}`;
        } else {
          document.getElementById('searchResult').textContent = `Word '${word}' not found.\nRequest #: ${response.numberOfRequest}`;
        }
      } else {
        document.getElementById('searchResult').textContent = 'Error: ' + xhr.status;
      }
    }
  };

  xhr.send();
}

