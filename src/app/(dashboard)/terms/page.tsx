import { FaCheckCircle } from "react-icons/fa";

function Terms() {
  return (
    <div className="mx-auto p-4">
      <h1 className="bg-black text-white p-6 text-4xl font-semibold text-center rounded-lg">
        Terms and Conditions
      </h1>

      <div className="mt-6 space-y-4">
        <p className="text-gray-700 text-lg flex items-center">
          <FaCheckCircle className="text-green-600 mr-4" />
          Our terms and conditions were last updated on <span className="font-semibold">23-02-2025</span>.
        </p>

        <p className="text-gray-700 text-lg flex items-center">
          <FaCheckCircle className="text-green-600 mr-4" />
          By using our website, you agree to our terms and conditions.
        </p>

        <p className="text-gray-700 text-lg flex items-center">
          <FaCheckCircle className="text-green-600 mr-4" />
          Please read our terms and conditions carefully before using our website.
        </p>

        <p className="text-gray-700 text-lg flex items-center">
          <FaCheckCircle className="text-green-600 mr-4" />
          If you do not want to be bound by our terms and conditions, please do not use <span className="font-semibold">Tutly</span>.
        </p>

        <p className="text-gray-700 text-lg flex items-center">
          <FaCheckCircle className="text-green-600 mr-4" />
          Tutly only grants the use and access of the website, its features, and its content to those who have accepted its terms and conditions.
        </p>

        <p className="text-gray-700 text-lg flex items-center">
          <FaCheckCircle className="text-green-600 mr-4" />
          In case of unusual behavior, we reserve the right to terminate your account and prohibit you from using our website.
        </p>
      </div>
    </div>
  );
}

export default Terms;
