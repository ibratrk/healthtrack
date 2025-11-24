import featuresImage from '../assets/features.png';

export default function Features() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row w-full">
      <div className="md:w-1/2">
        <img
          src={featuresImage}
          alt="Features Illustration"
          className="w-full h-full object-cover rounded shadow"
        />
      </div>

      <div className="md:w-3/4 flex flex-col justify-center p-6">
        <h1 className="text-5xl font-bold mb-6">Key Features</h1>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li><strong>Meal & Workout Logging:</strong> Easily record your daily meals and exercise routines.</li>
          <li><strong>Activity Tracking:</strong> Monitor your steps, weight, and water intake to stay accountable.</li>
          <li><strong>Visual Progress Charts:</strong> Track your improvements over time with clear, interactive graphs.</li>
          <li><strong>Responsive Design:</strong> Access HealthTrack on any device with an intuitive interface powered by Tailwind CSS.</li>
          <li><strong>Easy Navigation:</strong> Seamlessly browse through different pages with React Router integration.</li>
        </ul>
      </div>
    </div>
  );
}
