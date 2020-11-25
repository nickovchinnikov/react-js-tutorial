---
title: Консультация
description: CI/CD GitHub Actions
---

# OTUS

## ReactJS

<!--v-->

### Меня хорошо слышно и видно?

![Не забыл?](https://www.meme-arsenal.com/memes/1bc94af1680d8ec9c2053b076d5f7990.jpg)

### Не забыл включить запись?

<!--v-->

### Что сегодня пройдём?

* Что такое CI/CD
* Зачем это нужно нам?
* Как настроить с помощью GitHub Actions?
* Пример конфигурации

<!--v-->

### Вопросы?

<!--s-->

## Что такое CI/CD

<!--v-->

[Wikipedia](https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D0%BF%D1%80%D0%B5%D1%80%D1%8B%D0%B2%D0%BD%D0%B0%D1%8F_%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F)

> **Непрерывная интеграция** _(CI, англ. Continuous Integration)_ — практика разработки программного обеспечения, которая заключается в постоянном слиянии рабочих копий в общую основную ветвь разработки (до нескольких раз в день) и выполнении частых автоматизированных сборок проекта для скорейшего выявления потенциальных дефектов и решения интеграционных проблем

<!--v-->

![Неприрывная интеграция](https://miro.medium.com/max/700/0*7Ug0sGytwhy94O3Z.png)

CI/CD — концепция, которая реализуется как конвейер, облегчая слияние только что закоммиченного кода в основную кодовую базу.

<!--v-->

### Концепция позволяет

* Запускать разные тесты на каждом этапе
* Разворачивать продукт из закоммиченного кода (делать доставку)

<!--v-->

### Почему это может быть полезно для нас?

* Приближает к реальному процессу разработки
* Автоматический контроль качества
* Вы точно не забудете отформатировать ваш код
* Короткий цикл обратной связи

<!--v-->

### Вопросы?

<!--s-->

### Требования к выполнению заданий

<!--v-->

1. Тесты - это часть кода. Нет тестов - задание не проверяется
1. Мы работаем _"на стиле"_. Нет форматирования - задание не проверяется
1. Задание должно быть представлено к проверке и задеплоено на публичный ресурс

<!--v-->

### Требования к репозиториям

<!--v-->

1. Заполненная информация и README с описанием
1. Понятная модель ветвления и внятные сообщения коммитов
1. Настроенный CI/CD - проверка линтинга, тестов и деплой

<!--v-->

### Вопросы?

<!--s-->

## Автоматизация при работе с git

<!-- v -->

Git поддерживает [хуки](https://git-scm.com/book/ru/v2/%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-Git-%D0%A5%D1%83%D0%BA%D0%B8-%D0%B2-Git).

Хуки бывают:

- клиентские
- серверные

Их можно использовать для:

- изменения кода
- формирования сообщений
- уведомления других программ о событиях

<!-- v -->

Что полезного можно сделать с хуками?

<!-- v -->

Серверные хуки доступны есть вы запускаете свой собственный [git сервер](https://git-scm.com/book/ru/v2/Git-%D0%BD%D0%B0-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B5-%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%B0%D0%B8%D0%B2%D0%B0%D0%B5%D0%BC-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80). Но мы работаем с Github и он это делать не позволяет. Зато Github поддерживает [веб-хуки](https://docs.github.com/en/free-pro-team@latest/developers/webhooks-and-events/about-webhooks).

<!-- v -->

Это использовалось для интеграции с сторонними системами (например [CI](https://habr.com/ru/post/352282/)).

Тут есть варианты:

- Jenkins
- TeamCity
- TravisCI
- CircleCI
- GitlabCI
- GithubActions

<!-- v -->

Предпочтительнее использовать системы, которые поддерживают конфигурацию на уровне кода (TravisCI, CircleCI, GitlabCI, GithubActions)

<!-- v -->

Для работы с интеграциями на курсе мы будем использовать [GithubActions](https://docs.github.com/en/free-pro-team@latest/actions) ([краткое введение](https://habr.com/ru/company/microsoft/blog/481502/)).

Для подключения action нужно просто добавить [yml](https://ru.wikipedia.org/wiki/YAML) файл с нужной структурой.

Примеры файлов можно посмотреть [здесь](https://github.com/otus-js-student/js--game-of-life/tree/master/.github/workflows) и [здесь](https://github.com/nickovchinnikov/react-js-tutorial/tree/master/.github/workflows).

<!-- v -->

## Вопросы?

<!--s-->

## Как настроить локально?

<!-- v -->

Короткая вводная по запуску тестов локально:

```bash
# Перейти в директорию проекта (репозитория)

# Инициализировать проект
npm init -y

# Добавить node_modules в .gitignore
echo "node_modules" >> .gitignore

# Установить jest
npm install jest --save-dev

# Создать конфигурацию jest
npx jest --init

# Проверить работу тестов при помощи
npm run test
```

<!-- v -->

Для настроек Jest выберите следующую конфигурацию

```bash
✔ Would you like to use Typescript for the configuration file? … no
✔ Choose the test environment that will be used for testing › jsdom (browser-like)
✔ Do you want Jest to add coverage reports? … no
✔ Which provider should be used to instrument code for coverage? › v8
✔ Automatically clear mock calls and instances between every test? … yes
```

<!-- v -->

Так же вам нужно будет настроить

* [Eslint](https://eslint.org/)
* [Prettier](https://prettier.io/) нужно настроить как плагин Eslint

[Пример конфигурации](https://github.com/nickovchinnikov/react-js-tutorial/blob/master/.eslintrc)

```js
{
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended"
  ],
//...
```

<!-- v -->

Для визуальных тестов

[Loki](https://loki.js.org/)

![Loki](https://loki.js.org/img/favicon.svg)

<!--s-->

## Пример настройки GitHub Actions

<!-- v -->

### Что нужно включить?

* Lint
* Typescript
* Test
* Loki
* Deploy to [Codesandbox](https://github.com/otus-js-student/js--game-of-life/blob/master/.github/workflows/codesandbox-link-comment.yml)

<!-- s -->

Дополнительные материалы:

- [Git Book(ru)](https://git-scm.com/book/ru/v2)
- [Git изнутри](https://habr.com/ru/post/468205/)
- [19 советов по повседневной работе с Git](https://habr.com/ru/company/mailru/blog/267595/)
- [Курс "Введение в Git"](https://ru.hexlet.io/courses/intro_to_git)
- [Скринкаст по Git](https://learn.javascript.ru/screencast/git)
- [Первоначальная настройка Git](https://hyperhost.ua/info/ru/pervonachalnaya-nastroyka-git)
