import { unidosImages } from '../constants/unidos-images';

export const UnidosStarwars = () => {
  return {
    titleImageContainer: unidosImages.unidosCover,
    header: {
      date: 'INTERVIEWS // OCTOBER 10, 2022',
      title: 'UNIDOS: CELEBRATING LATINX REPRESENTATION IN THE GALAXY FAR, FAR AWAY',
      subtitle: 'FOR HISPANIC AND LATIN AMERICAN HERITAGE MONTH, STARWARS.COM SPEAKS WITH STAR WARS AUTHORS DANIEL JOSÉ OLDER AND ZORAIDA CÓRDOVA.'
    },
    body: [
      {
        content: 'While promoting Andor, series star Diego Luna was asked about his accent on ABC’s Soul of a Nation. “I love my accent,” Luna said, “and my accent, no one else can bring it.” Luna’s intentional use of his native Mexican inflection — particularly when he first played the role of Cassian Andor in 2016’s Rogue One: A Star Wars Story — was to many a notable choice worth celebrating.'
      },
      {
        content: '“A lot of my family members speak with an accent,” Zoraida Córdova, author of the upcoming Star Wars: The High Republic: Convergence, tells StarWars.com, “and though we are Ecuadorian and Diego Luna is Mexican, it just felt like home in a way.” '
      },
      {
        img: unidosImages.blogImg1
      },
      {
        img: unidosImages.blogImg2
      },
      {
        content: "Andor’s premiere has brought Hispanic representation specifically, and diversity at large, in Star Wars into focus — something worth noting as we celebrate Hispanic and Latin American Heritage Month. Not only is Luna headlining the show, with a cast that also includes Puerto Rican actress Adria Arjona, he is also an executive producer on the series. "
      },
      {
        content: "Building on the foundations laid by Jimmy Smits’ Bail Organa and Oscar Issac’s Poe Dameron, Luna’s Cassian Andor — and his accent — has helped to usher in a new era of Hispanic representation in our beloved galaxy. Since Rogue One’s premiere, Pedro Pascal’s Mandalorian has become almost ubiquitous and Rosario Dawson has brought fan favorite Ahsoka Tano from animation into live action."
      },
      {
        img: unidosImages.blogImg3
      }
    ]
  }
}