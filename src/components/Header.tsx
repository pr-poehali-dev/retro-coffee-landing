import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-amber-50 shadow-lg border-b-4 border-amber-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-amber-600 to-amber-800 p-3 rounded-full">
              <Icon name="Coffee" size={32} className="text-amber-50" />
            </div>
            <div>
              <h1 className="font-merriweather text-2xl font-bold text-amber-800">
                Винтажная Кофейня
              </h1>
              <p className="text-amber-600 text-sm">С 1967 года</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-amber-800 hover:text-amber-600 font-semibold transition-colors"
            >
              Главная
            </a>
            <a
              href="#menu"
              className="text-amber-800 hover:text-amber-600 font-semibold transition-colors"
            >
              Меню
            </a>
            <a
              href="#about"
              className="text-amber-800 hover:text-amber-600 font-semibold transition-colors"
            >
              О нас
            </a>
            <a
              href="#contact"
              className="text-amber-800 hover:text-amber-600 font-semibold transition-colors"
            >
              Контакты
            </a>
            <button className="vintage-button">Заказать</button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-amber-200">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-amber-800 hover:text-amber-600 font-semibold"
              >
                Главная
              </a>
              <a
                href="#menu"
                className="text-amber-800 hover:text-amber-600 font-semibold"
              >
                Меню
              </a>
              <a
                href="#about"
                className="text-amber-800 hover:text-amber-600 font-semibold"
              >
                О нас
              </a>
              <a
                href="#contact"
                className="text-amber-800 hover:text-amber-600 font-semibold"
              >
                Контакты
              </a>
              <button className="vintage-button w-fit">Заказать</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
