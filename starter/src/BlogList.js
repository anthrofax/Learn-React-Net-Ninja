import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blogs) => (
        <div className="blog-preview" key={blogs.id}>
          <Link to={`blogs/${blogs.id}`}>
            <h2>{blogs.title}</h2>
            <p>{blogs.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
