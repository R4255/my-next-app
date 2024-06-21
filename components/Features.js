// components/Features.js
const Features = () => (
    <section id="features" className="py-20" style={{ background: "url('https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D') no-repeat center center/cover" }}>
      <div className="container mx-auto text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-transparent border border-gray-300 p-4">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D" className="mb-4" alt="Secure Transactions" />
            <h3 className="text-xl font-bold mb-2">Secure Transactions</h3>
            <p>Your security is our top priority with state-of-the-art encryption.</p>
          </div>
          <div className="bg-transparent border border-gray-300 p-4">
            <img src="https://imgs.search.brave.com/2nJut2SZ3cF4M1hzMDHrMIkqV2wGYWMSuYV7EWju6Hg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vOUZ6UWJN/N3I1YXhXZ01IWi1O/MzJ5aTBHdGxVVlFX/Ym5iVnZaQXJhZVBT/RS9yczpmaXQ6NTAw/OjA6MC9nOmNlL2FI/UjBjSE02THk5cGJX/ZHovTG5ObFlYSmph/QzVpY21GMi9aUzVq/YjIwdlIzWjFiVkJ2/L2QxUk1SRkZsWTFr/elpsWkIvZUVSRWRW/Z3diMDB3VFU1bC9R/bGRzV21OVlV6QlRU/VGMwL2J5OXljenBt/YVhRNk5UWXcvT2pN/eU1Eb3hMMmM2WTJV/di9ZVWhTTUdOSVRU/Wk1lVGx3L1lsZGpk/UzlhYmtwc1dsaEMv/Y0dGNU5XcGlNakIy/TDJOSS9TbXhpVjJ3/eFlsTXhkMkZIL09U/QXZZbms1YVdSWVRu/QmkvYlZaNlkza3hh/QzlpYlVaei9aVmhT/Y0ZrelRYUmFSMFo2/L0wyRkhTblpaV0Vw/clRGaEsvYkdOSE9Y/a3ZaRWRzZFZveC9P/SGhOVkZrMFRWUkZO/UzlNL1ZHYzFUa00x/Y1dOSFkxOWovTW13/MkwxcFVNREpOYWxs/dC9XbGhvTUZCWGNI/Y3ZXbmMuanBlZw" className="mb-4" alt="Real-time Analytics" />
            <h3 className="text-xl font-bold mb-2">Real-time Analytics</h3>
            <p>Monitor your financial health with real-time data insights.</p>
          </div>
          <div className="bg-transparent border border-gray-300 p-4">
            <img src="https://img.freepik.com/premium-vector/24-hour-service-iconheadphone-talk-support-phone-consult-customer-problems_68708-3342.jpg" className="mb-4" alt="24/7 Support" />
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p>We're here for you, anytime you need us.</p>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default Features;
  