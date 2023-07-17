import { montse } from "@/app/layout";

export default function InputField({ label, type, id, placeholder, value, onChange }) {
  return (
    <div>
      <label htmlFor={id} className={`${montse.className} text-center md:text-lg`}>
        {label}:
      </label>
      <input
        type={type}
        id={id}
        className="flex self-center rounded-md w-96"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}