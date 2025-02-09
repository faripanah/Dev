import { useState } from 'react';

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, phone });
        // Add further form submission logic here
    };

    return (
      <div>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input 
              id="name" 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input 
              id="email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input 
              id="phone" 
              type="text" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default ContactUs;

