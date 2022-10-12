import { Blog } from './blog';
import style from './latest-news-and-blogs.module.scss';

export const LatestNewsAndBlogs = () => {
  return (
    <div className={style.latestNewsAndBlogsContainer}>
      <h1 className={style.title}>Latest News & Blogs</h1>
      <div className={style.blogItemsContainer}>
        <Blog id={'lego_starwars'} />
        <Blog id={'unidos'} />
      </div>
    </div>
  )
}