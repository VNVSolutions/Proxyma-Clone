import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-background to-accent/30 py-16 lg:py-24 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-jost mb-6">
            PROXYMA — 60+ МИЛЛИОНОВ УНИКАЛЬНЫХ IP-АДРЕСОВ С КРУГЛОСУТОЧНОЙ ПОДДЕРЖКОЙ <span className="text-primary">24/7</span>
          </h1>

          <p className="text-lg mb-8 text-muted-foreground">
            Провайдер резидентских и мобильных прокси для поисковой оптимизации,
            копирования сайтов и комплексного исследования конкурентов
          </p>

          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">от 500 000 ротаций</span>
              <span className="text-primary font-bold">$50</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Проверка IP в поисковых системах</span>
              <span className="text-primary font-bold">100+</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Минимальная цена за IP-адрес</span>
              <span className="text-primary font-bold">$0.00017</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/register">
              <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-6 text-base">
                Начать бесплатно
              </Button>
            </Link>
            <Link href="/buy">
              <Button variant="outline" className="rounded-full px-8 py-6 text-base">
                Посмотреть цены
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 hidden lg:block">
        <Image
          src="/images/hero-bg.png"
          alt="Proxyma Hero"
          width={600}
          height={500}
          className="opacity-70"
        />
      </div>

      <div className="container mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Один шаг до вашего стабильного скрейпинга за $2.5</h2>

        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2">Выберите тариф из 100 стран мира</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Полный доступ ко всей сети PROXYMA
              </p>
            </div>

            <Link href="/buy">
              <Button className="bg-primary text-white hover:bg-primary/90 rounded-full w-full md:w-auto px-8">
                Посмотреть тарифы
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
