import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const features = [
  {
    title: 'AFFILIATE',
    icon: '/images/marketing.png',
    description: 'Управление маркетинговыми кампаниями',
    link: '/affiliate',
    color: 'bg-pink-50'
  },
  {
    title: 'SNEAKER',
    icon: '/images/filtering.png',
    description: 'Управление несколькими аккаунтами',
    link: '/sneaker',
    color: 'bg-blue-50'
  },
  {
    title: 'RESORY',
    icon: '/images/blocked.png',
    description: 'Проверка заблокированных ресурсов',
    link: '/resory',
    color: 'bg-green-50'
  },
  {
    title: 'SOCIAL',
    icon: '/images/leads.png',
    description: 'Многоаккаунтинг в социальных сетях',
    link: '/social',
    color: 'bg-red-50'
  },
  {
    title: 'CRYPTO',
    icon: '/images/cache.png',
    description: 'Арбитраж криптовалют',
    link: '/crypto',
    color: 'bg-purple-50'
  },
  {
    title: 'E-COM',
    icon: '/images/seo.png',
    description: 'Мониторинг цен конкурентов',
    link: '/e-com',
    color: 'bg-yellow-50'
  },
  {
    title: 'DATA PARSING',
    icon: '/images/parsing.png',
    description: 'Сбор данных и информации',
    link: '/data-parsing',
    color: 'bg-cyan-50'
  }
];

const FeaturesSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-16 font-jost">
          Только качественные прокси <br />
          для всех видов заработка и исследований в web
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`${feature.color} rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105`}
            >
              <div className="mb-4 w-16 h-16 relative">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{feature.description}</p>
              <Link href={feature.link} className="mt-auto">
                <Button
                  className="bg-primary text-white hover:bg-primary/90 rounded-full text-sm px-6"
                >
                  Попробовать
                </Button>
              </Link>
            </div>
          ))}

          <div className="hidden lg:flex items-center justify-center">
            <Button
              variant="outline"
              className="border-2 border-primary text-primary rounded-full p-4 w-12 h-12 flex items-center justify-center"
            >
              <span className="text-2xl">&gt;&gt;</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
