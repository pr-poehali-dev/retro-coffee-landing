import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-merriweather text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            Найдите нас
          </h2>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Приходите в гости и окунитесь в атмосферу винтажного уюта
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="retro-card p-8">
              <h3 className="font-merriweather text-2xl font-bold text-amber-800 mb-6">
                Контактная информация
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 p-3 rounded-full">
                    <Icon name="MapPin" size={20} className="text-amber-50" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-1">Адрес</h4>
                    <p className="text-amber-600">
                      г. Москва, ул. Винтажная, 15
                      <br />
                      Метро "Арбатская"
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 p-3 rounded-full">
                    <Icon name="Phone" size={20} className="text-amber-50" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-1">
                      Телефон
                    </h4>
                    <p className="text-amber-600">
                      +7 (495) 123-45-67
                      <br />
                      +7 (495) 123-45-68
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 p-3 rounded-full">
                    <Icon name="Clock" size={20} className="text-amber-50" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-1">
                      Часы работы
                    </h4>
                    <p className="text-amber-600">
                      Пн-Пт: 7:00 - 22:00
                      <br />
                      Сб-Вс: 8:00 - 23:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 p-3 rounded-full">
                    <Icon name="Mail" size={20} className="text-amber-50" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-1">Email</h4>
                    <p className="text-amber-600">
                      info@vintage-coffee.ru
                      <br />
                      order@vintage-coffee.ru
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="retro-card p-8">
              <h3 className="font-merriweather text-2xl font-bold text-amber-800 mb-6">
                Мы в социальных сетях
              </h3>

              <div className="flex space-x-4">
                <button className="bg-amber-600 hover:bg-amber-700 p-3 rounded-full transition-colors">
                  <Icon name="Instagram" size={24} className="text-amber-50" />
                </button>
                <button className="bg-amber-600 hover:bg-amber-700 p-3 rounded-full transition-colors">
                  <Icon name="Facebook" size={24} className="text-amber-50" />
                </button>
                <button className="bg-amber-600 hover:bg-amber-700 p-3 rounded-full transition-colors">
                  <Icon name="Twitter" size={24} className="text-amber-50" />
                </button>
                <button className="bg-amber-600 hover:bg-amber-700 p-3 rounded-full transition-colors">
                  <Icon
                    name="MessageCircle"
                    size={24}
                    className="text-amber-50"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="retro-card p-8">
            <h3 className="font-merriweather text-2xl font-bold text-amber-800 mb-6">
              Как нас найти
            </h3>

            <div className="bg-amber-100 rounded-lg p-12 text-center">
              <div className="bg-amber-600 p-6 rounded-full w-fit mx-auto mb-4">
                <Icon name="Map" size={48} className="text-amber-50" />
              </div>
              <h4 className="font-semibold text-amber-800 text-xl mb-2">
                Интерактивная карта
              </h4>
              <p className="text-amber-600 mb-6">
                Мы находимся в самом сердце исторического центра Москвы
              </p>
              <button className="vintage-button">Открыть карту</button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-amber-600 text-sm mb-4">
                📍 3 минуты пешком от метро "Арбатская"
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="vintage-button flex-1 flex items-center justify-center gap-2">
                  <Icon name="Navigation" size={16} />
                  Проложить маршрут
                </button>
                <button className="bg-transparent border-2 border-amber-600 text-amber-600 px-4 py-2 rounded-full font-semibold hover:bg-amber-600 hover:text-amber-50 transition-all duration-300 flex items-center justify-center gap-2">
                  <Icon name="Car" size={16} />
                  Парковка
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
