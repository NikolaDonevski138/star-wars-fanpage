import { useEffect } from "react";
import { useSwapiBlogs } from "../../store/useSwapiBlogs";
import { BlogBody } from "../../helpers/ui/blog-body";
import { Circles } from "react-loader-spinner";
import { LoaderWrapper } from "../../helpers/ui/loader-wrapper";

import style from "./blog-detail.module.scss";

const BlogDetail = () => {
  const { getContentForBlog, setContentForBlog } = useSwapiBlogs((state) => ({
    getContentForBlog: state.contentForBlog,
    setContentForBlog: state.setContentForBlog,
  }));

  useEffect(() => {
    setContentForBlog();
  }, []);

  return getContentForBlog ? (
    <div className={style.BlogDetailContainer}>
      <div className={style.contentContainer}>
        <div className={style.titleImageContainer}>
          <img src={getContentForBlog.titleImageContainer} alt="image" />
        </div>
        <div className={style.bodyContainer}>
          <div className={style.headerContainer}>
            <p className={style.date}>{getContentForBlog.header.date}</p>
            <p className={style.title}>{getContentForBlog.header.title}</p>
            <p className={style.subtitle}>
              {getContentForBlog.header.subtitle}
            </p>
          </div>
          <div className={style.bodyItems}>
            {getContentForBlog.body.map((el) => {
              return BlogBody(el);
            })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <LoaderWrapper>
      <Circles />
    </LoaderWrapper>
  );
};

export default BlogDetail;
