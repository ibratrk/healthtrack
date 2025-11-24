import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h1 className="text-5xl font-extrabold mb-6 text-blue-600">Welcome to HealthTrack</h1>
      <p className="text-xl mb-6">
        Your personal fitness and wellness companion designed to help you stay on track with your health goals.
      </p>
      <p className="text-lg mb-8">
        Log meals, workouts, steps, weight, and water intake all in one place. Get motivated, stay consistent, and watch your progress grow.
      </p>
      <button
        onClick={() => navigate("/dynamic")}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Get Started!
      </button>
    </div>
  );
}
