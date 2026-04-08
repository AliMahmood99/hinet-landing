"use client";
import "./FormField.css";

export default function FormField({ lbl, htmlFor, placeholder }) {
  return (
    <div className="field">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700 mb-1.5"
      >
        {lbl}
      </label>
      <input
        type="text"
        id={htmlFor}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400"
      />
    </div>
  );
}
