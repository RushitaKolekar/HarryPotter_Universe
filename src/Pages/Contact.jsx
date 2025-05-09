import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    summary: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log('Form data being submitted:', formData);

    try {
      const response = await fetch('https://formsubmit.co/ajax/kolekarrushita@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          summary: formData.summary,
          _subject: 'New Owl from Harry Pooter Universe!',
          _template: 'table'
        })
      });

      const data = await response.json();
      console.log('Submission response:', data);
      
      if (data.success) {
        alert('Your owl has been sent! Thank you for your feedback.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          summary: ''
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('The owl got lost! Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8'>
      <form 
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 sm:p-8 rounded-xl shadow-lg"
        style={{
          backgroundColor: 'rgba(253, 245, 230, 0.9)',
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")'
        }}
      >
        <h2 
          className="text-3xl sm:text-4xl font-bold pb-6 text-amber-800"  
          style={{ fontFamily: '"Harry Potter", cursive' }}
        >
          Send a Magic Owl
        </h2>
        
        <div className="pb-4">
          <label className="block pb-2 text-amber-900 font-medium">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder='Enter your name'
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-2 sm:p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            required
          />
        </div>

        <div className="pb-4">
          <label className="block pb-2 text-amber-900 font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder='Enter your email'
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-2 sm:p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            required
          />
        </div>

        <div className="pb-4">
          <label className="block pb-2 text-amber-900 font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder='Enter the subject'
            value={formData.subject}
            onChange={(e) => setFormData({...formData, subject: e.target.value})}
            className="w-full p-2 sm:p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            required
          />
        </div>

        <div className="pb-6">
          <label className="block pb-2 text-amber-900 font-medium">Message</label>
          <textarea
            name="summary"
            placeholder='Enter your message...'
            value={formData.summary}
            onChange={(e) => setFormData({...formData, summary: e.target.value})}
            className="w-full p-2 sm:p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full sm:w-auto ${isSubmitting ? 'bg-amber-400' : 'bg-amber-600 hover:bg-amber-700'} text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition duration-300 flex items-center justify-center`}
          style={{ fontFamily: '"Harry Potter", cursive' }}
        >
          {isSubmitting ? (
            'Sending Owl...'
          ) : (
            'Send Owl'
          )}
        </button>
      </form>
    </div>
  );
}