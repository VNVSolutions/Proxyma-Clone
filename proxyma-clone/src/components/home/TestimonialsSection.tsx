import { Card } from '@/components/ui/card';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Алексей',
    text: 'Наконец-то нашел прокси, которые работают стабильно! Уже больше 3 месяцев использую для парсинга и очень доволен качеством и скоростью. Поддержка отвечает быстро.',
    rating: 5
  },
  {
    id: 'testimonial-2',
    name: 'Сэм Даркер',
    text: 'Я использую прокси для мультиаккаунтинга. Проксимой пользуюсь уже больше года, все работает отлично. Спасибо команде за качественный сервис!',
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-accent/20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 font-jost">
          Отзывы пользователей
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary font-bold mr-3">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg
                        key={`${testimonial.id}-star-${i}`}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">{testimonial.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
