import en from '../localization/en.js';
import ru from '../localization/ru.js';

export const localizationSetting = {
    locale: window.app_lang === 'ru' ? 'ru' : 'en',
    detectLocale: false,
    messages: {en,ru}
}