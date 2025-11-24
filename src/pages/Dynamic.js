import { useState } from "react";

export default function Dynamic() {
  const [logs, setLogs] = useState([]);
  const [formData, setFormData] = useState({
    meal: "",
    workout: "",
    steps: "",
    weight: "",
    water: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      formData.steps === "" ||
      formData.weight === "" ||
      formData.water === "" ||
      isNaN(formData.steps) ||
      isNaN(formData.weight) ||
      isNaN(formData.water)
    ) {
      alert("Please enter valid numbers for steps, weight, and water intake.");
      return;
    }

    setLogs(prev => [formData, ...prev]);

    setFormData({
      meal: "",
      workout: "",
      steps: "",
      weight: "",
      water: "",
    });
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Daily Logs</h1>

      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow space-y-4">
  <div className="flex flex-col md:flex-row md:space-x-4">
    <div className="flex-1">
      <label className="block font-semibold mb-1">Meal Description</label>
      <input
        type="text"
        name="meal"
        value={formData.meal}
        onChange={handleChange}
        placeholder="What did you eat?"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div className="flex-1 mt-4 md:mt-0">
      <label className="block font-semibold mb-1">Workout Description</label>
      <input
        type="text"
        name="workout"
        value={formData.workout}
        onChange={handleChange}
        placeholder="Your workout details"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  </div>

  <div className="flex flex-col md:flex-row md:space-x-4">
    <div className="flex-1">
      <label className="block font-semibold mb-1">Steps</label>
      <input
        type="number"
        name="steps"
        value={formData.steps}
        onChange={handleChange}
        placeholder="Number of steps"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div className="flex-1 mt-4 md:mt-0">
      <label className="block font-semibold mb-1">Weight (kg)</label>
      <input
        type="number"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
        placeholder="Your weight"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div className="flex-1 mt-4 md:mt-0">
      <label className="block font-semibold mb-1">Water Intake (liters)</label>
      <input
        type="number"
        step="0.1"
        name="water"
        value={formData.water}
        onChange={handleChange}
        placeholder="Water consumed"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  </div>

  <button
    type="submit"
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
  >
    Add Log
  </button>
</form>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Logged Entries</h2>
        {logs.length === 0 && <p>No entries yet.</p>}
        {logs.map((log, index) => (
          <div key={index} className="bg-white p-4 mb-4 rounded shadow">
            <p><strong>Meal:</strong> {log.meal || "-"}</p>
            <p><strong>Workout:</strong> {log.workout || "-"}</p>
            <p><strong>Steps:</strong> {log.steps}</p>
            <p><strong>Weight:</strong> {log.weight} kg</p>
            <p><strong>Water Intake:</strong> {log.water} liters</p>
          </div>
        ))}
      </div>
    </div>
  );
}
