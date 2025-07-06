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
import Icon from "@/components/ui/icon";

const Index = () => {
  const donatePackages = [
    {
      name: "Фла",
      price: 15,
      color: "bg-gray-500",
      features: ["Базовые привилегии", "Цветной ник", "Приват территории"],
      icon: "🏃",
    },
    {
      name: "Вип",
      price: 40,
      color: "bg-green-500",
      features: ["Все привилегии Фла", "Кит раз в день", "Телепорт домой"],
      icon: "💎",
    },
    {
      name: "Премиум",
      price: 60,
      color: "bg-blue-500",
      features: ["Все привилегии Вип", "Дополнительные киты", "Полёт в лобби"],
      icon: "👑",
    },
    {
      name: "Креатив",
      price: 140,
      color: "bg-purple-500",
      features: [
        "Все привилегии Премиум",
        "Креативный режим",
        "Безлимитные ресурсы",
      ],
      icon: "🚀",
    },
  ];

  const sections = [
    {
      title: "Правила",
      description: "Ознакомьтесь с правилами сервера",
      icon: "FileText",
    },
    {
      title: "Гайды",
      description: "Полезные руководства для игры",
      icon: "BookOpen",
    },
    {
      title: "Контакты",
      description: "Свяжитесь с администрацией",
      icon: "MessageCircle",
    },
    {
      title: "Поддержка",
      description: "Техническая поддержка 24/7",
      icon: "HeadphonesIcon",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/img/af2d90fe-eb64-4136-bc9d-82bb36959228.jpg)",
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

      {/* Donation Packages */}
      <div className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            💰 Привилегии сервера
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
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <Icon
                          name="Check"
                          className="w-4 h-4 mr-2 text-[#00AA00]"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${pkg.color} hover:opacity-90`}>
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            📚 Информация
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((section, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors cursor-pointer"
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

      {/* Footer */}
      <footer className="bg-black py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#00AA00]">
                Minecraft Server
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
