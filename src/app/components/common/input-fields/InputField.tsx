import React from 'react';

interface InputFieldProps {
    type?: string;
    name: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    className?: string;
    error?: string;
    newFormLabel?: boolean
}

const InputField: React.FC<InputFieldProps> = ({ type = 'text', name, label, placeholder, value, onChange, className, error, newFormLabel }) => {
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
