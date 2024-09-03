const $character  = document.querySelectorAll('.character');
const $customizeItems = document.querySelector('#customize-items');
const $avatar = document.getElementById('avatar');

const linkAssets = 'assets/character-images-left-side/';
let currentItem = 'hair';
const character = {
  base: 'default/basic-character.png',
  hair: 'hair/hair-1.png',
  eyes: 'eyes/eye-1.png',
  ears: 'ears/ear-1.png',
  nose: 'nose/nose-1.png',
  mouth: 'mouth/mouth-1.png',
  accessories: 'accessories/accessory-4.png',
}

const renderItems = (item)=>{
  for (let index = 1; index < 7; index++) {
    const img = document.createElement('img');
    img.classList.add('item');
    img.src = `assets/customize-look-preview-icons-right-side/${item}/${item}-${index}.svg`;
    $customizeItems.appendChild(img);
  }
}

const renderCharacter = ()=>{
  $avatar.innerHTML = '';
  for (key in character) {
    const img = document.createElement('img');
    img.src = `assets/character-images-left-side/${character[key]}`;
    $avatar.appendChild(img);
  }
}

renderCharacter();
renderItems(currentItem);