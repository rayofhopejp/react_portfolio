import React from 'react';
import './App.css';

class SearchBar extends React.Component {
    render() {
      return (
        <form onSubmit={this.props.onSubmit}>
          <label>
            KeyWord:
            <input value={this.props.value}
                   type="text" 
                   placeholder="Ruby Lihabit..."
                   onChange={this.props.onChange}/> 
          </label>
        </form>
      );
    }
}
function ProductRow(props){
    let image=props.product.icon ? <img src={props.product.icon} alt="icon" className="ProductIcon"/> :"";
    return(
        <a href={props.product.link} rel="noopener noreferrer" target="_blank">
          <li className="ProductRow clearfix">
              {image}
              <div className="ProductDiscription">
              <h3>{props.product.name}</h3>
              {props.product.discription}
              </div>
          </li>
        </a>
    );
}
class ProductTable extends React.Component {
    render() {
      return (
        <div className="ProductTable">
          <ul key={this.props.prodcuts}>
          {this.props.products.map((product)=>
            <ProductRow product={product} key={product.name}/>
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
        //英字の大文字小文字は問わないようにする
        let words=this.state.formvalue.toLowerCase().split(' ') 
        this.props.products.forEach((product)=>{
          let str=product.name+product.discription
          str=str.toLowerCase()
          let cnt=0;
          words.forEach((word)=>{
            if(str.indexOf(word)>-1)cnt+=1
          })  
          if(cnt===words.length)filteredProducts.push(product) 
        })
        return (
          <div>
            <SearchBar value={this.state.formvalue} onChange={this.handleFormChange} onSubmit={this.handleSubmit}/>
            <ProductTable products={filteredProducts}/>
          </div>
        );
      }
}

export default FilterableTable;