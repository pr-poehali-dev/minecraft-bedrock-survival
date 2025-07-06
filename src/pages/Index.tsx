import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedDonate, setSelectedDonate] = useState(null);
  const [activeSection, setActiveSection] = useState("home");

  const donatePackages = [
    {
      name: "Фла",
      price: 15,
      color: "bg-gray-500",
      shortFeatures: ["Базовые привилегии", "Цветной ник", "Приват территории"],
      fullFeatures: [
        "Цветной ник в чате",
        "Приват до 16 блоков",
        "Команда /fly на 30 минут в день",
        "Доступ к команде /heal",
        "Приоритетный вход на сервер",
        "Команда /kit fly каждые 24 часа",
      ],
      icon: "🏃",
    },
    {
      name: "Вип",
      price: 40,
      color: "bg-green-500",
      shortFeatures: ["Все привилегии Фла", "Кит раз в день", "Телепорт домой"],
      fullFeatures: [
        "Все привилегии Фла",
        "Приват до 32 блоков",
        "Команда /fly на 1 час в день",
        "Команда /home (установка дома)",
        "Команда /back (возврат к месту смерти)",
        "Кит VIP раз в день",
        "Команда /feed (восстановление голода)",
        "Приоритетная техподдержка",
      ],
      icon: "💎",
    },
    {
      name: "Премиум",
      price: 60,
      color: "bg-blue-500",
      shortFeatures: [
        "Все привилегии Вип",
        "Дополнительные киты",
        "Полёт в лобби",
      ],
      fullFeatures: [
        "Все привилегии VIP",
        "Приват до 64 блоков",
        "Команда /fly на 2 часа в день",
        "Команда /god на 30 минут в день",
        "Команда /tpa (телепорт к игроку)",
        "Кит PREMIUM раз в день",
        "Команда /nick (смена ника)",
        "Команда /speed (увеличение скорости)",
        "Полёт в лобби",
      ],
      icon: "👑",
    },
    {
      name: "Креатив",
      price: 140,
      color: "bg-purple-500",
      shortFeatures: [
        "Все привилегии Премиум",
        "Креативный режим",
        "Безлимитные ресурсы",
      ],
      fullFeatures: [
        "Все привилегии PREMIUM",
        "Приват до 128 блоков",
        "Команда /fly безограниченно",
        "Команда /god безограниченно",
        "Креативный режим /gm 1",
        "Команда /give (выдача предметов)",
        "Команда /tp (телепорт по координатам)",
        "Кит CREATIVE раз в день",
        "Команда /weather (смена погоды)",
        "Команда /time (смена времени)",
        "Приоритетная техподдержка 24/7",
      ],
      icon: "🚀",
    },
  ];

  const sections = [
    {
      id: "donate",
      title: "Донат",
      description: "Приобретите привилегии на сервере",
      icon: "ShoppingCart",
    },
    {
      id: "rules",
      title: "Правила",
      description: "Ознакомьтесь с правилами сервера",
      icon: "FileText",
    },
    {
      id: "contacts",
      title: "Контакты",
      description: "Свяжитесь с администрацией",
      icon: "MessageCircle",
    },
    {
      id: "privileges",
      title: "Привилегии",
      description: "Ознакомьтесь с привилегиями",
      icon: "Crown",
    },
    {
      id: "guides",
      title: "Гайды",
      description: "Полезные руководства для игры",
      icon: "BookOpen",
    },
    {
      id: "support",
      title: "Поддержка",
      description: "Техническая поддержка 24/7",
      icon: "HeadphonesIcon",
    },
  ];

  const rulesContent = [
    "Не использовать читы и сторонние программы",
    "Не грифить чужие постройки",
    "Не рекламировать другие серверы",
    "Не спамить и не флудить в чате",
    "Не использовать матерную брань",
    "Не оскорблять других игроков",
    "Не строить неприличные постройки",
    "Не создавать лаги сервера",
    "Не использовать баги игры",
    "Слушать администрацию",
  ];

  const guidesContent = [
    {
      title: "Как начать играть",
      content: "Подключитесь к серверу по IP: play.server.ru, Порт: 19132",
    },
    {
      title: "Как приватить территорию",
      content: "Используйте команду /claim с деревянным топором в руках",
    },
    {
      title: "Как пользоваться чатом",
      content:
        "Пишите сообщения в чат или используйте /msg <игрок> для личных сообщений",
    },
    {
      title: "Как получить помощь",
      content:
        "Обратитесь к администрации через Discord или используйте команду /helpop",
    },
  ];

  const contactsContent = [
    { platform: "Discord", value: "discord.gg/server", icon: "MessageSquare" },
    { platform: "VK", value: "vk.com/mcserver", icon: "MessageCircle" },
    { platform: "Telegram", value: "@mcserver", icon: "Send" },
    { platform: "Email", value: "admin@server.ru", icon: "Mail" },
  ];

  const navigationItems = [
    { id: "home", title: "Главная" },
    { id: "donate", title: "Донат" },
    { id: "rules", title: "Правила" },
    { id: "contacts", title: "Контакты" },
    { id: "privileges", title: "Привилегии" },
    { id: "guides", title: "Гайды" },
    { id: "support", title: "Поддержка" },
  ];

  const handleDonateClick = (donate) => {
    setSelectedDonate(donate);
  };

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-[#00AA00] font-mono">
              MINECRAFT SERVER
            </div>
            <div className="flex space-x-6">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? "bg-[#00AA00] text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-20">
        {activeSection === "home" && (
          <>
            {/* Hero Section */}
            <div
              className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/img/9fff4109-d24f-48fa-afd9-0a9671be39de.jpg)",
              }}
            >
              <div className="text-center text-white px-4 max-w-4xl mx-auto">
                <h1 className="text-6xl font-bold mb-4 tracking-wider font-mono">
                  MINECRAFT BEDROCK
                </h1>
                <h2 className="text-4xl font-bold mb-6 text-[#00AA00]">
                  SERVER v1.21
                </h2>
                <p className="text-xl mb-8 text-gray-300">
                  Выживание • PvP • Донат • Онлайн 24/7
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <Badge
                    variant="outline"
                    className="text-lg px-4 py-2 bg-[#00AA00] text-white border-[#00AA00]"
                  >
                    Версия 1.21
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-lg px-4 py-2 bg-[#FFD700] text-black border-[#FFD700]"
                  >
                    Выживание
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-lg px-4 py-2 bg-red-600 text-white border-red-600"
                  >
                    PvP
                  </Badge>
                </div>
                <Button
                  size="lg"
                  className="bg-[#00AA00] hover:bg-[#008800] text-white px-8 py-3 text-lg"
                >
                  Начать играть
                </Button>
              </div>
            </div>

            {/* Quick Access Sections */}
            <div className="py-20 px-4 bg-gray-900">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">
                  📚 Разделы
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sections.map((section) => (
                    <Card
                      key={section.id}
                      className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors cursor-pointer"
                      onClick={() => handleSectionClick(section.id)}
                    >
                      <CardHeader className="text-center">
                        <Icon
                          name={section.icon}
                          className="w-12 h-12 mx-auto mb-4 text-[#00AA00]"
                        />
                        <CardTitle className="text-xl text-white">
                          {section.title}
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                          {section.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {activeSection === "donate" && (
          <div className="py-20 px-4 bg-gray-800 min-h-screen">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">
                💰 Магазин привилегий
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {donatePackages.map((pkg, index) => (
                  <Card
                    key={index}
                    className="bg-gray-700 border-gray-600 hover:scale-105 transition-transform duration-300"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="text-4xl mb-2">{pkg.icon}</div>
                      <CardTitle className="text-2xl text-white">
                        {pkg.name}
                      </CardTitle>
                      <CardDescription className="text-3xl font-bold text-[#FFD700]">
                        {pkg.price}₽
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {pkg.shortFeatures.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center text-gray-300"
                          >
                            <Icon
                              name="Check"
                              className="w-4 h-4 mr-2 text-[#00AA00]"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className={`w-full ${pkg.color} hover:opacity-90`}
                            onClick={() => handleDonateClick(pkg)}
                          >
                            Подробнее
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-gray-800 border-gray-600 text-white max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-2xl text-center">
                              <span className="text-4xl mr-2">{pkg.icon}</span>
                              {pkg.name} - {pkg.price}₽
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-[#00AA00]">
                              Полные привилегии:
                            </h3>
                            <ul className="space-y-2">
                              {pkg.fullFeatures.map((feature, i) => (
                                <li
                                  key={i}
                                  className="flex items-center text-gray-300"
                                >
                                  <Icon
                                    name="Check"
                                    className="w-4 h-4 mr-2 text-[#00AA00]"
                                  />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <div className="pt-4 border-t border-gray-600">
                              <Button
                                className={`w-full ${pkg.color} hover:opacity-90 text-lg py-3`}
                              >
                                Купить за {pkg.price}₽
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === "rules" && (
          <div className="py-20 px-4 bg-gray-900 min-h-screen">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">
                📜 Правила сервера
              </h2>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-white text-center">
                    Обязательно к соблюдению!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {rulesContent.map((rule, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="text-[#00AA00] font-bold text-lg">
                          {index + 1}.
                        </span>
                        <p className="text-gray-300 text-lg">{rule}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-4 bg-red-900/30 border border-red-500 rounded-lg">
                    <p className="text-red-300 text-center font-semibold">
                      ⚠️ Нарушение правил влечет за собой бан без возможности
                      восстановления!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === "contacts" && (
          <div className="py-20 px-4 bg-gray-800 min-h-screen">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">
                📞 Контакты
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactsContent.map((contact, index) => (
                  <Card
                    key={index}
                    className="bg-gray-700 border-gray-600 hover:bg-gray-600 transition-colors"
                  >
                    <CardHeader className="text-center">
                      <Icon
                        name={contact.icon}
                        className="w-12 h-12 mx-auto mb-4 text-[#00AA00]"
                      />
                      <CardTitle className="text-xl text-white">
                        {contact.platform}
                      </CardTitle>
                      <CardDescription className="text-[#FFD700] text-lg font-semibold">
                        {contact.value}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <div className="mt-12">
                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white text-center">
                      🔗 Данные сервера
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-gray-400">IP адрес</p>
                        <p className="text-[#00AA00] font-bold text-lg">
                          play.server.ru
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400">Порт</p>
                        <p className="text-[#00AA00] font-bold text-lg">
                          19132
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400">Версия</p>
                        <p className="text-[#00AA00] font-bold text-lg">1.21</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeSection === "privileges" && (
          <div className="py-20 px-4 bg-gray-900 min-h-screen">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">
                👑 Привилегии
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {donatePackages.map((pkg, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700">
                    <CardHeader>
                      <div className="flex items-center justify-center space-x-4">
                        <span className="text-4xl">{pkg.icon}</span>
                        <div>
                          <CardTitle className="text-2xl text-white">
                            {pkg.name}
                          </CardTitle>
                          <CardDescription className="text-[#FFD700] text-xl font-bold">
                            {pkg.price}₽
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {pkg.fullFeatures.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center text-gray-300"
                          >
                            <Icon
                              name="Check"
                              className="w-4 h-4 mr-2 text-[#00AA00]"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === "guides" && (
          <div className="py-20 px-4 bg-gray-800 min-h-screen">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">
                📚 Гайды
              </h2>
              <div className="space-y-6">
                {guidesContent.map((guide, index) => (
                  <Card key={index} className="bg-gray-700 border-gray-600">
                    <CardHeader>
                      <CardTitle className="text-xl text-white flex items-center">
                        <Icon
                          name="BookOpen"
                          className="w-6 h-6 mr-2 text-[#00AA00]"
                        />
                        {guide.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-lg">{guide.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === "support" && (
          <div className="py-20 px-4 bg-gray-900 min-h-screen">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">
                🎆 Поддержка
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white text-center">
                      👥 Обращение к админам
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-300">
                        Для связи с администрацией используйте:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-300">
                          <Icon
                            name="MessageSquare"
                            className="w-4 h-4 mr-2 text-[#00AA00]"
                          />
                          Discord: discord.gg/server
                        </li>
                        <li className="flex items-center text-gray-300">
                          <Icon
                            name="Send"
                            className="w-4 h-4 mr-2 text-[#00AA00]"
                          />
                          Telegram: @mcserver
                        </li>
                        <li className="flex items-center text-gray-300">
                          <Icon
                            name="MessageCircle"
                            className="w-4 h-4 mr-2 text-[#00AA00]"
                          />
                          VK: vk.com/mcserver
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white text-center">
                      ⚔️ Игровые команды
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-300">
                        Полезные команды для связи с админами:
                      </p>
                      <ul className="space-y-2">
                        <li className="text-gray-300">
                          <code className="bg-gray-700 px-2 py-1 rounded text-[#00AA00]">
                            /helpop
                          </code>
                          <span className="ml-2">вызов админа</span>
                        </li>
                        <li className="text-gray-300">
                          <code className="bg-gray-700 px-2 py-1 rounded text-[#00AA00]">
                            /report
                          </code>
                          <span className="ml-2">жалоба на игрока</span>
                        </li>
                        <li className="text-gray-300">
                          <code className="bg-gray-700 px-2 py-1 rounded text-[#00AA00]">
                            /ticket
                          </code>
                          <span className="ml-2">создать тикет</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-black py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#00AA00] font-mono">
                MINECRAFT SERVER
              </h3>
              <p className="text-gray-400">
                Лучший сервер для выживания в Minecraft Bedrock Edition
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Контакты
              </h4>
              <div className="space-y-2 text-gray-400">
                <p>Discord: discord.gg/server</p>
                <p>VK: vk.com/mcserver</p>
                <p>Telegram: @mcserver</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Сервер</h4>
              <div className="space-y-2 text-gray-400">
                <p>IP: play.server.ru</p>
                <p>Порт: 19132</p>
                <p>Версия: 1.21</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Minecraft Server. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
