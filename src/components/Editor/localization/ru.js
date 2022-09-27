"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var traitInputAttr = {
  placeholder: 'eg. Text here'
};
var _default = {
  assetManager: {
    addButton: 'Добавить изображение',
    inputPlh: 'http://path/to/the/image.jpg',
    modalTitle: 'Выбрать изображение',
    uploadTitle: 'Перетащите файлы сюда или нажмите, чтобы загрузить'
  },
  blockManager: {
    labels: {},
    categories: {
      
    }
  },
  domComponents: {
    names: {
      '': 'Box',
      wrapper: 'Body',
      text: 'Текст',
      comment: 'Комментарий',
      image: 'Изображение',
      video: 'Видео',
      label: 'Метка',
      link: 'Ссылка',
      map: 'Карта',
      tfoot: 'Нижний колонтитул таблицы',
      tbody: 'Тело таблицы',
      thead: 'Заголовок таблицы',
      table: 'Таблица',
      row: 'Строка таблицы',
      cell: 'Ячейка таблицы'
    }
  },
  deviceManager: {
    device: 'Устройство',
    devices: {
      desktop: 'Desktop',
      tablet: 'Tablet',
      mobileLandscape: 'Mobile Landscape',
      mobilePortrait: 'Mobile Portrait'
    }
  },
  panels: {
    buttons: {
      titles: {
        preview: 'Предварительный просмотр',
        fullscreen: 'Полноэкранный',
        'sw-visibility': 'Просмотреть компоненты',
        'export-template': 'Посмотреть код',
        'open-sm': 'Открыть диспетчер стилей',
        'open-tm': 'Настройки',
        'open-layers': 'Открыть диспетчер слоев',
        'open-blocks': 'Открыть блоки'
      }
    }
  },
  selectorManager: {
    label: 'Классы',
    selected: 'Выбранный',
    emptyState: '- Состояние -',
    states: {
      hover: 'Наведение',
      active: 'Клик',
      'nth-of-type(2n)': 'Четный/Нечетный'
    }
  },
  styleManager: {
    empty: 'Выберите элемент перед использованием Диспетчера стилей',
    layer: 'Слой',
    fileButton: 'Изображений',
    sectors: {
      general: 'Общий',
      layout: 'Макет',
      typography: 'Типография',
      decorations: 'Украшения',
      extra: 'Дополнительно',
      flex: 'Flex',
      dimension: 'Измерение'
    },
    properties: {}
  },
  traitManager: {
    empty: 'Выберите элемент перед использованием Trait Manager',
    label: 'Настройки компонентов',
    traits: {
      labels: {},
      attributes: {
        id: traitInputAttr,
        alt: traitInputAttr,
        title: traitInputAttr,
        href: {
          placeholder: 'eg. https://google.com'
        }
      },
      options: {
        target: {
          false: 'Это окно',
          _blank: 'Новое окно'
        }
      }
    }
  }
};
exports.default = _default;