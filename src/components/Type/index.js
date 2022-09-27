import React from "react";
import { Container, PageBlockHeader, ListWrapper } from "../../styles/main";
import { ListCol, ListRow, Title, Icon } from "./style";

const TypeContainer = (props) => {
    
    return (
        <>
        <PageBlockHeader>
            <Container>
                <h2>{window.app_lang === 'ru' ? 'Выберите тип' : 'Select type'}</h2>
            </Container>
        </PageBlockHeader>
        <ListWrapper>
            <Container>
                <ListRow>
                    { props.data.map((item,i) => {
                        const title = window.app_lang === 'ru' ? item.title.ru : item.title.en;
                        return (
                            <ListCol key={i} onClick={()=> props.handleClick(item.type, item.items)}>
                                <div>
                                    <Icon><img src={item.icon} alt={title} /></Icon>
                                    <Title>{title}</Title>
                                </div>
                            </ListCol>
                        )
                    }) }
                </ListRow>
            </Container>
        </ListWrapper>
        </>
    )
}

export default TypeContainer;