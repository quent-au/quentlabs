import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const ReadyToTransform: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    useCase: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Prepare email data
      const templateParams = {
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        use_case: formData.useCase,
        message: `New Demo Request:
        
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Use Case: ${formData.useCase}

This person has requested a demo of Quent.`
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID, 
        EMAILJS_CONFIG.TEMPLATE_ID, 
        templateParams, 
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', company: '', useCase: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      
      // Reset error message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  return (
    <section
      id="ready-to-transform"
      className="section-padding bg-gradient-to-br from-neutral-950 via-neutral-900 to-black text-white"
    >
      <div className="container-max">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Testing?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}


          {/* Sign-up Form */}
          <div className="bg-white rounded-xl p-8 text-gray-900">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-400 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-400 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-400 focus:border-transparent"
                />
              </div>


              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black hover:bg-neutral-800 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                {isSubmitting ? 'Sending...' : 'Book a Demo'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="text-center text-green-600 text-sm mt-4">
                  ✅ Request received! We'll be in touch soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-center text-red-600 text-sm mt-4">
                  ❌ Something went wrong. Please try again.
                </div>
              )}

              <p className="text-sm text-gray-500 text-center mt-4">
                No spam, no obligation to anything. We respect your privacy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToTransform;
