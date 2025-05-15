import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, ChevronDown, ArrowRight, Tag, Shield, Truck, Star } from 'lucide-react';

const TagstandModernEcommerce = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleCategoryMenu = () => {
    setCategoryMenuOpen(!categoryMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Announcement Bar */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
        Free shipping on orders over $75 | Same day shipping on orders placed before 2PM PST
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <button className="lg:hidden" onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <a href="#" className="font-bold text-blue-600 text-2xl">TAGSTAND</a>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 text-gray-700">
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 hover:text-blue-600 font-medium"
                  onClick={toggleCategoryMenu}
                >
                  <span>Products</span>
                  <ChevronDown size={16} />
                </button>
                {categoryMenuOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 py-2">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">NFC Stickers</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Hard Tags</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Tokens</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Keychains</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Wristbands</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Cards</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Readers/Writers</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">View All</a>
                  </div>
                )}
              </div>
              <a href="#" className="hover:text-blue-600 font-medium">Custom Builder</a>
              <a href="#" className="hover:text-blue-600 font-medium">Solutions</a>
              <a href="#" className="hover:text-blue-600 font-medium">Bulk Orders</a>
              <a href="#" className="hover:text-blue-600 font-medium">About</a>
              <a href="#" className="hover:text-blue-600 font-medium">Contact</a>
            </nav>
            
            {/* Search & Cart */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="bg-transparent border-none outline-none w-40"
                />
                <Search size={20} className="text-gray-500" />
              </div>
              <a href="#" className="hover:text-blue-600">
                <User size={24} />
              </a>
              <a href="#" className="relative hover:text-blue-600">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-2">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mb-4">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="bg-transparent border-none outline-none w-full"
                />
                <Search size={20} className="text-gray-500" />
              </div>
              <nav className="flex flex-col space-y-3 text-gray-700">
                <a href="#" className="py-2 border-b border-gray-100 font-medium">Products</a>
                <a href="#" className="py-2 border-b border-gray-100 font-medium">Custom Builder</a>
                <a href="#" className="py-2 border-b border-gray-100 font-medium">Solutions</a>
                <a href="#" className="py-2 border-b border-gray-100 font-medium">Bulk Orders</a>
                <a href="#" className="py-2 border-b border-gray-100 font-medium">About</a>
                <a href="#" className="py-2 font-medium">Contact</a>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Custom NFC Solutions for Business & Personal Use
              </h1>
              <p className="text-lg mb-8 text-blue-100">
                High-quality custom NFC tags for stickers, hard tags, tokens, keychains, wristbands, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-full hover:bg-gray-100 text-center">
                  Shop Products
                </a>
                <a href="#" className="inline-block bg-transparent border-2 border-white text-white font-bold px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 text-center">
                  Design Custom Tags
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://picsum.photos/500/350" 
                alt="NFC Tags Collection" 
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <Tag size={32} className="text-blue-600 mb-3" />
              <h3 className="font-medium mb-2">Custom Designs</h3>
              <p className="text-sm text-gray-500">Create personalized NFC tags to match your brand</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <Shield size={32} className="text-blue-600 mb-3" />
              <h3 className="font-medium mb-2">Quality Guaranteed</h3>
              <p className="text-sm text-gray-500">Premium materials and chips for every product</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <Truck size={32} className="text-blue-600 mb-3" />
              <h3 className="font-medium mb-2">Fast Shipping</h3>
              <p className="text-sm text-gray-500">Orders ship within 24 hours</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <Star size={32} className="text-blue-600 mb-3" />
              <h3 className="font-medium mb-2">Expert Support</h3>
              <p className="text-sm text-gray-500">Industry leaders since 2011</p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
            <p className="text-gray-600">Browse our most popular NFC products</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['NFC Stickers', 'Hard Tags', 'Tokens', 'Keychains', 'Wristbands', 'NFC Cards'].map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-32 bg-gray-200 flex items-center justify-center">
                  <img 
                    src={`https://picsum.photos/150/150?random=${index}`} 
                    alt={category} 
                    className="h-24 w-24 object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-medium mb-2">{category}</h3>
                  <a href="#" className="text-blue-600 text-sm flex items-center justify-center space-x-1">
                    <span>Shop Now</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
              <p className="text-gray-600">Our most popular NFC solutions</p>
            </div>
            <a href="#" className="hidden md:inline-block text-blue-600 hover:underline font-medium">
              View All Products
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {name: 'Custom NFC Stickers', price: '$0.47'},
              {name: 'NFC Hard Tags (IP68 Waterproof)', price: '$2.90'},
              {name: 'NFC Business Cards', price: '$3.10'},
              {name: 'NFC Wristbands', price: '$4.60'}
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <img 
                    src={`https://picsum.photos/300/300?random=${index + 10}`} 
                    alt={product.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">Popular</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">From {product.price}</span>
                    <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700">Add to Cart</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 md:hidden">
            <a href="#" className="inline-block text-blue-600 hover:underline font-medium">
              View All Products
            </a>
          </div>
        </div>
      </div>

      {/* Custom NFC Tag Builder CTA */}
      <div className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Design Your Custom NFC Tags</h2>
              <p className="text-lg mb-6 text-gray-300">
                Our easy-to-use online builder lets you create personalized NFC tags with your branding, colors, and functionality.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <span>Custom Shapes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <span>Logo Printing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <span>Choose Your Chip</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <span>No Minimum Order</span>
                </div>
              </div>
              <a href="#" className="inline-block bg-blue-600 text-white font-bold px-6 py-3 rounded-full hover:bg-blue-500">
                Start Designing Now
              </a>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://picsum.photos/500/350?random=35" 
                alt="Custom NFC Tag Builder" 
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Industry Solutions</h2>
            <p className="text-gray-600">NFC solutions tailored for different business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Retail & Marketing', 
                desc: 'Engage customers with interactive product experiences and promotional campaigns.'
              },
              {
                title: 'Asset Tracking',
                desc: 'Streamline inventory management and asset tracking with durable NFC tags.'
              },
              {
                title: 'Events & Hospitality',
                desc: 'Simplify check-ins, payments, and access control at events and venues.'
              }
            ].map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200">
                  <img 
                    src={`https://picsum.photos/400/250?random=${index + 20}`} 
                    alt={solution.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.desc}</p>
                  <a href="#" className="text-blue-600 font-medium flex items-center space-x-1">
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>
            <p className="text-gray-600">Trusted by businesses since 2011</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Tagstand is a top-notch provider of NFC-capable labels. They have gone the extra mile to meet our timelines and specifications.",
                author: "Brenda Murphy",
                role: "VP, Operations and Marketing",
                company: "PROVA Group Technologies"
              },
              {
                quote: "We have happily relied on Tagstand as our supplier on a new tag-based product line. Though we had uncommon technical requirements, Tagstand provided thoughtful guidance.",
                author: "Phil Coady",
                role: "President",
                company: "Acme Corp"
              },
              {
                quote: "Tagstand has provided NFC tags and expertise for us since 2016. They have met or exceeded all our custom needs of performance and form of NFC tags.",
                author: "John Smith",
                role: "Director",
                company: "TechSolutions Inc."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6">Subscribe to our newsletter for the latest NFC products, industry news, and exclusive offers.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-full text-gray-900"
              />
              <button className="bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded-full font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">About Tagstand</h3>
              <p className="mb-4 text-sm">
                Founded in 2011, Tagstand is a leader in NFC technology, offering custom solutions and high-quality products for businesses and individuals.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Products</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">NFC Stickers</a></li>
                <li><a href="#" className="hover:text-white">Hard Tags</a></li>
                <li><a href="#" className="hover:text-white">Tokens</a></li>
                <li><a href="#" className="hover:text-white">Keychains</a></li>
                <li><a href="#" className="hover:text-white">Wristbands</a></li>
                <li><a href="#" className="hover:text-white">Cards</a></li>
                <li><a href="#" className="hover:text-white">Readers/Writers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Retail & Marketing</a></li>
                <li><a href="#" className="hover:text-white">Asset Tracking</a></li>
                <li><a href="#" className="hover:text-white">Events & Hospitality</a></li>
                <li><a href="#" className="hover:text-white">Product Authentication</a></li>
                <li><a href="#" className="hover:text-white">Payments</a></li>
                <li><a href="#" className="hover:text-white">Customer Engagement</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white">Technical Support</a></li>
                <li><a href="#" className="hover:text-white">Custom Orders</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-sm">
                &copy; 2025 Tagstand. All rights reserved.
              </div>
              <div className="md:text-right">
                <img src="https://picsum.photos/200/30?random=36" alt="Payment methods" className="inline-block" />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Quick View Modal (Hidden by default) */}
      <div className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg w-full max-w-4xl max-h-90vh overflow-auto">
          <div className="relative">
            <button className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md">
              <X size={24} />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div>
                <img 
                  src="https://picsum.photos/500/500?random=30" 
                  alt="Product name" 
                  className="w-full rounded-lg"
                />
                <div className="grid grid-cols-4 gap-2 mt-4">
                  <img src="https://picsum.photos/100/100?random=31" alt="Thumbnail" className="rounded cursor-pointer border-2 border-blue-600" />
                  <img src="https://picsum.photos/100/100?random=32" alt="Thumbnail" className="rounded cursor-pointer" />
                  <img src="https://picsum.photos/100/100?random=33" alt="Thumbnail" className="rounded cursor-pointer" />
                  <img src="https://picsum.photos/100/100?random=34" alt="Thumbnail" className="rounded cursor-pointer" />
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-2">Custom NFC Stickers</h2>
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className={`${i < 4 ? "fill-current text-yellow-400" : "text-gray-300"}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.0 (24 reviews)</span>
                </div>
                
                <div className="font-bold text-2xl mb-6">From $0.47</div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Description</h3>
                  <p className="text-gray-600 text-sm">
                    High-quality custom NFC stickers perfect for marketing, asset tracking, and customer engagement. Choose from various sizes, shapes, and chip types to suit your specific needs.
                  </p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Size</label>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="border rounded p-2 text-center text-sm cursor-pointer hover:border-blue-600">25mm</div>
                      <div className="border rounded p-2 text-center text-sm cursor-pointer border-blue-600">35mm</div>
                      <div className="border rounded p-2 text-center text-sm cursor-pointer hover:border-blue-600">50mm</div>
                      <div className="border rounded p-2 text-center text-sm cursor-pointer hover:border-blue-600">Custom</div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Chip Type</label>
                    <select className="w-full border rounded p-2 text-sm">
                      <option>NTAG213 (recommended)</option>
                      <option>NTAG215</option>
                      <option>NTAG216</option>
                      <option>Ultralight EV1</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Quantity</label>
                    <div className="flex border rounded overflow-hidden w-32">
                      <button className="px-3 py-1 bg-gray-100">-</button>
                      <input type="text" value="10" className="w-full text-center border-l border-r" />
                      <button className="px-3 py-1 bg-gray-100">+</button>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-blue-600 text-white font-medium py-3 rounded-full hover:bg-blue-700">
                    Add to Cart
                  </button>
                  <button className="bg-gray-200 text-gray-800 font-medium py-3 rounded-full hover:bg-gray-300">
                    Customize Design
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NFC Chip Chooser Tool Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">NFC Chip Chooser Tool</h2>
              <p className="text-gray-600">Find the perfect NFC chip for your specific needs</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium mb-2">Primary Use</label>
                  <select className="w-full border rounded p-2">
                    <option>General Purpose</option>
                    <option>Marketing/URLs</option>
                    <option>Asset Tracking</option>
                    <option>Authentication</option>
                    <option>Payment</option>
                    <option>Access Control</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Memory Needs</label>
                  <select className="w-full border rounded p-2">
                    <option>Standard (144 bytes)</option>
                    <option>Extra (504 bytes)</option>
                    <option>High (888 bytes)</option>
                    <option>Maximum (7KB+)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Security Level</label>
                  <select className="w-full border rounded p-2">
                    <option>Basic</option>
                    <option>Password Protection</option>
                    <option>Encryption</option>
                    <option>Maximum Security</option>
                  </select>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 text-center">
                <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-full hover:bg-blue-700">
                  Find Recommended Chips
                </button>
              </div>
            </div>
            
            <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-lg mb-4">Recommended NFC Chips</h3>
              
              <div className="space-y-4">
                <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold">NTAG213</h4>
                      <p className="text-sm text-gray-600 mb-2">Best for general purpose and marketing applications</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">144 bytes</span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">NFC Forum Type 2</span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Basic security</span>
                      </div>
                    </div>
                    <span className="font-bold">From $0.47</span>
                  </div>
                  <div className="mt-2 flex justify-end">
                    <a href="#" className="text-blue-600 font-medium text-sm hover:underline">View Products</a>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold">NTAG216</h4>
                      <p className="text-sm text-gray-600 mb-2">Higher memory capacity for more complex applications</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">888 bytes</span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">NFC Forum Type 2</span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Password protection</span>
                      </div>
                    </div>
                    <span className="font-bold">From $0.68</span>
                  </div>
                  <div className="mt-2 flex justify-end">
                    <a href="#" className="text-blue-600 font-medium text-sm hover:underline">View Products</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
      
      {/* Back to Top Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button className="bg-gray-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TagstandModernEcommerce;