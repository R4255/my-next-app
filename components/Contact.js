// components/Contact.js
const Contact = () => (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form action="#" className="max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message:</label>
            <textarea id="message" name="message" className="w-full px-4 py-2 border border-gray-300 rounded" rows="5" required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Send Message</button>
        </form>
      </div>
    </section>
  );
  
  export default Contact;
  