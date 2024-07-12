export default function pass(){ 
    return (
<>
<form className="form-floating">

<input type= "input" className="form control-invalid" id="floatinginputvalue"placeholder="email address" value="test@example.com"/>
<input type= "password" className="form control"placeholder="enter passsword"></input>

</form>

<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
</>
    )
}