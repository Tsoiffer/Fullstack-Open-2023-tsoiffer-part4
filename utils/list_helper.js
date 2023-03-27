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
  if (blogs.length === 0) {
    return 0;
  }
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

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return 0;
  }
  const blogsForAthor = blogs.map((blog) => {
    return { author: blog.author, title: blog.title, likes: blog.likes };
  });
  const max = blogsForAthor.reduce(function (prev, current) {
    return prev.likes > current.likes ? prev : current;
  });
  return max;
};

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return 0;
  }
  const blogsForAthor = blogs.map((blog) => {
    const totalLikes = blogs
      .filter((otherBlog) => otherBlog.author === blog.author)
      .map((blog) => blog.likes)
      .reduce((partialSum, a) => partialSum + a, 0);
    console.log("total likes", totalLikes);
    return { author: blog.author, likes: totalLikes };
  });
  const max = blogsForAthor.reduce(function (prev, current) {
    return prev.likes > current.likes ? prev : current;
  });
  return max;
};

module.exports = {
  dummy,
  totalLikes,
  mostBlogs,
  favoriteBlog,
  mostLikes,
};
