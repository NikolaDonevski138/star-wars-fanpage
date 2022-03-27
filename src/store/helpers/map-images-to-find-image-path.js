import { filmImages } from '../../constants/film-images';

export const mapImagesToFindImagePath = (nameOfSubject) => {

    const filmImg = filmImages.find((el) => {
        if(Object.keys(el).find(imgKey => imgKey === nameOfSubject.toString())) {
            return Object.values(el)
        }
        return false;
    })

    if (filmImg === undefined) {
        return
    }

    const filmImagePath = Object.values(filmImg)[0]

    return filmImagePath;
}