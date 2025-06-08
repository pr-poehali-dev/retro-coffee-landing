import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center retro-bg"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-6xl">☕</div>
        <div className="absolute top-40 right-32 text-4xl">🥐</div>
        <div className="absolute bottom-32 left-16 text-5xl">🍰</div>
        <div className="absolute bottom-20 right-20 text-6xl">☕</div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Coffee Steam Animation */}
          <div className="relative inline-block mb-8">
            <div className="bg-amber-100 p-6 rounded-full shadow-2xl">
              <Icon name="Coffee" size={64} className="text-amber-800" />
            </div>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div className="w-1 h-8 bg-gradient-to-t from-amber-400 to-transparent rounded-full animate-coffee-steam"></div>
            </div>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 ml-2 animation-delay-500">
              <div className="w-1 h-6 bg-gradient-to-t from-amber-300 to-transparent rounded-full animate-coffee-steam"></div>
            </div>
          </div>

          <h1 className="font-merriweather text-5xl md:text-7xl font-bold text-amber-50 mb-6 animate-fade-in">
            Вкус винтажных
            <br />
            <span className="text-yellow-300">традиций</span>
          </h1>

          <p className="text-xl md:text-2xl text-amber-100 mb-8 leading-relaxed animate-fade-in">
            Окунитесь в атмосферу классической кофейни, где каждая чашка
            готовится с душой, а рецепты передаются из поколения в поколение с
            1967 года
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in">
            <button className="vintage-button text-lg px-8 py-4 flex items-center gap-3">
              <Icon name="ShoppingCart" size={20} />
              Заказать кофе
            </button>
            <button className="bg-transparent border-2 border-amber-100 text-amber-100 px-8 py-4 rounded-full font-semibold hover:bg-amber-100 hover:text-amber-800 transition-all duration-300 flex items-center gap-3">
              <Icon name="MapPin" size={20} />
              Найти нас
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">56+</div>
              <div className="text-amber-100">лет традиций</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">12</div>
              <div className="text-amber-100">видов кофе</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">3K+</div>
              <div className="text-amber-100">довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
