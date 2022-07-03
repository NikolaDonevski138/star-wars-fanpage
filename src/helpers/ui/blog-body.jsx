import style from './blog-body.module.scss';

export const BlogBody = (element) => {
  if(element?.content) {
    return (
      <div className={style.contentContainer}>
        <p>{element.content}</p>
      </div>
    )
  }

  if(element?.img) {
    return (
      <div className={style.imgContainer}>
        <img src={element.img} alt="slika"/>
      </div>
    )
  }

  return false;
}