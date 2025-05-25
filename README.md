# TODO App - Tooling и развертывание приложения [appTodoProject](https://react-todo-project-lhxvcxuo6-aleksandrs-projects-f31d4829.vercel.app/)

Для этого этапа вам потребуются следующие пакеты:

eslint
eslint-config-airbnb
eslint-config-prettier
eslint-plugin-import
eslint-plugin-jsx-a11y
eslint-plugin-react
eslint-plugin-react-hooks
babel-eslint
prettier
husky
lint-staged
Конфиги
.prettierrc
.eslintrc.json
В настройке lint-staged должна быть сначала проверка eslint и только после этого форматирование через prettier
Что нужно сделать
Установите eslint/prettier, установите все плагины, необходимые для работы airbnb конфига.
Добавьте в ваш package.json скрипты
lint - проверяет все файлы на ошибки
lint:fix - проверяет и исправляет те ошибки, которые может
format - форматирует все файлы с помощью prettier
Отформатируйте ваш проект и устраните все ошибки
Настройке husky + lint-staged
Выгрузите свое приложение на Vercel (ex now.sh) - Инструкция по выгрузке
