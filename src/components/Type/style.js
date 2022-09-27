import styled from "styled-components";

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
    & > div {
        background-color: #fff;
        border: 1px solid rgba(0,0,0,.05);
        padding: 30px 15px;
        border-radius: 3px;
        transition: .8s cubic-bezier(.16,1,.3,1);
        cursor: pointer;
        &:hover {
            border: 1px solid rgba(0,0,0,0);
            transform: translateY(-5px);
            box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
        }
    }
`
const Icon = styled.div`
    width: 60px;
    height: 60px;
    margin: 0 auto 15px;
    img {
        width: 100%;
        height: 100%;
    }
`
const Title = styled.div`
    text-align: center
`
export {
    ListRow,
    ListCol,
    Title,
    Icon
}