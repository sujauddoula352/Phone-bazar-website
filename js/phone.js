const loadPhone = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data
    console.log(phones)
    displayPhone(phones);
}
const displayPhone =(phones) =>{
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent='';



    phones.forEach(phone =>{

 const phoneCard =document.createElement('div');
  phoneCard.classList =`card  bg-base-100 shadow-xl`;
  phoneCard.innerHTML =`
  <figure class="px-10 pt-10">
    <img src=${phone.image} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>There are many variations of passages of available, but the majority have suffered</p>
    <h1 class="text-xl font-semibold">$999</h1>
    <div class="card-actions">
      <button class="btn btn-primary text-xl">Show Details</button>
    </div>
  </div>
  `
   phoneContainer.appendChild(phoneCard);

    });

};
//search handles
const handleSearch =() =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText)
    loadPhone(searchText);
};




