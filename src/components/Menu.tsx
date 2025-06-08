import Icon from "@/components/ui/icon";

const Menu = () => {
  const coffeeItems = [
    {
      name: "Эспрессо Винтаж",
      description: "Классический эспрессо по старинному рецепту",
      price: "150₽",
      icon: "Coffee",
    },
    {
      name: "Капучино Ретро",
      description: "Нежный капучино с молочной пенкой",
      price: "220₽",
      icon: "Coffee",
    },
    {
      name: "Американо 1967",
      description: "Крепкий американо, как в год основания",
      price: "180₽",
      icon: "Coffee",
    },
    {
      name: "Латте Арт",
      description: "Латте с рисунком от наших мастеров",
      price: "250₽",
      icon: "Coffee",
    },
  ];

  const desserts = [
    {
      name: "ТирамисUХ",
      description:
        "Поднимает настроение так же быстро, как хороший UX повышает конверсию",
      price: "200₽",
      icon: "Cookie",
    },
    {
      name: "Макарун «Компонентное чудо»",
      description: "Все вкусы в одном, как master-компонент с override'ами",
      price: "140₽",
      icon: "Cookie",
    },
    {
      name: "Пудинг «404: Калорий не найдено»",
      description: "Десерт-иллюзия для тех, кто «на проекте»",
      price: "404₽",
      icon: "Cookie",
    },
  ];

  return (
    <section id="menu" className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-merriweather text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            Наше винтажное меню
          </h2>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Каждый напиток и десерт готовится по проверенным временем рецептам
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Coffee Menu */}
          <div className="retro-card p-8">
            <div className="flex items-center mb-8">
              <div className="bg-amber-600 p-3 rounded-full mr-4">
                <Icon name="Coffee" size={28} className="text-amber-50" />
              </div>
              <h3 className="font-merriweather text-3xl font-bold text-amber-800">
                Кофейные напитки
              </h3>
            </div>

            <div className="space-y-6">
              {coffeeItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between border-b border-amber-200 pb-4"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-2 rounded-lg mt-1">
                      <Icon
                        name={item.icon as any}
                        size={20}
                        className="text-amber-700"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-800 text-lg mb-1">
                        {item.name}
                      </h4>
                      <p className="text-amber-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-amber-800 font-bold text-lg">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desserts Menu */}
          <div className="retro-card p-8">
            <div className="flex items-center mb-8">
              <div className="bg-amber-600 p-3 rounded-full mr-4">
                <Icon name="Cookie" size={28} className="text-amber-50" />
              </div>
              <h3 className="font-merriweather text-3xl font-bold text-amber-800">
                Десерты
              </h3>
            </div>

            <div className="space-y-6">
              {desserts.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between border-b border-amber-200 pb-4"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-2 rounded-lg mt-1">
                      <Icon
                        name={item.icon as any}
                        size={20}
                        className="text-amber-700"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-800 text-lg mb-1">
                        {item.name}
                      </h4>
                      <p className="text-amber-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-amber-800 font-bold text-lg">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="vintage-button text-lg px-8 py-4 flex items-center gap-3 mx-auto">
            <Icon name="FileText" size={20} />
            Полное меню
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
