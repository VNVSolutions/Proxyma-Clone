import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const pricingPlans = [
  {
    name: 'STARTING',
    price: '$5',
    priceDetail: '/day',
    features: [
      { name: 'Трафик', value: '5 ГБ' },
      { name: 'IP', value: '1 000' },
      { name: 'Потоки', value: '500' },
      { name: 'Все что нужно', value: '' }
    ],
    popular: false,
    cta: 'Подключиться',
    color: 'border-pink-300',
    href: '/buy/starting'
  },
  {
    name: 'MIDDLE-SET',
    price: '$30',
    priceDetail: '/month',
    features: [
      { name: 'Трафик', value: '50 ГБ' },
      { name: 'IP', value: '5 000' },
      { name: 'Потоки', value: '1000' },
      { name: 'Все что нужно', value: '' }
    ],
    popular: true,
    cta: 'Подключиться',
    color: 'border-blue-300',
    href: '/buy/middle'
  },
  {
    name: 'PROXYMA-SET',
    price: '$78',
    priceDetail: '/month',
    features: [
      { name: 'Трафик', value: '100 ГБ' },
      { name: 'IP', value: '10 000' },
      { name: 'Потоки', value: '3000' },
      { name: 'Все что нужно', value: '' }
    ],
    popular: false,
    cta: 'Подключиться',
    color: 'border-green-300',
    href: '/buy/proxyma'
  }
];

const PricingSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4 font-jost">
          Выберите свой план
        </h2>

        <div className="max-w-md mx-auto mb-12">
          <Tabs defaultValue="residential" className="w-full">
            <TabsList className="grid grid-cols-2 w-full rounded-full bg-accent/40 p-1">
              <TabsTrigger value="residential" className="rounded-full text-sm">
                Резидентные прокси (ротация по запросу)
              </TabsTrigger>
              <TabsTrigger value="static" className="rounded-full text-sm">
                Статические резидентные IPv4
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden ${plan.popular ? 'ring-2 ring-primary' : ''} border-t-4 ${plan.color}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs py-1 px-3 uppercase font-medium">
                  Популярный
                </div>
              )}

              <div className="p-6">
                <h3 className="text-lg font-bold mb-4">{plan.name}</h3>

                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sm text-muted-foreground ml-1">{plan.priceDetail}</span>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature.name} className="flex justify-between text-sm">
                      <span>{feature.name}</span>
                      <span className="font-medium">{feature.value}</span>
                    </div>
                  ))}
                </div>

                <Link href={plan.href} className="block">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90 rounded-full">
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <Button variant="outline" className="rounded-full text-sm">
            Круглосуточно
          </Button>
          <Button variant="outline" className="rounded-full text-sm">
            SSL + быстрый прокси
          </Button>
          <Button variant="outline" className="rounded-full text-sm">
            Высокая производительность
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
