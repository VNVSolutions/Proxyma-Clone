import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function RotatingResidentialProxyPage() {
  return (
    <Layout>
      <div className="py-16 bg-gradient-to-b from-background to-accent/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl font-bold mb-6 font-jost">
                Динамические резидентные прокси
              </h1>

              <p className="text-lg mb-6 text-muted-foreground">
                Получите доступ к нашей сети из более чем 60 миллионов IP-адресов со всего мира для безопасного и анонимного серфинга, веб-скрейпинга и многих других задач.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Более 60 миллионов IP-адресов</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Ротация IP при каждом запросе</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Поддержка более 100 стран</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Неограниченный трафик (от 5 ГБ в день)</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Тарификация по IP или трафику</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link href="/buy">
                  <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-6">
                    Выбрать тариф
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="outline" className="rounded-full px-6">
                    Попробовать бесплатно
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h3 className="text-xl font-bold mb-4">Как работают динамические прокси?</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Наши динамические резидентные прокси автоматически меняют IP-адрес при каждом запросе, обеспечивая максимальную анонимность и возможность обхода ограничений.
                </p>

                <div className="bg-accent/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Пример использования:</h4>
                  <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm font-mono overflow-x-auto">
                    <pre>curl -x http://username:password@proxy.proxyma.io:8080 https://target-site.com</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-jost">
            Преимущества динамических прокси Proxyma
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Полная анонимность</h3>
              <p className="text-sm text-muted-foreground">
                Каждый запрос через наши прокси использует уникальный IP-адрес, что делает вашу активность в сети полностью анонимной.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Высокая скорость</h3>
              <p className="text-sm text-muted-foreground">
                Наша инфраструктура оптимизирована для максимальной скорости и стабильности соединения, что гарантирует быстрый доступ к любым ресурсам.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Гибкие настройки</h3>
              <p className="text-sm text-muted-foreground">
                Выбирайте страну, город, сессию и другие параметры для тонкой настройки прокси под ваши конкретные задачи и требования.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/buy">
              <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-2.5">
                Начать использовать сейчас
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
