# Використовуємо базовий образ Node.js
FROM node:14-alpine

# Папка в образі, де буде знаходитись додаток
WORKDIR /app

# Копіюємо файли залежностей проекту (package.json та package-lock.json)
COPY package*.json ./

# Встановлюємо залежності проекту
RUN npm install

# Копіюємо весь вихідний код додатку в образ
COPY . .

# Будуємо додаток
RUN npm run build

# Команда, яка запускає додаток
CMD ["npm", "start"]
