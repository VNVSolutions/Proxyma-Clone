import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const advantages = [
  {
    title: 'Стабильность',
    description: 'Бесперебойная работа сервиса',
    detail: 'Вся инфраструктура размещена на локациях с высшей степенью надёжности и доступна без перебоев круглосуточно.',
    icon: '/images/anonymity.png'
  },
  {
    title: 'Прямой доступ без ограничений',
    description: 'Вы все сможете скачать без блокировок',
    detail: 'Для тех, кто хочет иметь доступ ко всем ресурсам интернета вне зависимости от блокировок на уровне IP.',
    icon: '/images/filtering.png'
  },
  {
    title: 'Автономная работа сервисов',
    description: 'Постоянно работающее соединение',
    detail: 'Ваши сервисы должны работать без перебоев. Мы предлагаем самое стабильное соединение для ваших задач.',
    icon: '/images/blocked.png'
  }
];

const bottomAdvantages = [
  {
    title: 'Да, 10+ языков предоставления услуг',
    description: 'Подходит для пользователей из стран СНГ, Европы и США. Доступна оплата в 7+ валютах.',
    action: {
      text: 'Подробнее об оплате',
      url: '/payment'
    }
  },
  {
    title: 'Полная отчетность для бизнес безопасности',
    description: 'Мы предлагаем подробную статистику по всем используемым IP-адресам и доступным странам.',
    action: {
      text: 'Подключиться на 7 дней',
      url: '/register'
    }
  },
  {
    title: 'Надёжный пост-продажный сервис',
    description: 'Наши специалисты на связи 24/7 и помогут с любыми техническими вопросами по использованию прокси.',
    action: {
      text: 'Подключиться на 7 дней',
      url: '/register'
    }
  }
];

const AdvantagesSection = () => {
  return (
    <div className="py-16 bg-accent/20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10 font-jost">
          Забудьте обо всех проблемах вместе с Proxyma
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {advantages.map(advantage => (
            <div key={advantage.title} className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-14 h-14 relative mb-4">
                <Image
                  src={advantage.icon}
                  alt={advantage.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{advantage.description}</p>
              <p className="text-xs">{advantage.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {bottomAdvantages.map(advantage => (
            <div key={advantage.title} className="flex flex-col">
              <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">{advantage.description}</p>
              <Link href={advantage.action.url}>
                <Button variant="link" className="text-primary p-0 text-sm font-medium">
                  {advantage.action.text} →
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/buy">
            <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-2.5">
              Подключиться на 7 дней
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;
