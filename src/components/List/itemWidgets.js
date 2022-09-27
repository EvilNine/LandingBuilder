import React from 'react';
import {
    ItemDetailField,
    ItemDetailGroup,
    WidgetTitle
} from './style';
import { Input } from "../../styles/main";

const ItemWidgets = (props) => {
    
    return (
        <ItemDetailGroup>
            <WidgetTitle>{window.app_lang === 'ru' ? 'Настройки виджетов' : 'Widgets settings'}:</WidgetTitle>
            <ItemDetailField>
                <label>{window.app_lang === 'ru' ? 'Покупателей просматривают товар сейчас' : 'Buyers looking through the product now'}</label>
                <Input 
                    type="text" 
                    pattern="^\d+$"
                    name="onlineVisitorsNum"
                    value={props.fields.onlineVisitorsNum}
                    onChange={props.handleFieldChange}/>
            </ItemDetailField>
            <ItemDetailField>
                <label>{window.app_lang === 'ru' ? 'Максимальное время, потраченное на покупку (миллисекунды)' : 'Maximum time period to buy on the website (msec)'}</label>
                <Input 
                    type="text" 
                    pattern="^\d+$"
                    name="maxTimeToBuy"
                    value={props.fields.maxTimeToBuy}
                    onChange={props.handleFieldChange}/>
            </ItemDetailField>

            <ItemDetailField>
                <label>{window.app_lang === 'ru' ? 'Минимальное время, потраченное на покупку (миллисекунды)' : 'Minimum time period to buy on the website (msec)'}</label>
                <Input 
                    type="text" 
                    pattern="^\d+$"
                    name="minTimeToBuy"
                    value={props.fields.minTimeToBuy}
                    onChange={props.handleFieldChange}/>
            </ItemDetailField>
            <ItemDetailField>
                <label>{window.app_lang === 'ru' ? 'Количество товара осталось' : 'Product pieces left'}Колличество товаров</label>
                <Input 
                    type="text" 
                    pattern="^\d+$"
                    name="startCount"
                    value={props.fields.startCount}
                    onChange={props.handleFieldChange}/>
            </ItemDetailField>

            <ItemDetailField>
                <label>{window.app_lang === 'ru' ? 'Максимум продаж за сутки на сайте' : 'Maximum purchases for a day'}</label>
                <Input 
                    type="text" 
                    pattern="^\d+$"
                    name="maxSaleCount"
                    value={props.fields.maxSaleCount}
                    onChange={props.handleFieldChange}/>
            </ItemDetailField>

            <ItemDetailField>
                <label>{window.app_lang === 'ru' ? 'Всего посетителей за сегодня ' : 'Visitors today'}</label>
                <Input 
                    type="text" 
                    pattern="^\d+$"
                    name="totalVisitors"
                    value={props.fields.totalVisitors}
                    onChange={props.handleFieldChange}/>
            </ItemDetailField>

            <ItemDetailField>
                <label>{window.app_lang === 'ru' ? 'Сколько купили сегодня' : `Today's purchases`}</label>
                <Input 
                    type="text" 
                    pattern="^\d+$"
                    name="buyVisitorsNum"
                    value={props.fields.buyVisitorsNum}
                    onChange={props.handleFieldChange}/>
            </ItemDetailField>

            <ItemDetailField>
                <label>{window.app_lang === 'ru' ? 'Мы заморозили обменный курс для покупки' : 'We froze exchange rate for purchase'}</label>
                <Input 
                    type="text" 
                    pattern="."
                    name="frozenDescription"
                    value={props.fields.frozenDescription}
                    onChange={props.handleFieldChange}/>
            </ItemDetailField>
        </ItemDetailGroup>
    )

}

export default ItemWidgets;