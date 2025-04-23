import Layout from '@/components/Layout';
import PricingSection from '@/components/home/PricingSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BuyPage() {
  return (
    <Layout>
      <div className="py-12 bg-gradient-to-b from-background to-accent/30">
        <div className="container">
          <h1 className="text-4xl font-bold mb-6 font-jost text-center">
            Купить IP адреса
          </h1>
          <h2 className="text-xl text-center mb-12">
            Выберите свой план
          </h2>

          <PricingSection />

          <div className="max-w-3xl mx-auto mt-12 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 font-jost">
              На такое просят прокси?
            </h2>

            <p className="mb-4 text-muted-foreground">
              Прокси-сервер (proxy) – это посредник между пользователем и интернетом, который обеспечивает анонимность в сети и защищает от различных угроз. Он скрывает ваш реальный IP-адрес, а также фильтрует и ускоряет трафик через дополнительный шлюз.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex flex-col">
                <h3 className="text-lg font-bold mb-2">Быстрые и безопасные способы оплаты</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  В PROXYMA мы предлагаем множество способов оплаты наших услуг, чтобы вы могли выбрать наиболее удобный для вас.
                </p>
                <div className="mt-auto">
                  <Link href="/payment">
                    <Button variant="outline" className="rounded-full">
                      Способы оплаты
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="text-lg font-bold mb-2">Партнерская программа Proxyma</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Присоединяйтесь к нашей партнерской программе и зарабатывайте до 20% от стоимости покупок ваших рефералов.
                </p>
                <div className="mt-auto">
                  <Link href="/partnerships">
                    <Button variant="outline" className="rounded-full">
                      Подробнее
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 text-center font-jost">
            Купить прокси-серверы от компании PROXYMA
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-3">Поддержка любых IP адресов прокси</h3>
              <p className="text-sm text-muted-foreground">
                Мы обеспечиваем поддержку всех типов IP-адресов для разных задач и целей с максимальной стабильностью.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-3">Стабильность работы прокси</h3>
              <p className="text-sm text-muted-foreground">
                Наша инфраструктура обеспечивает бесперебойную работу прокси 24/7 с гарантированной скоростью и стабильностью.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-3">Поддержка Windows</h3>
              <p className="text-sm text-muted-foreground">
                Наши прокси полностью совместимы с Windows и другими операционными системами, включая MacOS и Linux.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-medium mb-4">Для чего используются прокси-серверы?</h3>
            <p className="max-w-3xl mx-auto text-muted-foreground mb-8">
              Прокси-серверы применяются для анонимного серфинга, фильтрации контента, ускорения доступа к часто посещаемым ресурсам, и обхода географических ограничений.
            </p>
            <Link href="/register">
              <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-3">
                Начать работу
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
