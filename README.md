# Proxyma Clone

Це клон сайту [Proxyma.io](https://proxyma.io/) - сервісу, що надає резидентські проксі IP-адреси.

## Структура проекту

Проект складається з двох основних частин:

1. **Фронтенд (Next.js)**
   - Розміщений у директорії `/proxyma-clone`
   - Створений з використанням Next.js 15 та Tailwind CSS
   - Використовує shadcn/ui для компонентів

2. **Бекенд (Django REST API)**
   - Розміщений у директорії `/proxyma-backend`
   - Створений з використанням Django 4.2 та Django REST Framework
   - Використовує JWT для автентифікації

## Фронтенд

### Запуск фронтенду

```bash
cd proxyma-clone
bun install
bun run dev
```

### Структура фронтенду

- `/src/components`: Компоненти інтерфейсу
- `/src/app`: Сторінки додатку (Next.js App Router)
- `/public`: Статичні ресурси (зображення, шрифти)

## Бекенд

### Запуск бекенду за допомогою Docker

```bash
cd proxyma-backend
docker-compose up --build
```

### Структура бекенду

- `/proxyma`: Основна конфігурація Django проекту
- `/users`: Додаток для керування користувачами
- `/proxies`: Додаток для керування проксі-серверами

### API Endpoints

#### Автентифікація
- `POST /api/token/`: Отримання токену
- `POST /api/token/refresh/`: Оновлення токену

#### Користувачі
- `POST /api/users/register/`: Реєстрація нового користувача
- `GET/PUT /api/users/profile/`: Отримання/оновлення профілю
- `GET /api/users/stats/`: Статистика користувача

#### Проксі
- `GET /api/proxies/countries/`: Список країн
- `GET /api/proxies/plans/`: Список тарифних планів
- `GET /api/proxies/subscriptions/`: Список підписок користувача
- `GET /api/proxies/usage-stats/`: Статистика використання проксі
- `POST /api/proxies/purchase-plan/`: Купівля тарифного плану

## Функціональність

1. **Перегляд інформації про сервіс**
   - Головна сторінка з описом сервісу
   - Сторінка з тарифами
   - Сторінка з описом резидентних проксі

2. **Авторизація та профіль**
   - Реєстрація користувача
   - Вхід в систему
   - Перегляд профілю

3. **Робота з проксі**
   - Перегляд доступних тарифів
   - Купівля підписки на проксі
   - Перегляд статистики використання

## Технології

### Фронтенд:
- Next.js
- React
- Tailwind CSS
- shadcn/ui

### Бекенд:
- Django
- Django REST Framework
- JWT Authentication
- SQLite (для розробки)
