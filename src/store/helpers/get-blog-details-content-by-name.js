import { blogName } from '../../constants/blog-name';
import { LegoStarwars } from '../../content/lego_starwars';
import { UnidosStarwars } from '../../content/unidos_starwars';

export const getBlogDetailsContentByName = (blogId) => {

  if(!blogId) {
    return null;
  }

  if(blogId === blogName.lego_starwars) {
    return LegoStarwars();
  }

  if(blogId === blogName.unidos) {
    return UnidosStarwars();
  }

  return null
}