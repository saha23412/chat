# Поиск работы
## Установка пакетов
npm i 
## Версия node
v16.16.0
## Запуск проекта и json-server
npm run dev
## Описание проекта
Веб-приложение по поиску работы.
## Функционал проекта 
После открытия веб-приложения нам предлагают авторизоваться.
Если аккаунта нет,то можно зарегистрироваться.
![Image alt](https://github.com/saha23412/imgproj/raw/main/hh1.jpg)
Если поля будут пусты появится ошибка,если пользователья нет в базе данных ,то тоже появится ошибка.
![Image alt](https://github.com/saha23412/imgproj/raw/main/hh2.jpg)
Для регистрации нужно ввести информацию о себе.Все поля формы обязательны.
У каждого из полей есть проверка на адекватность введенной информации.Например:в поле "Возраст" нельзя вводить буквы,только цифры.
![Image alt](https://github.com/saha23412/imgproj/raw/main/hh3.jpg)
После успешной авторизации мы попадаем в личный кабинет,тут есть личная информация и полоса прогресса.
![Image alt](https://github.com/saha23412/imgproj/raw/main/hh4.jpg)
Можем перейти и посмотреть вакансии.
![Image alt](https://github.com/saha23412/imgproj/raw/main/hh5.jpg)
Есть сортировка вакансий и live search.
![Image alt](https://github.com/saha23412/imgproj/raw/main/hh8.jpg)
Так выглядит карточка вакансии,тут мы видим информацию о данной вакансии,мы можем откликнуться на нее или добавить в избранное.  
![Image alt](https://github.com/saha23412/imgproj/raw/main/hh6.jpg)  
После отклика мы видим информацию о успешном отклике,также полоса прогресса увеличиться на 1   
![Image alt](https://github.com/saha23412/imgproj/raw/main/hh7.jpg) 
![Image alt](https://github.com/saha23412/imgproj/raw/main/hh10.jpg)
У вакансии есть проверка на возраст,если у пользователя возраст не подходит,карточка вакансии выглядит так,откликнуться на нее нельзя.  
![Image alt](https://github.com/saha23412/imgproj/raw/main/hh11.jpg)  
  Если мы перейдем в настройки профиля, там можно поменять информацию о себе
![Image alt](https://github.com/saha23412/imgproj/raw/main/hh9.jpg) 
## Технологии
React,TypeScript,Redux-toolkit,Material-UI.  
Валидация форм useForm.  
Все данные харянятся на json-server к нему мы делаем запросы (GET,POST,PATCH)
## Статус проекта
Не завершил
