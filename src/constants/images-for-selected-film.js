import newHope from "../assets/images/films/new_hope.png";
import empireStrikesBack from "../assets/images/films/empire_strikes_back.jpg";
import returnOfTheJedi from "../assets/images/films/return_of_the_jedi.jpg";
import thePhantomMeance from "../assets/images/films/phantom_meance.jpg";
import attackOfClones from "../assets/images/films/attack_of_clones.jpg";
import revengeOfTheSith from "../assets/images/films/revenge_of_the_sith.jpg";


export const imagesForSelectedFilm = {
  "A New Hope": {
    species: [
      {
        Human: newHope,
      },
      {
        Droid: newHope
      },
      {
        Wookie: newHope
      },
      {
        Hutt: newHope
      }
    ],
    vehicles: [
      {
        'Sand Crawler': empireStrikesBack
      },
      {
        'T-16 skyhopper': empireStrikesBack
      },
      {
        'X-34 landspeeder': empireStrikesBack
      },
      {
        'TIE/LN starfighter': empireStrikesBack
      }
    ]
  },
  // "The Empire Strikes Back",
  // "Return of the Jedi",
  // "The Phantom Menace",
  // "Attack of the Clones",
  // "Revenge of the Sith"
};
