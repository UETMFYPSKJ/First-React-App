import React from "react";
import '../node_modules\bootstrap\dist\css';

class jd extends React.Component{
    render(){
        return(
            <div>
            <nav>
                <ul class="nav">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled">Disabled</a>
  </li>
</ul>
</nav>
            </div>
        )
    }
}
export default jd;
