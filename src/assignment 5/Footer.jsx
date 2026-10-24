function Footer() {

    return (
  
      <footer className="bg-[#1c1917] px-6 py-10 text-gray-300">
  
        <div className="mx-auto max-w-6xl">
  
          <div className="grid grid-cols-1 gap-10 border-b border-gray-700 pb-8 md:grid-cols-4">
  
            {/* Modernism */}
  
            <div>
  
              <h2 className="mb-4 text-xl font-bold text-yellow-500">
  
                Modernism
  
              </h2>
  
              <p className="max-w-xs text-sm leading-6 text-gray-400">
  
                Creating beautiful, functional spaces that reflect your unique
  
                style and needs.
  
              </p>
  
              <div className="mt-5 flex gap-3">
  
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800">
  
                  ☎️
  
                </span>
  
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800">
  
                  ✉️
  
                </span>
  
              </div>
  
            </div>
  
            {/* Services */}
  
            <div>
  
              <h3 className="mb-4 text-sm font-semibold text-white">
  
                Services
  
              </h3>
  
              <ul className="space-y-3 text-sm text-gray-400">
  
                <li>Interior Design</li>
  
                <li>Space Planning</li>
  
                <li>Consultation</li>
  
                <li>Project Management</li>
  
              </ul>
  
            </div>
  
            {/* Company */}
  
            <div>
  
              <h3 className="mb-4 text-sm font-semibold text-white">
  
                Company
  
              </h3>
  
              <ul className="space-y-3 text-sm text-gray-400">
  
                <li>About Us</li>
  
                <li>Our Team</li>
  
                <li>Portfolio</li>
  
                <li>Contact</li>
  
              </ul>
  
            </div>
  
            {/* Contact */}
  
            <div>
  
              <h3 className="mb-4 text-sm font-semibold text-white">
  
                Contact
  
              </h3>
  
              <ul className="space-y-3 text-sm text-gray-400">
  
                <li>123 Design Street</li>
  
                <li>New York, NY 10001</li>
  
                <li>(555) 123-4567</li>
  
                <li>hello@modernism.com</li>
  
              </ul>
  
            </div>
  
          </div>
  
          {/* Copyright */}
  
          <div className="pt-6 text-center text-xs text-gray-500">
  
            © 2024 Modernism Interior Design. All rights reserved.
  
          </div>
  
        </div>
  
      </footer>
  
    );
  
  }
  
  export default Footer;