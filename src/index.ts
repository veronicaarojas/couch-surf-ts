import { populateUser, showReviewTotal, recentReview, populateFooter } from "./utils";
import { Permissions, Loyalty } from "./enums";

const propertyContainer = document.querySelector(".properties")


const reviews : ({
  name: string;
  stars: number;
  loyaltyUser: Loyalty;
  date: string;
} | 
{
  name: string;
  stars: number;
  loyaltyUser: Loyalty;
  date: string;
  description: string
})[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: Loyalty.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: Loyalty.SILVER_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: Loyalty.BRONZE_USER,
        date: '27-03-2021', 
        description: "good location"
    },
]



showReviewTotal(reviews.length, recentReview(reviews).name, recentReview(reviews).loyaltyUser)



// const you : {
//   userName: {
//     firstName: string;
//     lastName: string;
//   }
//   isReturning: boolean;
//   age: number;
//   stayedAt: string[];
// } = {
//   userName: {firstName: 'Bobby', lastName: 'Brown'},
//   isReturning: true,
//   age: 35,
//   stayedAt: ['Tokyo, Hvar, Hong Kong']
// }

const you : {
  userName: {
    firstName: string;
    lastName: string;
  }
  isReturning: boolean;
  permissions: Permissions
  age: number;
  stayedAt: string[];
}  = {
  userName: {firstName: 'Bobby', lastName: 'Brown'},
  isReturning: true,
  permissions: Permissions.ADMIN,
  age: 35,
  stayedAt: ['Tokyo, Hvar, Hong Kong']
}

const properties : { 
image: string;
title: string;
price: number;
address: {
  firstLine: string;
  city: string;
  postcode: string | number;
  country: string
}
contact: [number, string];
isAvailable: boolean
}[] = [
  {
    image: "",
    title: "Colombian Apartment",
    price: 70,
    address: {
      firstLine: "1234 Medellin Street",
      city: "Medellin",
      postcode: 8909,
      country: "Colombia"
    },
    contact: [ 12457, "jamesrodriguez@gmail.com"],
    isAvailable: true
  },
  {
    image: "",
    title: "Marrakech Riad",
    price: 65,
    address: {
      firstLine: '20 Marrakech Street',
      city: "Marrakech",
      postcode: 123,
      country: "Morcocco "
    },
    contact: [ 1234,"ana2023@gmail.com"],
    isAvailable: false
  },
  {
    image: '',
    title: 'London Flat',
    price: 23,
    address: {
        firstLine: 'flat 15',
        city: 'London',
        postcode: 35433,
        country: 'United Kingdom',
    },
    contact: [ 1234,'andyluger@aol.com'],
    isAvailable: true
}
]

function showProperties(properties: { 
  image: string;
  title: string;
  price: number;
  address: {
    firstLine: string;
    city: string;
    postcode: string | number;
    country: string
  }
  contact: [number, string];
  isAvailable: boolean
  }[]) {
  for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    if (propertyContainer === null) return
    propertyContainer.appendChild(card)
  }
}

showProperties(properties);


populateUser(you.isReturning, you.userName.firstName)

let currentLocation : [string, string, number] = [ 'Brisbane', "6:01pm", 23 ]



populateFooter(currentLocation)

