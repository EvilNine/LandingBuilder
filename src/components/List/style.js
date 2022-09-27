import styled from 'styled-components';


const ListRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
`

const ListCol = styled.div`
    flex: 0 0 25%;
    max-width: 25%;
    padding: 0 15px;
    margin-bottom: 30px;
`

const ListItem = styled.div`

    border: 1px solid rgba(0,0,0,.05);
    border-radius: 3px;
    transition: .8s cubic-bezier(.16,1,.3,1);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    &:hover {
        border: 1px solid rgba(0,0,0,0);
        transform: translateY(-5px);
        box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
        svg {
            transform: translateX(5px);
        }
    }
`
const ListItemTitle = styled.div`
    background-color: #fff;
    padding: 20px;
    font-size: 16px;
    color: #161A1E;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
        width: 20px;
        height: 20px;
        fill: #DC3545;
        margin-left: 5px;
        transition: .8s cubic-bezier(.16,1,.3,1);
    }
   
    div {
        display: flex;
        align-items: center;
    }
`
const ListItemImg = styled.div`
   
    img {
        width: 100%;
    }
`
const NotfoundContainer = styled.div`
    position: relative;
    border: 1px solid transparent;
    border-radius: .25rem;
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
    padding: .5rem;
    width: 100%;
    margin-top: 60px;
`

const BackBtn = styled.button`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
    color: #fff;
    background-color: #dc3545;
    border: 1px solid #dc3545;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    -webkit-appearance: button;
    &:hover {
        background-color: #c82333;
        border-color: #bd2130;
    }
`
const ItemDetailModal = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: block;
    align-items: center;
    justify-content: center;
    overflow: auto;
    padding: 30px 0;
    opacity: ${props => props.show ? '1' : '0'};
    transition: .5s cubic-bezier(.16,1,.3,1);
    pointer-events: ${props => props.show ? 'visible' : 'none'};;
    z-index: 1040;
    &.enter-done {
        opacity: 1;
        pointer-events: visible;
    }
      
    &.exit {
        opacity: 0;
    }
`
const ItemDetailContent = styled.div`
    min-height: calc(100% - 3.5rem);
    max-width: 500px;
    margin: 1.75rem auto;
    background-color: #fff;
    transition: .5s cubic-bezier(.16,1,.3,1);
    transform: translateY(${props => props.show ? '-200px' : '0px'});
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
    border-radius: 3px;
    overflow: hidden;
    
    img {
        width: 100%;
    }
`
const ItemDetailButton = styled.button`
    background: #2ecc71;
    border: 2px solid #2ecc71;
  	color: #2ecc71;
  	transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
	box-sizing: border-box;
	appearance: none;
    color: #fff;
	border-radius: 0;
	cursor: pointer;
	align-self: center;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1;
    width: 100%;
    
	padding: 1.2em 2.8em;
	text-decoration: none;
	text-align: center;
	text-transform: uppercase;
	font-weight: 700;
	&:hover, &:focus {
		box-shadow: 0;
		color: #fff;
		outline: 0;
	}
`

const ItemDetailBody = styled.div`
    
`

const ItemDetailTitle = styled.div`
    font-size: 16px;
    color: #161A1E;
    font-weight: 500;
    margin: 15px;
`

const ItemDetailField = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    label {
        font-size: 14px;
    }
    input {
        width: 150px;
    }
`
const ItemDetailGroup = styled.div`
    border-top: 1px solid #d9d9d9;
    margin-top: 15px;
    padding: 15px;
`

const WidgetTitle = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 15px;
`
export { 
    ListRow, 
    ListCol, 
    ListItem, 
    ListItemTitle, 
    ListItemImg, 
    NotfoundContainer, 
    BackBtn, 
    ItemDetailModal, 
    ItemDetailContent,
    ItemDetailBody,
    ItemDetailTitle,
    ItemDetailField,
    ItemDetailGroup,
    WidgetTitle,
    ItemDetailButton
}

