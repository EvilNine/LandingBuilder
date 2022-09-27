import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	*, :after, :before {
		box-sizing: border-box;
	}
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
		font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    }
`
const PannelTop = styled.div`
    padding: 0;
    width: 100%;
    display: flex;
    position: initial;
    justify-content: center;
    justify-content: space-between;
`

const PanelBasicActions = styled.div`
    position: initial;
`

const Button = styled.button`
    border: 2px solid #2ecc71;
  	color: #2ecc71;
  	transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
	box-sizing: border-box;
	appearance: none;
	background-color: transparent;
	border-radius: 0.6em;
	cursor: pointer;
	align-self: center;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1;
	margin: 20px;
	padding: 1.2em 2.8em;
	text-decoration: none;
	text-align: center;
	text-transform: uppercase;
	font-weight: 700;
	&:hover, &:focus {
		box-shadow: 0 0 40px 40px #2ecc71 inset;
		color: #fff;
		outline: 0;
	}
`

const AppContainer = styled.div`
	height: 100%;
`

const PageBlockHeader = styled.div`
	background-color: #2A2E36;
	padding-top: 1.5rem;
	padding-bottom: 62px;
	color: #fff;
	h2 {
		font-weight: 700;
		font-size: 2rem;
		line-height: 1.2;
		margin: 0;
	}
`
const Container = styled.div`
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	
	
	@media (min-width: 1200px) {
		max-width: 1140px;
	}
	@media (min-width: 1400px) {
		max-width: 1360px;
	}
`
const ListWrapper = styled.div`
    margin-top: -41px;
`

const Input = styled.input`
	display: block;
	width: 100%;
	height: calc(1.5em + .75rem + 2px);
	padding: .375rem .75rem;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #495057;
	background-color: #e9ecef;
	background-clip: padding-box;
	border: 1px solid #e9ecef;
	border-radius: .25rem;
	transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
	&:focus, &:focus-visible {
		box-shadow: none;
		border-color: #e9ecef;
		outline: 0;
	}
`

export { 
	GlobalStyle, 
	PannelTop, 
	PanelBasicActions, 
	Button, 
	AppContainer,
	PageBlockHeader,
	Container,
	ListWrapper,
	Input
}