import React from 'react';
import { ListCol, ListItem, ListItemTitle, ListItemImg } from './style';

const ItemList = (props) =>{
    // const widgetsFields = {
    //     startCount: 346,
    //     productSex: 2,
    //     minCount: 10,
    //     maxSaleCount: 1,
    //     maxTimeToBuy: 10000,
    //     minTimeToBuy: 3000,
    //     timerDeadline: 1,
    //     visitorsDelay: 10000,
    //     onlineVisitorsNum: 100,
    //     totalVisitors: 1000,
    //     buyVisitorsNum: 500,
    //     frozenDescription: "1$ = 65руб"
    // }
    return props.data.map( (item, i)=>{
        const editorProps = {
            img: item.img,
            path: item.path,
            assets: item.assets,
            title: item.title
        }
        return (
            <ListCol key={i}>

                
                <ListItem onClick={()=> props.itemHandler(true, editorProps)}>
                    <ListItemImg>
                        <img src={item.img} alt="" />
                    </ListItemImg>
                    
                    <ListItemTitle >
                        {item.title}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs/><path d="M46.8 28.5L20.6.8c-1.1-1.1-2.7-1.1-3.7 0-1.1 1.1-1.1 2.7 0 3.7L42.8 32 16.6 59.5c-1.1 1.1-1.1 2.7 0 3.7.5.5 1.1.8 1.9.8s1.3-.3 1.9-.8l26.1-27.7c2.1-1.9 2.1-5.1.3-7z"/></svg>
                        </div>
                    </ListItemTitle>
                </ListItem>
            </ListCol>
        )
    })
}

export default ItemList;