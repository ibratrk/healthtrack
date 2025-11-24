import contactUs from '../assets/contactUs.jpg';

export default function Contact() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>

      <p className="mb-4 text-lg">
        Have questions, feedback, or need support? We are here to help!
      </p>
      <p className="mb-4 text-lg">
        You can reach us via email at&nbsp;
        <a href="mailto:support@healthtrack.com" className="text-blue-600 underline">
          support@healthtrack.com
        </a>
      </p>
      <p className="mb-4 text-lg">
        Or connect with me on social media: <span className="font-semibold">@ibrathlete</span>
      </p>

      <img
        src={contactUs}
        alt="Contact Us"
        className="rounded shadow w-full object-cover mt-6"
      />
    </div>
  );
}
