import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
  const historyObject = useHistory();

  const handleDelete = function () {
    fetch(`http://localhost:8000/blogs/${id}`, { method: "DELETE" }).then(() => historyObject.push("/"));
  };

  return (
    <div className="blog-detail">
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
