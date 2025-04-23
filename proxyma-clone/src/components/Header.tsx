'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-10">
            <Image src="/images/logo.svg" alt="Proxyma" width={150} height={48} priority />
          </Link>

          <nav className="hidden md:flex space-x-6">
            <Link href="/product/rotating-residential-proxy" className="nav-link text-sm font-medium">
              Рабочие прокси
            </Link>
            <Link href="/buy" className="nav-link text-sm font-medium">
              Расценки
            </Link>
            <Link href="/faq" className="nav-link text-sm font-medium">
              Вопросы
            </Link>
            <Link href="/register" className="nav-link text-sm font-medium">
              Регистрация
            </Link>
            <Link href="/blog" className="nav-link text-sm font-medium">
              Блог
            </Link>
            <Link href="/partnerships" className="nav-link text-sm font-medium">
              Партнерам
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <button
              className="flex items-center space-x-2 text-sm font-medium px-3 py-1 border rounded-lg"
              onClick={toggleLanguageDropdown}
            >
              <Image src="/images/flag-ru.svg" alt="Russian" width={20} height={15} />
              <span>RUS</span>
              <span className="text-xs">▾</span>
            </button>

            {isLanguageOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white shadow-md rounded-lg py-2 z-50 w-full">
                <button className="w-full flex items-center space-x-2 px-3 py-1 hover:bg-gray-100">
                  <Image src="/images/flag-en.svg" alt="English" width={20} height={15} />
                  <span className="text-sm">ENG</span>
                </button>
              </div>
            )}
          </div>

          <Link href="/login">
            <Button variant="outline" className="text-sm rounded-full px-6">Войти</Button>
          </Link>

          <Link href="/register">
            <Button className="bg-primary text-white hover:bg-primary/90 text-sm rounded-full px-6">Регистрация</Button>
          </Link>
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50 pt-20 px-4">
            <div className="flex flex-col space-y-4">
              <Link href="/product/rotating-residential-proxy" className="text-lg font-medium py-2 border-b">
                Рабочие прокси
              </Link>
              <Link href="/buy" className="text-lg font-medium py-2 border-b">
                Расценки
              </Link>
              <Link href="/faq" className="text-lg font-medium py-2 border-b">
                Вопросы
              </Link>
              <Link href="/register" className="text-lg font-medium py-2 border-b">
                Регистрация
              </Link>
              <Link href="/blog" className="text-lg font-medium py-2 border-b">
                Блог
              </Link>
              <Link href="/partnerships" className="text-lg font-medium py-2 border-b">
                Партнерам
              </Link>

              <div className="flex items-center space-x-2 py-2">
                <button className="flex items-center space-x-2 text-sm font-medium px-3 py-1 border rounded-lg">
                  <Image src="/images/flag-ru.svg" alt="Russian" width={20} height={15} />
                  <span>RUS</span>
                  <span className="text-xs">▾</span>
                </button>

                <Link href="/login">
                  <Button variant="outline" className="text-sm rounded-full px-4">Войти</Button>
                </Link>
              </div>

              <Link href="/register" className="w-full">
                <Button className="bg-primary text-white hover:bg-primary/90 text-sm rounded-full px-6 w-full">
                  Регистрация
                </Button>
              </Link>
            </div>

            <button
              className="absolute top-4 right-4"
              onClick={toggleMenu}
            >
              <X size={24} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
