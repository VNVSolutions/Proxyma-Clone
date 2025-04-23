import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#1d2431] text-white pt-14 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image src="/images/logo.svg" alt="Proxyma" width={150} height={48} />
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Все остальные товарные знаки и логотипы, используемые на этом веб-сайте, являются собственностью их соответствующих владельцев. Использование этих товарных знаков не подразумевает поддержку, аффилиацию или спонсорство со стороны компании PROXYMA Limited.
            </p>
            <p className="text-gray-400 text-sm">
              Компания PROXYMA Limited. оставляет за собой право вносить изменения на веб-сайте, а также в содержимом, продуктах или услугах, описанных на веб-сайте, в любое время без предварительного уведомления.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 uppercase font-jost after:content-[''] after:block after:w-10 after:h-1 after:bg-primary after:mt-2">
              Резидентские прокси
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/product/rotating-residential-proxy" className="text-sm text-gray-300 hover:text-white transition">
                  Динамические резидентные прокси
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 uppercase font-jost after:content-[''] after:block after:w-10 after:h-1 after:bg-primary after:mt-2">
              PROXYMA
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/buy" className="text-sm text-gray-300 hover:text-white transition">
                  Цены
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-300 hover:text-white transition">
                  Центр помощи
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-sm text-gray-300 hover:text-white transition">
                  Вход в систему
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-sm text-gray-300 hover:text-white transition">
                  Зарегистрироваться
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 uppercase font-jost after:content-[''] after:block after:w-10 after:h-1 after:bg-primary after:mt-2">
              Документация
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms-of-use" className="text-sm text-gray-300 hover:text-white transition">
                  Условия использования
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-300 hover:text-white transition">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link href="/ethics" className="text-sm text-gray-300 hover:text-white transition">
                  Этика
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-sm text-gray-300 hover:text-white transition">
                  Политика использования файлов cookie
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-sm text-gray-400 text-center border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>MISUTECH LIMITED LTD, SUITE C, LEVEL 7, WORLD TRUST TOWER, 50 STANLEY STREET, CENTRAL, HONG KONG</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-6">
            <p>Proxyma. © 2025. Все права защищены.</p>

            <div className="flex items-center mt-4 md:mt-0">
              <span className="mr-2">Email:</span>
              <a href="mailto:support@proxyma.io" className="text-primary hover:underline">
                support@proxyma.io
              </a>
            </div>

            <p className="mt-4 md:mt-0">PROXYMA® - зарегистрированный товарный знак компании PROXYMA Limited.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
