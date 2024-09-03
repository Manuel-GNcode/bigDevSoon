const $character  = document.querySelectorAll('.character');
const $customizeItems = document.querySelector('#customize-items');
const $avatar = document.getElementById('avatar');

const customLook = {
  hair: [
    'hair/hair-1',
    'hair/hair-2',
    'hair/hair-3',
    'hair/hair-4',
    'hair/hair-5',
    'hair/hair-6',
    'hair/hair-7',
  ],
  eyes: [
    'eyes/eyes-1',
    'eyes/eyes-2',
    'eyes/eyes-3',
    'eyes/eyes-4',
    'eyes/eyes-5',
    'eyes/eyes-6',
  ],
  nose: [
    'nose/nose-1',
    'nose/nose-2',
    'nose/nose-3',
    'nose/nose-4',
    'nose/nose-5',
    'nose/nose-6',
  ],
  ears: [
    'ears/ears-1',
    'ears/ears-2',
    'ears/ears-3',
    'ears/ears-4',
    'ears/ears-5',
  ],
  mouth: [
    'mouth/mouth-1',
    'mouth/mouth-2',
    'mouth/mouth-3',
    'mouth/mouth-4',
    'mouth/mouth-5',
    'mouth/mouth-6',
  ],
  accessories: [
    'accessories/accessory-1',
    'accessories/accessory-2',
    'accessories/accessory-3',
    'accessories/accessory-4',
    'accessories/accessory-5',
  ],
}

let currentItem = 'hair';
const character = {
  base: 'default/basic-character',
  hair: 'hair/hair-1',
  eyes: 'eyes/eye-1',
  ears: 'ears/ear-1',
  nose: 'nose/nose-1',
  mouth: 'mouth/mouth-1',
  accessories: 'accessories/accessory-1',
}

const renderItems = (item)=>{
  $customizeItems.innerHTML = '';
  for (let i = 1; i < customLook[item].length; i++) {
    const img = document.createElement('img');
    img.classList.add('item');
    img.src = `assets/customize-look-preview-icons-right-side/${customLook[item][i-1]}.svg`;
    $customizeItems.appendChild(img);
  }
}

const renderCharacter = ()=>{
  $avatar.innerHTML = '';
  for (key in character) {
    const img = document.createElement('img');
    img.src = `assets/character-images-left-side/${character[key]}.png`;
    $avatar.appendChild(img);
  }
}

renderCharacter();
renderItems(currentItem);

$character.forEach((topic)=>{
  topic.addEventListener('click', (event)=>{
    $character.forEach((top)=>{top.classList.remove('active')})
    event.target.classList.add('active');
    currentItem = event.target.id;
    renderItems(currentItem);
  })
})
