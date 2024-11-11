function changeContent(section) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => sec.style.display = 'none'); // Skryj všechny sekce

    // Zobraz sekci podle ID
    if (section === 'logo') {
        document.getElementById('logo-content').style.display = 'block';
        document.getElementById('logo-img').style.display = 'block'; // Zobraz obrázek v logo-content
    } else {
        document.getElementById(`${section}-content`).style.display = 'block';
        document.getElementById('logo-img').style.display = 'none'; // Skryj obrázek v ostatních sekcích
    }

    // Aktualizace aktivního odkazu
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    document.getElementById(section).classList.add('active');
}



function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active'); // Přepínání třídy pro zobrazení/skrývání menu
}



