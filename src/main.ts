const baseUrl = 'https://api.openbrewerydb.org/breweries'
// const selectStateForm = document.querySelector("#select-state-form")

let state = {
   USState: '',
    breweries: []
  }







  
  function brewery(){

    //   <ul class="breweries-list">
    //   <li>
    //     <h2>Snow Belt Brew</h2>
    //     <div class="type">micro</div>
    //     <section class="address">
    //       <h3>Address:</h3>
    //       <p>9511 Kile Rd</p>
    //       <p><strong>Chardon, 44024</strong></p>
    //     </section>
    //     <section class="phone">
    //       <h3>Phone:</h3>
    //       <p>N/A</p>
    //     </section>
    //     <section class="link">
    //       <a href="null" target="_blank">Visit Website</a>
    //     </section>
    //   </li>
    //   // More list elements
    // </ul>
  
  let articleMain=document.querySelector('article')
  
  let breweryUl=document.createElement('ul')
breweryUl.className="breweries-list"

  let li=document.createElement('li')

  let h2=document.createElement('h2')
h2.textContent='Snow Belt Brew'

  let div=document.createElement('div')
div.className="type"
div.textContent='micro'


     
  let sectionAdress=document.createElement('section')
  sectionAdress.className='address:'
  
  
  
  let h3=document.createElement('h3')
h3.textContent='Address:'



  let pAdress=document.createElement('p')
  pAdress.textContent='9511 Kile Rd'
  
  let pRoad=document.createElement('p')
pRoad.textContent='Chardon,44024'

    //       <h3>Phone:</h3>
    //       <p>N/A</p>
    //     </section>
  let sectionPhone=document.createElement('section')
sectionPhone.className="phone"

  let phone=document.createElement('h3')
phone.textContent="Phone:"

  let phoneNr=document.createElement('p')
phoneNr.textContent='N/A'


    //       <a href="null" target="_blank">Visit Website</a>
    //     </section>
  let sectionLink=document.createElement('section')
sectionLink.className='link'

  let a=document.createElement('a')
  a.href='null'
  a.target="_blank"
  a.textContent="Visit Website"
  
  
    
    sectionAdress.append(h3,pAdress,pRoad)
    sectionPhone.append(phone,phoneNr)
    sectionLink.append(a)
    li.append(h2,div,sectionAdress,sectionPhone,sectionLink)
    breweryUl.append(li)
    articleMain.append(breweryUl)
  
    // let main=document.querySelector('main')
  
    // main?.append(articleMain)
    
  
    
    }
    brewery()

  function header(){

//     <h1>List of Breweries</h1>
// <header class="search-bar">
//   <form id="search-breweries-form" autocomplete="off">
//     <label for="search-breweries"><h2>Search breweries:</h2></label>
//     <input id="search-breweries" name="search-breweries" type="text" />
//   </form>
// </header>

let main=document.querySelector('main')

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


