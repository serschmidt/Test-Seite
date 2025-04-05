// Test Seite

const 
receipts = [
  {id: 1, title: "Original Burger", price: 11.50, info: "mit Gurken, Tomaten, roten Zwiebeln und Burgersauce"},
  {id: 2, title: "Spaghetti Napoli", price: 11.00, info: "mit Tomatensauce"},
  {id: 3, title: "Maccheroni alla Pana", price: 13, info: "mit Champignons, Vorderschinken und Sahnesauce"},
  {id: 4, title: "Kebap im Fladenbrot", price: 8.5 , info: "Produktinfo"},
  {id: 5, title: "Kinder Kebap", price: 13, info: "mit einer Beilagen nach Wahl, Salat und Tzatziki"},
  {id: 6, title: "Türkische Pizza Spezial", price: 10, info: "mit Kebap-Drehspießfleisch und Tzatziki"},
  {id: 7, title: "Dürüm Kebap", price: 9, info: "mit Kebap-Drehspießfleisch und Tzatziki"},
  {id: 8, title: "Salat Tasche", price: 7, info: "im Fladenbrot"},
  {id: 9, title: "Pomm Tasche", price: 7.5, info: "im Fladenbrot mit Pommes frites"}
];

function findRecieptByTitle(receipts, searchText) {
  return receipts.filter(obj => 
    obj.title && obj.title.toLowerCase().includes(searchText.toLowerCase())
  );
;}

document.getElementById("gerichte").addEventListener("click", function() {
  const input = document.getElementById("gerichteInput").value.trim();
  const ergebnisse = findRecieptByTitle(receipts, input);

  const ausgabe = document.getElementById("gerichteContainer");
  ausgabe.innerHTML = `<div class="list-group">`;

  if (ergebnisse.length > 0) {
    ergebnisse.forEach(item => {
      ausgabe.innerHTML += `
                      <button type="button" class="list-group-item list-group-item-action">
                          <ul class="list-group">
                        <li class="list-group-item">${item.title}</li>
                        <li class="list-group-item">${item.price} €</li>
                        <li class="list-group-item">${item.info} </li>
                    </ul>
                    </button>`;
    });
    ausgabe.innerHTML += `</div">`;
    
  } else {
    ausgabe.innerHTML = "<p>Keine Treffer gefunden.</p></div>";
  }
});