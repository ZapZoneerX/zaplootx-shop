// Список товаров
const products = [
  { id: 1, name: "💎 100 кристаллов", price: 50 },
  { id: 2, name: "⚔️ Меч героя", price: 200 },
  { id: 3, name: "🛡️ Щит воина", price: 150 }
];

// Отображаем товары
const productsSection = document.getElementById("products");
products.forEach(p => {
  const div = document.createElement("div");
  div.innerHTML = `<h3>${p.name}</h3><p>Цена: ${p.price} монет</p><button onclick="buy(${p.id})">Купить</button>`;
  productsSection.appendChild(div);
});

// Функция покупки
function buy(id) {
  const item = products.find(p => p.id === id);
  alert(`✅ Ты купил: ${item.name} за ${item.price} монет`);
}

// Трейд между игроками
const tradeForm = document.getElementById("tradeForm");
const tradeList = document.getElementById("tradeList");

tradeForm.addEventListener("submit", e => {
  e.preventDefault();
  const offer = document.getElementById("offer").value;
  const want = document.getElementById("want").value;

  const li = document.createElement("li");
  li.textContent = `Игрок предлагает: ${offer} → хочет: ${want}`;
  tradeList.appendChild(li);

  tradeForm.reset();
});
