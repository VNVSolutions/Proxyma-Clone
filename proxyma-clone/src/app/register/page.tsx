import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <Layout>
      <div className="min-h-[80vh] py-12 flex items-center">
        <div className="container">
          <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h1 className="text-2xl font-bold mb-6 text-center font-jost">
              Регистрация
            </h1>

            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Пароль
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium mb-1">
                  Подтверждение пароля
                </label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-lg"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
                  Я согласен с <Link href="/terms-of-use" className="text-primary hover:underline">условиями использования</Link> и <Link href="/privacy-policy" className="text-primary hover:underline">политикой конфиденциальности</Link>
                </label>
              </div>

              <Button className="w-full bg-primary text-white hover:bg-primary/90 rounded-full py-2.5">
                Зарегистрироваться
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                Уже есть аккаунт? <Link href="/login" className="text-primary hover:underline">Войти</Link>
              </div>
            </form>

            <div className="mt-8 border-t pt-6">
              <h2 className="text-center text-sm font-medium mb-4">Преимущества регистрации</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Доступ к более чем 60 миллионам IP-адресов</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>7 дней бесплатного тестового периода</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Техническая поддержка 24/7</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
