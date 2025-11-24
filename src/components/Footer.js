export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-4 mt-12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} HealthTrack. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="https://instagram.com/ibrathlete" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Instagram</a>
          <a href="mailto:support@healthtrack.com" className="underline hover:text-gray-300">Email</a>
        </div>
      </div>
    </footer>
  );
}
