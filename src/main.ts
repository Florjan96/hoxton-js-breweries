// import './style.css';

let state = {
   USState: '',
    breweries: []
  }

function breweriesForEachState(){
fetch(`https://api.openbrewerydb.org/breweries?by_state=${state.USState}`)
.then(resp=>resp.json())
.then(breweries=>{
  state.breweries=breweries
 

} 


  )

}


function writeState(){
  let formEl=document.querySelector('#select-state-form')
  formEl.addEventListener('submit',function(event){
    event.preventDefault()
   let USState=formEl['select-state'].value
   state.USState=USState
   breweriesForEachState()
  })
}
// window.state=state
writeState()


// function renderBreweryList(){

// }




  
  function renderBrewery(){
let brewery1=
    {
      address_2: null,
      address_3: null,
      brewery_type: 'large',
      city: 'San Diego',
      country: 'United States',
      county_province: null,
      created_at: '2018-07-24T00:00:00.000Z',
      id: 8041,
      latitude: '32.714813',
      longitude: '-117.129593',
      name: '10 Barrel Brewing Co',
      obdb_id: '10-barrel-brewing-co-san-diego',
      phone: '6195782311',
      postal_code: '92101-6618',
      state: 'California',
      street: '1501 E St',
      updated_at: '2018-08-23T00:00:00.000Z',
      website_url: 'http://10barrel.com'
    }



  let articleMain=document.createElement('article')
  // articleMain.className='article-brewery'
  let breweryUl=document.createElement('ul')
breweryUl.className="breweries-list"

  let li=document.createElement('li')

  let h2=document.createElement('h2')
h2.textContent=brewery1.name

  let div=document.createElement('div')
div.className="type"
div.textContent=brewery1.brewery_type


     
  let sectionAdress=document.createElement('section')
  sectionAdress.className='address:'
  
  
  
  let h3=document.createElement('h3')
h3.textContent='Address:'



  let pAdress=document.createElement('p')
  pAdress.textContent=brewery1.street
  
  let pRoad=document.createElement('p')
pRoad.textContent='Chardon,44024'


  let sectionPhone=document.createElement('section')
sectionPhone.className="phone"

  let phone=document.createElement('h3')
phone.textContent="Phone:"

  let phoneNr=document.createElement('p')
phoneNr.textContent=brewery1.phone


  let sectionLink=document.createElement('section')
sectionLink.className='link'

  let a=document.createElement('a')
  a.href=brewery1.website_url
  a.target="_blank"
  a.textContent="Visit Website"
  
  
    
    sectionAdress.append(h3,pAdress,pRoad)
    sectionPhone.append(phone,phoneNr)
    sectionLink.append(a)
    li.append(h2,div,sectionAdress,sectionPhone,sectionLink)
    breweryUl.append(li)
    articleMain.append(breweryUl)
    
  
    let main=document.querySelector('main')
  
    main.append(articleMain)
    
  
    
    }
    renderBrewery()
    renderBrewery()
    renderBrewery()
    renderBrewery()
    renderBrewery()

  function header(){

//     <h1>List of Breweries</h1>
// <header class="search-bar">
//   <form id="search-breweries-form" autocomplete="off">
//     <label for="search-breweries"><h2>Search breweries:</h2></label>
//     <input id="search-breweries" name="search-breweries" type="text" />
//   </form>
// </header>

let main=document.querySelector('main')
if (main===null)return

let h1=document.createElement('h1')
h1.textContent="List of Breweries"

let header=document.createElement('header')
header.className='search-bar'


let form=document.createElement('form')
form.id="search-breweries-form"



let label=document.createElement('label')
label.htmlFor='search-breweries'

let h2=document.createElement('h2')
h2.textContent='Search breweries:'

let input=document.createElement('input')
input.id="search-breweries"
input.name="search-breweries"
input.type="text"

label.append(h2)
form.append(label,input)
header.append(form)
main.append(header,h1)



  }

  header()


function render(){
  let main=document.querySelector('main')
  if (main===null)return
  main.textContent=''

  header()
  renderBrewery()
  renderBrewery()
  renderBrewery()
  renderBrewery()
  renderBrewery()

}
// ??????????
render()

