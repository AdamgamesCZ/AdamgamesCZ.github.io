function changeContent(section) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => sec.style.display = 'none'); 

  
    if (section === 'logo') {
        document.getElementById('logo-content').style.display = 'block';
        document.getElementById('logo-img').style.display = 'block'; 
    } else {
        document.getElementById(`${section}-content`).style.display = 'block';
        document.getElementById('logo-img').style.display = 'none'; 
    }

   
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    document.getElementById(section).classList.add('active');
}



function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active'); 
}
