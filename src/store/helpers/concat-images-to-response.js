import { mapImagesToFindImagePath } from './map-images-to-find-image-path';

export const concatImagesToResponse = (data) => {
    const changedResponse = data.map((el) => {
        const mappedImage = el['img'] = mapImagesToFindImagePath(el.title)
        return { ...el, mappedImage }
    });
    
    return changedResponse;
};