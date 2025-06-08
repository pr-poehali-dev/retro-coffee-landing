import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="retro-bg text-amber-50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-amber-600 p-3 rounded-full">
                <Icon name="Coffee" size={32} className="text-amber-50" />
              </div>
              <div>
                <h3 className="font-merriweather text-2xl font-bold">
                  Винтажная Кофейня
                </h3>
                <p className="text-amber-200 text-sm">С 1967 года</p>
              </div>
            </div>
            <p className="text-amber-200 leading-relaxed mb-6">
              Место, где традиции встречаются с современностью. Каждая чашка
              кофе — это история, рассказанная с любовью и заботой о наших
              гостях.
            </p>
            <div className="flex space-x-4">
              <button className="bg-amber-600 hover:bg-amber-700 p-2 rounded-full transition-colors">
                <Icon name="Instagram" size={20} className="text-amber-50" />
              </button>
              <button className="bg-amber-600 hover:bg-amber-700 p-2 rounded-full transition-colors">
                <Icon name="Facebook" size={20} className="text-amber-50" />
              </button>
              <button className="bg-amber-600 hover:bg-amber-700 p-2 rounded-full transition-colors">
                <Icon name="Twitter" size={20} className="text-amber-50" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-merriweather text-lg font-semibold mb-4">
              Быстрые ссылки
            </h4>
            <ul className="space-y-2 text-amber-200">
              <li>
                <a
                  href="#home"
                  className="hover:text-amber-100 transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="hover:text-amber-100 transition-colors"
                >
                  Меню
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-amber-100 transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-amber-100 transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-merriweather text-lg font-semibold mb-4">
              Контакты
            </h4>
            <div className="space-y-3 text-amber-200">
              <div className="flex items-start space-x-2">
                <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm">г. Москва, ул. Винтажная, 15</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="Phone" size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="Mail" size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm">info@vintage-coffee.ru</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-200 text-sm">
            © 2024 Винтажная Кофейня. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-amber-200 hover:text-amber-100 text-sm transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-amber-200 hover:text-amber-100 text-sm transition-colors"
            >
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
