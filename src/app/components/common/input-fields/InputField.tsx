import React, { ChangeEvent } from 'react';

interface InputFieldProps {
    type?: string;
    name: string;
    label: string;
    placeholder?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    className?: string;
    error?: string;
    newFormLabel?: boolean;
    options?: { value: string; label: string }[];
}

const InputField: React.FC<InputFieldProps> = ({
    type = 'text',
    name,
    label,
    placeholder,
    value,
    onChange,
    className,
    error,
    newFormLabel,
    options = [],
}) => {
    return (
        <div className='w-full mb-4'>
            <label htmlFor={name} className={`${newFormLabel ? 'block text-black dark:text-white font-semibold mb-2' : 'block text-white font-semibold mb-2'}`}>{label}</label>

            {type === 'textarea' ? (
                <textarea
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`w-full p-2 border border-gray-300 rounded ${className}`}
                    rows={4}
                />
            ) : type === 'select' ? (
                <select
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`w-full p-2 border border-gray-300 rounded ${className}`}
                >
                    <option value="">Select an option</option>
                    {options && options.map((option) => (
                        <option key={`${option.value}-${option.label}`} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`w-full p-2 border border-gray-300 rounded ${className}`}
                />
            )}

            {error && <p className='text-red-500 mt-1'>{error}</p>}
        </div>
    );
};

export default InputField;
