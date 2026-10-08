/* Mengisi halaman dari config.js. Biasanya tidak perlu diedit. */
const $ = (id) => document.getElementById(id);
const rupiah = (n) => "Rp" + n.toLocaleString("id-ID");

function tabs(container, labels, onSelect) {
  container.innerHTML = "";
  labels.forEach((label, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = label;
    b.setAttribute("aria-pressed", i === 0);
    b.onclick = () => {
      [...container.children].forEach((c) => c.setAttribute("aria-pressed", c === b));
      onSelect(label);
    };
    container.appendChild(b);
  });
  onSelect(labels[0]);
}

function renderMenu(cat) {
  $("menuList").innerHTML = MENU[cat].map((m) =>
    `<li><div><h3>${m.name}</h3><p>${m.desc || ""}</p></div>${m.price ? `<span>${rupiah(m.price)}</span>` : ""}</li>`
  ).join("");
}

function renderOutlets(city) {
  $("outletList").innerHTML = OUTLETS.filter((o) => o.city === city).map((o) =>
    `<li><h3>${o.name}</h3><p>${o.address || "Alamat segera tersedia"}</p>` +
    (o.maps ? `<a href="${o.maps}" target="_blank" rel="noopener">Buka di Maps</a>` : "") + `</li>`
  ).join("");
}

function init() {
  document.title = `${SITE.name} — Kopi, tempat nongkrong, dan ruang kerja`;
  $("brandName").textContent = SITE.name;
  $("statYear").textContent = SITE.foundedYear;
  $("statOutlets").textContent = OUTLETS.length + "+";
  $("hours").textContent = SITE.hours;
  $("footerText").textContent = SITE.footer;
  $("menuNote").textContent = MENU_NOTE;

  if (SITE.heroImage) $("heroPhoto").style.backgroundImage = `url('${SITE.heroImage}')`;

  tabs($("menuTabs"), Object.keys(MENU), renderMenu);
  tabs($("cityTabs"), [...new Set(OUTLETS.map((o) => o.city))], renderOutlets);

  const links = [];
  if (SITE.whatsapp) links.push(`<a href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noopener">WhatsApp</a>`);
  if (SITE.instagram) links.push(`<a href="${SITE.instagram}" target="_blank" rel="noopener">Instagram</a>`);
  if (SITE.email) links.push(`<a href="mailto:${SITE.email}">Email</a>`);
  $("contactLinks").innerHTML = links.join("") || "<p>Isi kontak di js/config.js.</p>";
}
init();
