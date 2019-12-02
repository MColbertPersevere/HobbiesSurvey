const log = console.log
const state = {
    name: "",
    age: "",
    nameE: false,
    emailE: false,
    ageE: false,
    area: 'Area-51',
    area2:'',
    area3:'',
}

const val = (e) => {
    e.preventDefault()
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let age = document.querySelector('#age').value
    
    if(name == null || name == ''){
        state.nameE = true
    }else{
        state.nameE = false
        state.name = name
    }

    if(age >= 18){
        state.ageE = false
    }else{
        state.ageE = true
    }

    if(email.indexOf('@') <= 0){
        state.emailE = true
    }else{
        state.emailE = false
    }

    if(!state.nameE && !state.ageE && !state.emailE){
        renderNext()
    }else{
        render()
    }
    
}


const renderNext = () => {
    let hobby = document.querySelector('#hobby').value
    let age = document.querySelector('#age').value
    if(hobby == 'Basketball' && age < 45){
        state.area = state.area
        state.area2 = 'YMCA'
        state.area3 = "Gold's Gym"
    }else if(hobby == 'Basketball' && age > 45){
        state.area = state.area
        state.area2 = 'Join A Senior Citizen Club'
        state.area3 = 'Watch A Basketball Game On TV!'
    }
     
    if(hobby == 'Coding' && age < 45){
        state.area = state.area
        state.area2 = 'Library'
        state.area3 = 'Shared Services Center'
    }else if(hobby == 'Coding' && age > 45){
        state.area = state.area
        state.area2 = 'Stay Home'
        state.area3 = 'Teach Family To Code'
    }
    if(hobby == 'Vacationing' && age < 45){
        state.area = state.area
        state.area2 = 'Hawaii'
        state.area3 = 'Brazil'
    }else if(hobby == 'Vacationing' && age > 45){
        state.area = state.area
        state.area2 = 'Ride A Cruise Ship'
        state.area3 = 'Dream About A Vacation!'
    }

    const templateNext = (
        <div className="bg-dark rounded shadow-sm p-5 mt-5">
            <h1 className="text-white text-center">Hello {state.name}</h1>
            <h4 className="text-white text-center">Your hobby is {hobby}</h4>
            <p className="text-white text-center mt-3 mb-4">This is what we have for {hobby} for your age group.</p>
            <ol className="text-center list-group">
                <li id="secOne" className="text-danger text-center list-group-item">{state.area}</li>
                <li id="secTwo" className="text-center list-group-item">{state.area2}</li>
                <li id="secThree" className="text-center list-group-item">{state.area3}</li>
            </ol>
        </div>

    )
    ReactDOM.render(templateNext, document.querySelector('#app'))
} 
        

const render = () => {
    const template = (               
    <form className="bg-dark rounded shadow-sm p-5 mt-5" onSubmit={val}>
        <h1 className="text-center text-white mt-4 mb-3">Explore Your Hobbies</h1>
        <p className="text-primary text-center">Please Provide The Following Information To Continue</p>
        <p className="text-center mb-4 text-white">We will suggest activities for you to do based upon your hobby.</p>
  <div className="form-group">
    <label for="inputname" className="text-white">Name</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Full Name"/>
  </div>
  {
      state.nameE && <p className="text-danger">Please Enter Your Name To Continue!</p>
  }
  <div className="form-group">
    <label for="inputemail" className="text-white">Email Address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email"/>
  </div>
  {
      state.emailE && <p className="text-danger">Please Enter A Valid Email To Continue!</p>
  }
  <div className="form-group">
    <label for="inputage" className="text-white">Age</label>
    <input type="number" className="form-control" id="age" placeholder="Enter Age"/>
  </div>
  {
      state.ageE && <p className="text-danger">You Have To Be 18 Years Or Older To Continue!</p>
  }
  <div className="form-group">
    <label for="inputage" className="text-white">Hobbies</label>
    <select className="form-control" id="hobby">
        <option>N/A</option>
        <option>Basketball</option>
        <option>Coding</option>
        <option>Vacationing</option>
    </select>
  </div>
  
  <button type="submit" className="btn btn-primary d-block mx-auto">Submit</button>
</form>

    )
    ReactDOM.render(template, document.querySelector('#app'))
}


render()

