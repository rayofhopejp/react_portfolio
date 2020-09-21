import React from 'react';
import './App.css';

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <form onSubmit={this.props.onSubmit}>
          <label>
            KeyWord:
            <input value={this.props.value}
                   type="text" 
                   placeholder="Ruby..."
                   onChange={this.props.onChange}/> 
          </label>
        </form>
      );
    }
}
function ProductRow(props){
    return(
        <a href={props.product.link}>
          <li className="ProductRow">
              {props.product.name}:{props.product.discription}
          </li>
        </a>
    );
}
class ProductTable extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="Contents">
          <ul>
          {this.props.products.map((product)=>
            <ProductRow product={product}/>
          )}
          </ul>
        </div>
      );
    }
}

class FilterableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          formvalue:""
        }
        this.handleFormChange=this.handleFormChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
      }
      handleFormChange(e){
        this.setState({formvalue:e.target.value})
      }
      handleSubmit(e){
        e.preventDefault();
      }
      render() {
        let filteredProducts=[]
        this.props.products.map((product)=>{
          let str=product.name+product.discription
          //英字の大文字小文字は問わないようにする
          if(str.toLowerCase().indexOf(this.state.formvalue.toLowerCase())>-1){
            filteredProducts.push(product)
          }
        })
        return (
          <div className="Contents">
            <SearchBar value={this.state.formvalue} onChange={this.handleFormChange} onSubmit={this.handleSubmit}/>
            <ProductTable products={filteredProducts}/>
          </div>
        );
      }
}

export default FilterableTable;