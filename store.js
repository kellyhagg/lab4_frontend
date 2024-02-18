// function addDefinition() {
//   const word = document.getElementById('wordInput').value;
//   const definition = document.getElementById('definitionInput').value;
//
//   if (!word || !definition) {
//     document.getElementById('storeResult').textContent = 'Please enter both the word and definition fields.';
//     return;
//   }
//
//   const xhr = new XMLHttpRequest();
//
//   // TODO: Change URL when not local, to whatever the backend is
//   xhr.open('POST', '', true);
//   xhr.setRequestHeader('Content-Type', 'application/json');
//
//   xhr.onload = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         document.getElementById('storeResult').textContent = JSON.parse(xhr.responseText).message;
//       } else {
//         document.getElementById('storeResult').textContent = 'Error: ' + xhr.status;
//       }
//     }
//   };
//
//   const data = JSON.stringify({ word, definition });
//   xhr.send(data);
// }

function addDefinition() {
  const word = document.getElementById('wordInput').value.trim();
  const definition = document.getElementById('definitionInput').value.trim();

  // Simple input validation to disallow empty strings or strings with numbers
  if (!word || !definition || /\d/.test(word) || /\d/.test(definition)) {
    document.getElementById('storeResult').textContent = 'Please enter valid word and definition (no numbers allowed).';
    return;
  }

  // TODO: add url
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://real-lacy-python.glitch.me/api/definitions', true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onload = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        document.getElementById('storeResult').textContent = JSON.parse(xhr.responseText).message;
      } else {
        document.getElementById('storeResult').textContent = 'Error: ' + xhr.status;
      }
    }
  };

  const data = JSON.stringify({ word, definition });
  xhr.send(data);
}
