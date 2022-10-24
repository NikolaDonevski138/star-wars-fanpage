import { blogName } from '../../constants/blog-name';
import { GreatestShipStarwars } from '../../content/greatest_ship_starwars';
import { UnidosStarwars } from '../../content/unidos_starwars';

export const getBlogDetailsContentByName = (blogId) => {

  if(!blogId) {
    return null;
  }

  if(blogId === blogName.greatest_ship) {
    return GreatestShipStarwars();
  }

  if(blogId === blogName.unidos) {
    return UnidosStarwars();
  }

  return null
}