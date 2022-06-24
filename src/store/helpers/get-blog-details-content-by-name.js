import { blogName } from '../../constants/blog-name';
import { LegoStarwars } from '../../content/lego_starwars';

export const getBlogDetailsContentByName = (blogId) => {

  if(!blogId) {
    return null;
  }

  if(blogId === blogName.lego_starwars) {
    return LegoStarwars();
  }

  return null
}