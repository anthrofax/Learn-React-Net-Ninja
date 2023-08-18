import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>Halaman yang anda buka tidak tersedia.</p>
      <Link to="/">Kembali ke halaman utama.</Link>
    </div>
  );
};

export default NotFound;
