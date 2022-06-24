import { filmImages } from '../constants/film-images'

export const LegoStarwars = () => {
  return {
    titleImageContainer: filmImages[0]['A New Hope'],
    header: {
      date: 'LEGO STAR WARS // JUNE 21, 2022',
      title: 'BUILD CAD BANE’S SHIP FROM STAR WARS: THE BAD BATCH WITH A NEW LEGO CON 2022 REVEAL',
      subtitle: 'PLUS, THE AT-TE WALKER PLODS FROM STAR WARS: REVENGE OF THE SITH TO YOUR TOY SHELF.'
    },
    body: [
      {
        content: 'We are officially in pursuit of the Justifier! At the second annual LEGO CON 2022 last week, bounty hunter Cad Bane‘s ship from the first season of Star Wars: The Bad Batch, now streaming on Disney+, was revealed during the LEGO Groups’  live stream direct from LEGO House in Billund, Denmark.'
      },
      {
        img: filmImages[0]['A New Hope']
      }
    ]
  }
}