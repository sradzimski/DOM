let bloczki = document.querySelectorAll('.bloczki:last-child');

for (let i = 0; i < bloczki.length; i++) {
    bloczki[i].classList.add('takitam1');
}
let bloczki2 = document.querySelectorAll('.bloczki:nth-child(odd)');

for (let i = 0; i < bloczki2.length; i++) {
    bloczki2[i].classList.add('takitam2');
}
