import user from './user.png';



function Contact() {
    return (
        
        <header class="header">
            <div class="haut" >
                <img style={{width:"70px",height:'70px'}}src={user}  alt="icon-user" />
                {/* <div class="para"> */}
                <i style={{width:"40px",height:'40px',marginTop:'10px'}} class="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true"></i>
                <i style={{width:"40px",height:'40px',marginLeft: '70px',marginRight: '15px',marginTop:'5px'}} class="fa fa-comments fa-2x  pull-right" aria-hidden="true"></i>
                
                {/* </div> */}
                
        
            </div>
            <div class="discussion">
            <input id="searchText" type="text"  name="searchText" placeholder="Search"></input>
                <div>
                <img style={{width:"70px",height:'70px'}}src={user}  alt="icon-user" />
                <label>ami(e)</label>
                </div>
                <div>
                <img style={{width:"70px",height:'70px'}}src={user}  alt="icon-user" />
                <label>ami(e)</label>
                </div>
                <div>
                <img style={{width:"70px",height:'70px'}}src={user}  alt="icon-user" />
                <label>ami(e)</label>
                </div>
                <div>
                <img style={{width:"70px",height:'70px'}}src={user}  alt="icon-user" />
                <label>ami(e)</label>
                </div>
                <div>
                <img style={{width:"70px",height:'70px'}}src={user}  alt="icon-user" />
                <label>ami(e)</label>
                </div>
 
            </div>
      </header>
    );
  }

 
  


  
export default Contact ;