const fieldCodes = [
  'W', 'U', 'B', 'R', 'G'
]

const cardTypes = [
  'terre',
  'creature',
  'incantesimi',
  'artefatti',
  'instantanei',
  'stregonerie'
]

// Abbiamo creato un oggetto di oggetti, come riferimento
// di una edizione. Se ad esempio scrivo editions['SP']
// allora otterrò tutto un oggetto che descrive
// con più dettagli l'edizione.
// come oggetto di oggetti, può essere navigato solo con il for-in
const editions = {

  'BL': {
      edition: 'Boolean',
      rarity: 'blue'
  },

  'SP': {
      edition: 'Special',
      rarity: 'red'
  }

}


const cards = [{

  cardName: 'Grizzly Bears',

  cost: {
    genericCostNumber: 1,
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[0],  // 'W',  - un suo riferimento
      fieldCodes[2]   // 'B'
    ],
  },

  picture: 'images/i.png',
  cardType: cardTypes[1],
  cardObject: 'Bear',

  editionType: editions['BL'],

  description: 'Lorem ipsum',
  story: 'Naltro Lorem Ipsum',

  score: {
    power: 2,  // filtrarlo per power
    toughness: 2
  }

  },
  {

    cardName: 'Sviluppatore guerriero',

    cost: {
      genericCostNumber: 3,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[2],
        fieldCodes[3]
      ],
    },

    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[1],
    cardObject: 'Bear',

    editionType: editions['BL'],

    description: 'Lo sviluppatore guerriero spezza i byte in bit!',
    story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

    score: {
      power: 5,  // r
      toughness: 3
    }

    },

    {

      cardName: 'Francesco Totti',

      cost: {
        genericCostNumber: 1,
        costFields: [ // colors array con riferimento a fieldCodes
          fieldCodes[3],  // 'W',  - un suo riferimento
          fieldCodes[4]   // 'B'
        ],
      },

      picture: 'images/i.png',
      cardType: cardTypes[4],
      cardObject: 'Bear',

      editionType: editions['SP'],

      description: 'Lorem ipsum',
      story: 'Naltro Lorem Ipsum',

      score: {
        power: 4,  // filtrarlo per power
        toughness: 2
      }

      },

      {

        cardName: 'Goku',

        cost: {
          genericCostNumber: 1,
          costFields: [ // colors array con riferimento a fieldCodes
            fieldCodes[1],  // 'W',  - un suo riferimento
            fieldCodes[3]   // 'B'
          ],
        },

        picture: 'images/i.png',
        cardType: cardTypes[2],
        cardObject: 'Bear',

        editionType: editions['BL'],

        description: 'Lorem ipsum',
        story: 'Naltro Lorem Ipsum',

        score: {
          power: 3,  // filtrarlo per power
          toughness: 3
        }

        },

        {

          cardName: 'Regista Netflix',

          cost: {
            genericCostNumber: 1,
            costFields: [ // colors array con riferimento a fieldCodes
              fieldCodes[0],  // 'W',  - un suo riferimento
              fieldCodes[2]   // 'B'
            ],
          },

          picture: 'images/i.png',
          cardType: cardTypes[5],
          cardObject: 'Bear',

          editionType: editions['BL'],

          description: 'Lorem ipsum',
          story: 'Naltro Lorem Ipsum',

          score: {
            power: 1,  // filtrarlo per power
            toughness: 2
          }

          },
];

const powerLevel = [1,2,3,4,5];

console.log(cards);






function powerFilter (powerInput, array){
   return array.filter((item)=>{
     return item.score.power === powerInput;
   });
};

function typesFilter(typesInput, array){
  return array.filter((item)=>{
    return item.cardType === typesInput
  });
}



function htmlPrinter (htmlItem, array,) {

  const listContainer = document.getElementById(htmlItem);
  listContainer.innerHTML = "";

  array.forEach((item) => {

    listContainer.innerHTML += `
    <li>${item.cardName}</li>
    `;
  });
};






function selectValuesPrinter (htmlItem, array){
  const selectorList = document.getElementById(htmlItem);


  array.forEach((item) => {

    selectorList.innerHTML += `
    <option value ="${item}">${item}</option>

    `;
  });

};

// htmlPrinter('cards-container', cards);
selectValuesPrinter('select-form', powerLevel);
selectValuesPrinter('select-types', cardTypes);


$('#select-form').change(function() {

  const value = parseInt($(this).val());
  const filtered = powerFilter(value, cards);

  if (isNaN($(this).val()) ) {
    htmlPrinter('cards-container', cards);
  }else{
    htmlPrinter('cards-container', filtered);
  }
});


$('#select-types').change(function() {

  const value = $(this).val();
  const filtered = typesFilter(value, cards);

  if ( value === 'all') {
    htmlPrinter('cards-container', cards);
  }else{
    htmlPrinter('cards-container', filtered);
  }
});

$('#select-form').change();
