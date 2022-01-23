import { filmImages } from '../../constants/film-images'; 

export const mapImagesToFindImagePath = (filmTitle) => {

    const filmImg = filmImages.find((el) => {
        if(Object.keys(el).find(imgKey => imgKey === filmTitle.toString())) {
            return Object.values(el)
        }
        return false;
    })

    const filmImagePath = Object.values(filmImg)[0]

    return filmImagePath;
}