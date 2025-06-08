import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-amber-100 to-amber-50"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="font-merriweather text-4xl md:text-5xl font-bold text-amber-800 mb-6">
              Наша история началась в 1967 году
            </h2>

            <div className="space-y-6 text-amber-700 text-lg leading-relaxed">
              <p>
                Все началось с маленькой кофейни на углу улицы, где дедушка Иван
                готовил лучший кофе в городе. Его секретные рецепты и любовь к
                своему делу передавались из поколения в поколение.
              </p>

              <p>
                Сегодня мы продолжаем традиции семьи, используя те же методы
                обжарки и приготовления, что и полвека назад. Каждая чашка кофе
                — это частичка нашей истории и душевного тепла.
              </p>

              <p>
                Наша кофейня стала местом встреч для людей всех возрастов, где
                можно насладиться не только прекрасным кофе, но и уютной
                атмосферой винтажного времени.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button className="vintage-button flex items-center gap-3">
                <Icon name="Users" size={20} />
                Узнать больше
              </button>
              <button className="bg-transparent border-2 border-amber-600 text-amber-600 px-6 py-3 rounded-full font-semibold hover:bg-amber-600 hover:text-amber-50 transition-all duration-300 flex items-center gap-3">
                <Icon name="Camera" size={20} />
                Галерея
              </button>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="retro-card p-6 text-center">
              <div className="bg-amber-600 p-4 rounded-full w-fit mx-auto mb-4">
                <Icon name="Award" size={32} className="text-amber-50" />
              </div>
              <h3 className="font-merriweather text-xl font-bold text-amber-800 mb-2">
                Качество
              </h3>
              <p className="text-amber-600">
                Только лучшие зерна и проверенные рецепты
              </p>
            </div>

            <div className="retro-card p-6 text-center">
              <div className="bg-amber-600 p-4 rounded-full w-fit mx-auto mb-4">
                <Icon name="Heart" size={32} className="text-amber-50" />
              </div>
              <h3 className="font-merriweather text-xl font-bold text-amber-800 mb-2">
                Душевность
              </h3>
              <p className="text-amber-600">
                Каждый напиток готовится с любовью
              </p>
            </div>

            <div className="retro-card p-6 text-center">
              <div className="bg-amber-600 p-4 rounded-full w-fit mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-amber-50" />
              </div>
              <h3 className="font-merriweather text-xl font-bold text-amber-800 mb-2">
                Традиции
              </h3>
              <p className="text-amber-600">56 лет семейных рецептов и опыта</p>
            </div>

            <div className="retro-card p-6 text-center">
              <div className="bg-amber-600 p-4 rounded-full w-fit mx-auto mb-4">
                <Icon name="Home" size={32} className="text-amber-50" />
              </div>
              <h3 className="font-merriweather text-xl font-bold text-amber-800 mb-2">
                Уют
              </h3>
              <p className="text-amber-600">Атмосфера дома вдали от дома</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
