import '../style/Home.css';

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the home page.</p>
      <Link to="/about">Learn more about us</Link>
    </div>
  );
}
