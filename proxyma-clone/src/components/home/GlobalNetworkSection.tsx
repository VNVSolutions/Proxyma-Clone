import React from 'react';

const countries = [
  { name: 'Франция', percentage: '95.0%' },
  { name: 'Великобритания', percentage: '98.3%' },
  { name: 'Бельгия', percentage: '92.6%' },
  { name: 'Германия', percentage: '100.0%' },
  { name: 'Испания', percentage: '100.0%' },
  { name: 'Польша', percentage: '87.7%' },
  { name: 'Италия', percentage: '92.3%' },
  { name: 'Канада', percentage: '93.1%' },
  { name: 'США', percentage: '100.0%' },
  { name: 'Сербия', percentage: '102.3%' },
];

const advantages = [
  {
    id: 'advantage-1',
    title: 'Выдающаяся производительность',
    description: 'Скорость работы наших прокси выше среднерыночной на 30%'
  },
  {
    id: 'advantage-2',
    title: 'Глобальный охват',
    description: 'Представлены все страны Европы, Америки и Азии'
  },
  {
    id: 'advantage-3',
    title: 'Простая интеграция',
    description: 'Подключение занимает 5 минут даже у неопытных пользователей'
  },
  {
    id: 'advantage-4',
    title: 'Различные типы прокси',
    description: 'Резидентные, мобильные, датацентр и ротирующие прокси'
  },
];

const GlobalNetworkSection = () => {
  return (
    <div className="py-16 bg-accent/20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10 font-jost">
          Обширная глобальная сеть
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-4 gap-x-8 mb-16">
          {countries.map((country) => (
            <div key={country.name} className="flex flex-col items-center">
              <h3 className="text-lg font-medium mb-1">{country.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: country.percentage }}
                />
              </div>
              <span className="text-xs text-muted-foreground">{country.percentage}</span>
            </div>
          ))}
        </div>

        <div className="bg-primary/10 rounded-xl p-6 mb-12">
          <h3 className="text-lg font-bold mb-2 text-primary">Ротационные прокси</h3>
          <p className="text-sm mb-2">
            Резидентные прокси от Proxyma позволяют вам использовать любые ресурсы, в том числе которые могут блокировать датацентр айпи.
          </p>
          <p className="text-sm">
            Неограниченное количество IP-адресов доступно вашему бизнесу с гибкой тарификацией и неограниченным лимитом по времени.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center mb-10 font-jost">
          Наши суперсилы
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
              <p className="text-sm text-muted-foreground">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Раскройте возможности прокси-серверов с помощью Proxyma</h3>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="bg-white text-primary hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-medium transition-colors">
              Начать работу
            </button>
            <button className="border border-white hover:bg-white/10 px-6 py-2 rounded-full text-sm font-medium transition-colors">
              Показать цены
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalNetworkSection;
