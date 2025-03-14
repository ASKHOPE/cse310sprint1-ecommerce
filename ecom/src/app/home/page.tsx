// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 mb-12 text-white">
        <div className="max-w-3xl mx-auto text-center py-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to ShopNow</h1>
          <p className="text-xl mb-8">Discover amazing products at unbeatable prices</p>
          <Link 
            href="/products" 
            className="bg-white text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['Electronics', 'Fashion', 'Home', 'Beauty', 'Sports', 'Books'].map((category) => (
            <Link href={`/category/${category.toLowerCase()}`} key={category}>
              <div className="bg-gray-100 rounded-lg p-6 text-center hover:bg-gray-200 transition duration-300">
                <h3 className="font-medium">{category}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link href="/products" className="text-indigo-600 hover:text-indigo-800">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product Cards would go here */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
              <div className="bg-gray-200 h-48 w-full"></div>
              <div className="p-4">
                <h3 className="font-medium mb-2">Product Name</h3>
                <p className="text-gray-600 text-sm mb-3">Category</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">$99.99</span>
                  <button className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-gray-100 rounded-lg p-8 mb-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Special Offer</h2>
        <p className="text-lg mb-6">Use code <span className="font-bold">WELCOME15</span> for 15% off your first order</p>
        <Link 
          href="/products" 
          className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition duration-300"
        >
          Shop Now
        </Link>
      </section>
    </div>
  );
}