import { useSwapiBlogs } from '../../store/useSwapiBlogs';
import { useNavigate } from 'react-router-dom';

import style from './blog.module.scss';


export const Blog = ({id, containerImage, blogName }) => {
  const { setBlogId } = useSwapiBlogs((state) => ({setBlogId: state.setBlogId}));

  const navigate = useNavigate();

  const onNavigate = () => {
    setBlogId(id)
    navigate('/blogdetail')
  }

  return (
      <div className={style.galeryContainer} onClick={onNavigate}>
        <div className={style.contentContainer}>
          <div className={style.imageContainer}>
            <img className={style.img} src={containerImage} alt="Skills Galery" />
          </div>
          <div className={style.descriptionContainer}>
            <p className={style.descriptionItem}>{blogName}</p>
          </div>
        </div>
        <div className={style.angleDivContainer}>
              <div className={style.shortenDiv}></div>
              <div className={style.transparentDiv}></div>
              <div className={style.angleDiv}></div>
        </div>
      </div>
  )
}