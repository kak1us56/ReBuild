module.exports = {
  output: 'export', // Активирует генерацию статических файлов
  trailingSlash: true, // Добавляет / в конце URL (например, /map/)
  images: {
    unoptimized: true, // Отключает оптимизацию изображений для статики
  },
};