
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
export default class SignUp extends  React.Component{
    constructor(){
  
      super();
      this.state={
       
        parents_address:'',
    
        
        parents_phone:'',
    
      
        annee:'',
    
   
        type_bac:'',
    
       
        mention_bac:'',
    
  
        mother_job:'',
    
        annee_bac:'',
    
        lycee:'',
    
    
        delegation:'',
    
        
        academie:'',
    
   
        father_name:'',
 
        father_job:'',
    
        massar:'',

        picture:'',

        mother_name:'',
    
        address:'',
      
        phone:'',
    
        validated:'',
    
        natio:'',
    
        cin:'',
      
        firstname_fr:'',
    
        firstname_ar:'',
    
        lastname_fr:'',
    
        lastname_ar:'',
    
        email:'',
    
        password:'',
        validated:'',
        note:0
      }
    }
    submit(){

  
      let url="http://localhost:5000/etudiants/add";
      let data=this.state;
      fetch(url,{
        method:'post',
        headers:
        {
"Content-Type":"application/json",
"Accept":"application/json",

        },
        body:JSON.stringify(data)

       
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn("resp",resp)
      })
    })
    console.log(this.state)
    
  }
    render() {
        return (
            <div style={{ marginTop: "500%"}}>
               
                <h3>L'inscription</h3>

                <div className="form-group">
                    <label>L'adresse des parents</label>
                    <input type="text" className="form-control" placeholder="adresse des parents"  name="parents_address" value={this.state.parents_address}   onChange={(data)=>{this.setState({parents_address:data.target.value})}}/>
                </div>

                <div className="form-group">
                    <label>Téléphone des parents</label>
                    <input type="text" className="form-control" placeholder="Le telephone des parents"  name="parents_phone" value={this.state.parents_phone}   onChange={(data)=>{this.setState({parents_phone:data.target.value})}}/>
                </div>

                <div className="form-group">
                    <label>Année</label>
                    <input type="date" className="form-control" placeholder="Année"  name="annee" value={this.state.annee}   onChange={(data)=>{this.setState({annee:data.target.value})}}/>
                </div>

                <div className="form-group">
                    <label>Type de baccalauréat</label>
                    <select name="type_bac" className="form-control" value={this.state.type_bac}   onChange={(data)=>{this.setState({type_bac:data.target.value})}}>
                        
                        <option value="sciences_phy">Sciences physique</option>
                        <option value="sciences_mathA">Sciences Math A</option>
                        <option value="sciences_mathB">Sciences Math B</option>
                        <option value="sciences_exp">science expérimentale </option>
                    </select>

                </div>

                <div className="form-group">
                    <label>Année  de baccalauréa</label>
                    <input type="date" className="form-control" placeholder="Année de baccalauréa"  name=" annee_bac" value={this.state.annee_bac}   onChange={(data)=>{this.setState({annee_bac:data.target.value})}}/>
                </div>
               
                <div className="form-group">
                    <label>Mention de baccalauréat</label>
                     <select name="mention_bac" className="form-control" value={this.state.mention_bac}   onChange={(data)=>{this.setState({mention_bac:data.target.value})}}>
                        
                        <option value="Tresbien">Tres bien</option>
                        <option value="Bien">Bien</option>
                        <option value="assezbien">Assez Bien</option>
                    </select>

                </div>
                <div className="form-group">
                    <label>profession du mere</label>
                    <input type="text" className="form-control" placeholder="profession du mere"  name="mother_job" value={this.state.mother_job}   onChange={(data)=>{this.setState({mother_job:data.target.value})}}/>
                </div>

                <div className="form-group">
                    <label>Lycée</label>
                    <input type="text" className="form-control" placeholder="Lycée"  name="lycee" value={this.state.lycee}   onChange={(data)=>{this.setState({lycee:data.target.value})}}/>
                </div>

                <div className="form-group">
                    <label> Delegation</label>
                    <input type="text" className="form-control" placeholder=" delegation"  name="dlegation" value={this.state. delegation}   onChange={(data)=>{this.setState({delegation:data.target.value})}}/>
                </div>

                <div className="form-group">
                    <label>L'academie</label>
                    <input type="text" className="form-control" placeholder="academie"  name="academie" value={this.state.academie}   onChange={(data)=>{this.setState({academie:data.target.value})}}/>
                </div>





                <div className="form-group">
                    <label>Le nom de pere</label>
                    <input type="text" className="form-control" placeholder="nom de ton pere"  name="father_name" value={this.state.father_name}   onChange={(data)=>{this.setState({father_name:data.target.value})}}/>
                </div>


                <div className="form-group">
                    <label>La profession du pere</label>
                    <input type="text" className="form-control" placeholder="la profession de ton pere"  name="father_job" value={this.state.father_job}   onChange={(data)=>{this.setState({father_job:data.target.value})}}/>
                </div>



                <div className="form-group">
                    <label>Code Massar</label>
                    <input type="text" className="form-control" placeholder="Massar"  name="massar" value={this.state.massar}   onChange={(data)=>{this.setState({massar:data.target.value})}}/>
                </div>

                <div className="form-group">
                    <label>Ta photo</label>
                    <input type="file"   name="picture" value={this.state.picture}   onChange={(data)=>{this.setState({picture:data.target.value})}}/>
                </div>


                <div className="form-group">
                    <label>Le nom de mere</label>
                    <input type="text" className="form-control" placeholder="nom de mere"  name="mother_name" value={this.state.mother_name}   onChange={(data)=>{this.setState({mother_name:data.target.value})}}/>
                </div>


                <div className="form-group">
                    <label>Adresse</label>
                    <input type="text" className="form-control" placeholder="address"  name="address" value={this.state.address}   onChange={(data)=>{this.setState({address:data.target.value})}}/>
                </div>


                <div className="form-group">
                    <label>Téléphone</label>
                    <input type="text" className="form-control" placeholder="Téléphone"  name="phone" value={this.state.phone}   onChange={(data)=>{this.setState({phone:data.target.value})}}/>
                </div>

                <div className="form-group">
                    <label>Nationalité</label>
                    <select name="natio" className="form-control" value={this.state.natio}   onChange={(data)=>{this.setState({natio:data.target.value})}}>
                        
                        <option value="marocain">marocain</option>
                        <option value="etrang">2trangaire</option>

                    </select>
                </div>



                <div className="form-group">
                    <label>CIN</label>
                    <input type="text" className="form-control" placeholder="CIN"  name="cin" value={this.state.cin}   onChange={(data)=>{this.setState({cin:data.target.value})}}/>
                </div>


                <div className="form-group">
                    <label>Prenom</label>
                    <input type="text" className="form-control" placeholder="prenom"  name="firstname_fr" value={this.state.firstname_fr}   onChange={(data)=>{this.setState({firstname_fr:data.target.value})}}/>
                </div>


                <div className="form-group">
                    <label>الاسم</label>
                    <input type="text" className="form-control" placeholder="الاسم"  name="firstname_ar" value={this.state.firstname_ar}   onChange={(data)=>{this.setState({firstname_ar:data.target.value})}}/>
                </div>


                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" className="form-control" placeholder="nom"  name="lastname_fr" value={this.state.lastname_fr}   onChange={(data)=>{this.setState({lastname_fr:data.target.value})}}/>
                </div>



                

                <div className="form-group">
                    <label>الاسم  العائلة</label>
                    <input type="text" className="form-control" placeholder="nom"  name="lastname_ar" value={this.state.lastname_ar}   onChange={(data)=>{this.setState({lastname_ar:data.target.value})}}/>
                </div>




                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="email"  name="email" value={this.state.email}   onChange={(data)=>{this.setState({email:data.target.value})}}/>
                </div>



                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="password"  name="password" value={this.state.password}   onChange={(data)=>{this.setState({password:data.target.value})}}/>
                </div>




                <button onClick={()=>{this.submit()}} >Envoyer </button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </div>
        );
    }
}


















