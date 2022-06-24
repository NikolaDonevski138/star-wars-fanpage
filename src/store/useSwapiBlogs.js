import create from 'zustand';
import { getBlogDetailsContentByName } from './helpers/get-blog-details-content-by-name';

export const useSwapiBlogs = create((set, get) => ({
    blogId: "",
    contentForBlog: null,
    setBlogId(blogId) {
      set({blogId: blogId});
    },
    setContentForBlog() {
      const { blogId } = get();
      const content = getBlogDetailsContentByName(blogId);
      set({contentForBlog: content});
    }
}))