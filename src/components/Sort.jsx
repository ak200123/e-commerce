import React from 'react'
import styled from 'styled-components';
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from '../context/filter_context';

const Sort = () => {
  const { grid_view, setGridView, setListView, filter_products, sorting } = useFilterContext();
  return (
    <Wrapper className='sort-section'>
      {/* first column  */}
      <div className="sorting-list--grid">
        <button className={grid_view ? 'active sort-btn' : "sort-btn"}
          onClick={setGridView}>
          <BsFillGridFill className='icon' />
        </button>

        <button className={!grid_view ? ' active sort-btn' : " sort-btn"}
          onClick={setListView}>
          <BsList className='icon' />
        </button>
      </div>
      <div className="product-data">
        {/* {`${filter_products.length} products available`} */}
      </div>


      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" className='sort-selection--style' onClick={sorting}>
            <option value="lowest">Price(lowest)</option>
            <option value="highest">Price(highest)</option>
            <option value="a-z">Price(a-z)</option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
.sort-selection{
  padding-right: 70px;

}
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  .sorting-list--grid {
    display: flex;
    gap: .5rem;
    .sort-btn {
      padding: 0.6rem 0.8rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1rem;
    }
    .active {
      background-color: blue;
      color: #fff;
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.3rem;

    cursor: pointer;
    .sort-select--option {
      padding: 0.3rem 0;
      cursor: pointer;
      height: 1.6rem;
      padding: 10px;
    }
  }
`;


export default Sort;
