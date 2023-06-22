import '../styles/Spinner.css';

export default function Spinner() {
  return (
    <div className="w-full h-full flex items-center align-middle justify-center spinner-container">
      <div className="loading-spinner mt-32"></div>
    </div>
  );
}
