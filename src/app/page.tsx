import Link from "next/link";
import { Coffee, MapPin, Clock, Star, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] rounded-full flex items-center justify-center">
              <Coffee className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">Pink Coffee & Co</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#menu" className="text-gray-600 hover:text-[#FF69B4] font-medium transition-colors">Menu</Link>
            <Link href="#locations" className="text-gray-600 hover:text-[#FF69B4] font-medium transition-colors">Locations</Link>
            <Link href="#about" className="text-gray-600 hover:text-[#FF69B4] font-medium transition-colors">Our Story</Link>
            <Button className="bg-[#FF69B4] hover:bg-[#FF1493]">Order Now</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF69B4] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-pink-300 opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative">
          <Badge className="bg-pink-100 text-[#FF69B4] mb-6">Home of the Signature PINK COLD FOAM</Badge>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Sip Something <span className="text-[#FF69B4]">Pink</span>, <br />
            Feel Something <span className="text-[#FF69B4]">Different</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Fun, eye-catching, and happy. Experience the coffee shop that stands out from the crowd.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-[#FF69B4] hover:bg-[#FF1493] text-lg px-8">
              Order Online
            </Button>
            <Button variant="outline" size="lg" className="border-[#FF69B4] text-[#FF69B4] hover:bg-[#FF69B4] hover:text-white text-lg px-8">
              View Menu
            </Button>
          </div>
          <div className="flex items-center justify-center gap-12 mt-16 pt-8 border-t border-pink-100">
            <div className="text-center">
              <div className="text-3xl font-black text-[#FF69B4]">3</div>
              <div className="text-sm text-gray-500 font-medium">Locations</div>
            </div>
            <div className="w-px h-12 bg-pink-200"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-[#FF69B4]">2024</div>
              <div className="text-sm text-gray-500 font-medium">Opened</div>
            </div>
            <div className="w-px h-12 bg-pink-200"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-[#FF69B4]">∞</div>
              <div className="text-sm text-gray-500 font-medium">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section id="menu" className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-pink-100 text-[#FF69B4]">Fan Favorites</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-4">
              Try Our Signature <span className="text-[#FF69B4]">Drinks</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Legally Blondie", desc: "White chocolate and caramel latte", color: "from-yellow-200 to-yellow-400", emoji: "☕" },
              { name: "Mean Girl", desc: "Layered caramel macchiato", color: "from-amber-200 to-amber-400", emoji: "🥛" },
              { name: "The Drama", desc: "6 shots espresso with white chocolate, vanilla and cream", color: "from-pink-200 to-pink-400", emoji: "⚡" },
              { name: "Pink Cold Foam", desc: "Our signature topping", color: "from-pink-300 to-pink-500", emoji: "✨" },
            ].map((drink, i) => (
              <Card key={i} className="text-center group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${drink.color} flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {drink.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{drink.name}</h3>
                  <p className="text-gray-500 text-sm">{drink.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-pink-100 text-[#FF69B4]">Find Us</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-4">
              Visit Our <span className="text-[#FF69B4]">Locations</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { city: "New Braunfels", address: "513 S Business IH 35, New Braunfels, TX 78130" },
              { city: "Seguin", address: "Multiple locations in Seguin, TX" },
              { city: "Spring Branch", address: "Multiple locations in Spring Branch, TX" },
            ].map((loc, i) => (
              <Card key={i} className="text-center border-2 border-pink-100 hover:border-[#FF69B4]">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{loc.city}</h3>
                  <p className="text-gray-600 mb-4">{loc.address}</p>
                  <Button variant="outline" className="w-full">Get Directions</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 bg-gradient-to-r from-[#FF69B4] to-[#FF1493] rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6" />
              <h3 className="text-2xl font-bold">Hours of Operation</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto text-left">
              <div>
                <h4 className="font-bold mb-2">New Braunfels</h4>
                <p className="text-pink-100">Mon-Fri: 6am - 6pm</p>
                <p className="text-pink-100">Sat-Sun: 7am - 5pm</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Seguin & Spring Branch</h4>
                <p className="text-pink-100">Mon-Fri: 6am - 6pm</p>
                <p className="text-pink-100">Sat-Sun: 7am - 5pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-pink-100 text-[#FF69B4]">Our Story</Badge>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
                Different by <span className="text-[#FF69B4]">Design</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded by Cody and Morgan Gonzalez, Pink Coffee & Co was built on a simple idea: stand out, be eye-catching, and make people happy.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We chose pink because it's bold, fun, and impossible to ignore. Every drink we craft, every smile we share—it's all about bringing that same energy to your day.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-300 to-pink-500 border-2 border-white"></div>
                  ))}
                </div>
                <div>
                  <p className="font-bold text-gray-900">Cody & Morgan</p>
                  <p className="text-sm text-gray-500">Founders</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#FF69B4] to-[#FF1493] p-8 flex items-center justify-center">
                <div className="text-white text-center">
                  <Coffee className="w-24 h-24 mx-auto mb-4 opacity-90" />
                  <p className="text-2xl font-bold">Since 2024</p>
                  <p className="text-pink-200">Serving smiles daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] rounded-full flex items-center justify-center">
            <Star className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            We <span className="text-[#FF69B4]">Love</span> Our Community
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for making us part of your daily routine. We proudly offer discounts to those who serve our community.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-pink-50 border-pink-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-[#FF69B4] mb-2">Healthcare Workers</h3>
                <p className="text-gray-600">Show your badge for a discount</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-blue-500 mb-2">First Responders</h3>
                <p className="text-gray-600">Show your ID for a discount</p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-green-600 mb-2">Teachers</h3>
                <p className="text-gray-600">Show your badge for a discount</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#FF69B4] to-[#FF1493] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Instagram className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-black mb-4">Follow Us @PinkCoffeeCo</h2>
          <p className="text-pink-100 text-lg mb-8">Behind the scenes, new drink drops, and all the pink vibes</p>
          <Button variant="secondary" className="bg-white text-[#FF69B4] hover:bg-pink-50">
            Follow on Instagram
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-[#FF69B4] rounded-full flex items-center justify-center">
              <Coffee className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">Pink Coffee & Co</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Fun, different, eye-catching coffee in New Braunfels, Seguin, and Spring Branch.
          </p>
          <p className="text-gray-500 text-sm">© 2024 Pink Coffee & Co. All rights reserved.</p>
        </div>
      </footer>

      {/* Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-40">
        <Button className="w-full bg-[#FF69B4] hover:bg-[#FF1493] shadow-xl shadow-pink-500/30">
          Order Now
        </Button>
      </div>
    </div>
  );
}
