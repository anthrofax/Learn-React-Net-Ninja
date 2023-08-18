import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("izana");
  const [isPending, setIsPending] = useState(false);

  const historyObject = useHistory();

  const handleSubmit = function (e) {
    e.preventDefault();
    const blogData = { title, body, author };

    setIsPending(true);

    setTimeout(function () {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      }).then(function () {
        setIsPending(false);
        // historyObject.go(-1);
        historyObject.push("/");
      });
    }, 3000);
  };

  return (
    <div className="create">
      <h2>Add New Blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog Title :</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Blog Body :</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>

        <label>Blog Title :</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="izana">Izana</option>
          <option value="andrew">Andrew</option>
        </select>

        {!isPending && <button>Add new blog</button>}
        {isPending && <button disabled>Adding a new blog...</button>}
      </form>
    </div>
  );
};

export default Create;
