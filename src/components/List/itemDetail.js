import React, {useEffect, useState} from "react";
import {
    ItemDetailModal, 
    ItemDetailContent,
    ItemDetailBody,
    ItemDetailTitle,
    ItemDetailButton
} from './style';
import ItemWidgets from "./itemWidgets";

const ItemDetail = (props) => {
    //console.log(props)
    const [fields, setFields] = useState({
        startCount: 346,
        productSex: 2,
        minCount: 10,
        maxSaleCount: 1,
        maxTimeToBuy: 10000,
        minTimeToBuy: 3000,
        timerDeadline: 1,
        visitorsDelay: 10000,
        onlineVisitorsNum: 100,
        totalVisitors: 1000,
        buyVisitorsNum: 500,
        frozenDescription: "1$ = 65руб"
    })
    
    // const [showWidget, setShowWidget] = useState(false);
    
    // const toggleTitle = {
    //     open: window.app_lang === 'ru' ? 'Показать настройки виджета' : 'No templates found',
    //     close: window.app_lang === 'ru' ? 'Шаблоны не найдены' : 'No templates found'
    // }

    // const handleShowWidgets = () => {
    //     setShowWidget(!showWidget);
    // }

    const handleFieldChange = (item) => {
        const name = item.target.name;
        const value = item.target.value;
        const pattern =  new RegExp(item.target.attributes.pattern.value);
        
        if(pattern.test(value)) {
            setFields({
                ...fields,
                [name]: value
            })
        }   
    }
    
    const handleEditor = () => {
        props.onClose();
        props.itemHandler({fields, ...props.content})
    }
    
    const closeOnEscapeKeyDown = e => {
        if ((e.charCode || e.keyCode) === 27) {
          props.onClose();
        }
    };

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);  
        return function cleanup() {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };
    }, []);

    return (
        <ItemDetailModal onClick={props.onClose} show={props.show}>
            <ItemDetailContent onClick={e => e.stopPropagation()}>
                <img src={props.content.img} alt="" />
                <ItemDetailBody>
                    <ItemDetailTitle>{props.content.title}</ItemDetailTitle>
                    <ItemWidgets handleFieldChange={handleFieldChange} fields={fields}/>
                </ItemDetailBody>
                
                <ItemDetailButton onClick={handleEditor}>{window.app_lang === 'ru' ? 'Начать' : 'Start'}</ItemDetailButton>
                
            </ItemDetailContent>
        </ItemDetailModal>
    )
}

export default ItemDetail;