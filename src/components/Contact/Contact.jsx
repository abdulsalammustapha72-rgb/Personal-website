import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useState } from 'react';
import './Contact.css';
import api from '../../api/Axios';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [messageStatus, setMessageStatus] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleEnquiry = async (e) => {
        e.preventDefault();

        setLoading(true);
        setMessageStatus('');
        setError('');

        try {
            const response = await api.post('/enquiry', {
                name,
                email,
                message
            });

            setMessageStatus(response.data.message);

            setName('');
            setEmail('');
            setMessage('');
    
        } catch (err) {
            setError(err.response?.data?.message || err.message || 'Failed to send enquiry.')
        } finally {
            setLoading(false);
        };
    };

  return (
      <motion.main
          id='contact'
          className="Contact-main"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.08 }}
          viewport={{ once: true }}
      >
          <article className='article-h1'>
              <h1 className="artic-h1">Contact</h1>
          </article>
          <section>
              <article className="article-p">
                  <p>
                      I'm open to new projects, collaborations, and opportunites where i can put my skills to work and continue growing as a developer. <br /> Let's turn an idea into something useful.
                  </p>
              </article>
              <section className="enquiry-section">
                  <article className="enquiry-article">
                      <div>
                          <p>Elsewhere</p>
                      </div>
                      <span>
                          TWITTER <a href="https://x.com/Abdulsalamirdx" target="_blank" rel="noopener noreferrer">
                              @Abdulsalamirdx <FiArrowUpRight/>
                          </a>
                      </span>
                      <span>
                          LinkedIn <a href="https://www.linkedin.com/in/abdulsalam-mustapha-016109399?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
                              Abdulsalam Mustapha <FiArrowUpRight/>
                          </a>
                      </span>
                      <span>
                          Facebook <a href="https://www.facebook.com/profile.php?id=61593743655078" target="_blank" rel="noopener noreferrer">
                              Abdulsalam Mustapha <FiArrowUpRight/>
                          </a>
                      </span>
                      <span>
                          WhatsApp <a href="https://wa.me/2347015522255" target="_blank" rel="noopener noreferrer">
                              Message Me <FiArrowUpRight/>
                          </a>
                      </span>
                      <span>
                          Call Me <a href="tel:+2347015522255" /* target="_blank" rel="noopener noreferrer" */>
                              07015522255 <FiArrowUpRight/>
                          </a>
                      </span>
                  </article>
                <form onSubmit={handleEnquiry} className="enquiry-form">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        required
                        id='name'
                        placeholder="Enter a name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        required
                        type="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        required
                        type="text"
                        placeholder="Tell me a little about what you're working on."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <div>
                        <p>{messageStatus}</p>
                        <p>{error}</p>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'sending...' : 'Send Message'}
                    </button>
                </form>
              </section>
          </section>
    </motion.main>
  )
}

export default Contact
