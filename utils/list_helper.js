const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item;
  };
  return blogs.length === 0
    ? 0
    : blogs.map((blog) => blog.likes).reduce(reducer, 0);
};

const mostBlogs = (blogs) => {
  const blogsForAthor = blogs.map((blog) => {
    const totalBlogs = blogs.filter(
      (otherBlog) => otherBlog.author === blog.author
    ).length;
    return { author: blog.author, blogs: totalBlogs };
  });
  const max = blogsForAthor.reduce(function (prev, current) {
    return prev.blogs > current.blogs ? prev : current;
  });
  return max;
};

module.exports = {
  dummy,
  totalLikes,
  mostBlogs,
};
