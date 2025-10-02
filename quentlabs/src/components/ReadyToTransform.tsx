import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

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
      // EmailJS configuration - you'll need to set these up
      const serviceId = 'service_quentlabs'; // Replace with your EmailJS service ID
      const templateId = 'template_beta_signup'; // Replace with your EmailJS template ID
      const publicKey = 'your_public_key'; // Replace with your EmailJS public key

      // Prepare email data
      const templateParams = {
        to_email: 'abhilashsiyer@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        use_case: formData.useCase,
        message: `New Beta Signup:
        
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Use Case: ${formData.useCase}

This person wants to join the Quent Labs beta program.`
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
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

  const betaBenefits = [
    {
      icon: '🎁',
      title: 'Early Access',
      description: 'Get free access to Quent Cloud during beta period.'
    },
    {
      icon: '🤝',
      title: 'Direct Support',
      description: 'Work directly with our team to shape the product!'
    },
    {
      icon: '💎',
      title: 'Lifetime Discount',
      description: 'Lock in special pricing as an early adopter.'
    }
  ];

  return (
    <section id="ready-to-transform" className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Testing?
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Join the beta and be among the first to experience frictionless mobile testing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Benefits of Beta</h3>
            <div className="space-y-6">
              {betaBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-2xl mr-4">{benefit.icon}</div>
                  <div>
                    <h4 className="font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-primary-100">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Use Case
                </label>
                <select
                  id="useCase"
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select use case</option>
                  <option value="mobile-app-testing">Mobile App Testing</option>
                  <option value="e2e-automation">End-to-End Automation</option>
                  <option value="regression-testing">Regression Testing</option>
                  <option value="api-testing">API Testing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                {isSubmitting ? 'Joining Beta...' : 'Join Beta Program'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="text-center text-green-600 text-sm mt-4">
                  ✅ Successfully joined beta! We'll be in touch soon.
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
