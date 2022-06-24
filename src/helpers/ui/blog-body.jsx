export const BlogBody = (element) => {
  if(element?.content) {
    console.log(element.content, 'element.content')
    return <p>{element.content}</p>
  }

  if(element?.img) {
    return <img src={element.img} alt="slika"/>
  }

  return false;
}