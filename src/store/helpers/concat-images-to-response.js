import { mapImagesToFindImagePath } from './map-images-to-find-image-path';

export const concatImagesToResponse = (data) => {
    const changedResponse = data.map((el) => {
        let nameOfSubject = el?.title ? el?.title : el?.name;
        console.log(nameOfSubject, 'nameOfSubject')
        const mappedImage = el['img'] = mapImagesToFindImagePath(nameOfSubject)
        return { ...el, mappedImage }
    });
    
    return changedResponse;
};