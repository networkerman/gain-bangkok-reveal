
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { toast } from "@/components/ui/sonner";
import { validateForm, FormFields, FormErrors } from '../utils/form';

const AcknowledgmentForm = () => {
  const [formData, setFormData] = useState<FormFields>({
    name: '',
    email: '',
    acknowledgment: false,
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user types or checks
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you for acknowledging the Code of Conduct!");
      setFormData({ name: '', email: '', acknowledgment: false });
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h3 className="text-2xl font-bold text-netcore-purple mb-4">Acknowledge Code of Conduct</h3>
      <p className="text-gray-600 mb-6">
        Please acknowledge that you have read and understood the Code of Conduct for the Netcore Annual Revenue Meet 2025.
      </p>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-netcore-purple ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-netcore-purple ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
        
        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="acknowledgment"
              name="acknowledgment"
              type="checkbox"
              checked={formData.acknowledgment}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-netcore-purple focus:ring-netcore-purple"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="acknowledgment" className="font-medium text-gray-700">
              I have read, understood, and agree to follow the Code of Conduct for the Netcore Annual Revenue Meet 2025.
            </label>
          </div>
        </div>
        {errors.acknowledgment && <p className="mt-1 text-sm text-red-500">{errors.acknowledgment}</p>}
        
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`w-full bg-netcore-purple text-white font-semibold py-3 px-4 rounded-md hover:bg-netcore-purple/90 transition-colors flex justify-center items-center ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            'Submitting...'
          ) : (
            <>
              <Check size={18} className="mr-2" />
              Submit Acknowledgment
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default AcknowledgmentForm;
