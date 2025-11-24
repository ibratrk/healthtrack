import motivation from '../assets/motivation.jpg';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row w-full">
      <div className="md:w-1/2 flex flex-col justify-center p-6">
        <h1 className="text-5xl font-bold mb-6">About HealthTrack</h1>
        <p className="mb-6 text-lg">
          HealthTrack is a personal fitness and wellness web application designed to help you take control of your health journey. Whether you want to log meals, track your workouts, monitor your daily steps, or visualize your progress, HealthTrack makes it simple and motivating.
        </p>
        <p className="mb-6 text-lg">
          Developed with ReactJS and Tailwind CSS, this responsive app offers a seamless experience on both desktop and mobile devices. As a fitness coach, I built HealthTrack to empower users like you to stay consistent, informed, and inspired.
        </p>
        <p className="text-lg">
          Join us and start tracking your way to a healthier lifestyle!
        </p>
      </div>

      <div className="md:w-1/2">
        <img
          src={motivation}
          alt="Fitness motivation"
          className="w-full h-full object-cover rounded shadow"
        />
      </div>
    </div>
  );
}
