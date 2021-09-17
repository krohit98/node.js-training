import React from 'react';
import './menu-item.component.scss';
import {withRouter} from 'react-router-dom';


const MenuItem = ({id,title,price,description,category,image, rating, history, match}) => {
    // console.log(match);
    // console.log(history);
    // console.log(location);
  return(
    <tr className="content">        
      <td className="col-1">{id}</td>
      <td className="col-1"><img src={image} width="100px" alt="img"></img></td>
      <td className="col-1">{title.toUpperCase()}</td>
      <td className="col-1">{price}</td>
      <td className="col-1">{description}</td>
      <td className="col-1">{category}</td>
      <td className="col-1">{rating.rate}</td>
      <td className="col-1">{rating.count}</td>
      <td className="col-2"><button className="btn btn-primary" onClick={() => history.push(`${match.url}${title}`)}>Shop Now!</button></td>
    </tr>
  )
 
}

export default withRouter(MenuItem); //wrapping a component in to HOC