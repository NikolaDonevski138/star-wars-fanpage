import { Blog } from './blog';
import style from './latest-news-and-blogs.module.scss';
import greatestShip from '../../assets/blogs/greatest_ships/greatest-ship-cover.png'
import unidos from '../../assets/blogs/unidos/unidos-cover.png'

export const LatestNewsAndBlogs = () => {
  return (
    <div className={style.latestNewsAndBlogsContainer}>
      <h1 className={style.title}>Latest News & Blogs</h1>
      <div className={style.blogItemsContainer}>
        <Blog id={'greatest_ship_starwars'} containerImage={greatestShip} blogName={"Greatest Ship in Star Wars"}/>
        <Blog id={'unidos'} containerImage={unidos} blogName={"Unidos"}/>
      </div>
    </div>
  )
}