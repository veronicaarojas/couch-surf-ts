import { populateUser, showReviewTotal, recentReview, populateFooter, makeMultiple, getTopTwoReviews } from "./utils"
import { Permissions, Loyalty } from "./enums"
import type { Price, Country } from "./types"
import type { Review } from "./interfaces"
const propertyContainer = document.querySelector(".properties")
const reviewContainer = document.querySelector('.reviews')
const container = document.querySelector('.container')
const button = document.querySelector('button')
const footer = document.querySelector('.footer')


let isLoggedIn: boolean = true

const reviews : Review[] = [
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
    },
]


makeMultiple(reviews.length)
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
price: Price;
address: {
  firstLine: string;
  city: string;
  postcode: string | number;
  country: Country
}
contact: [number, string];
isAvailable: boolean
}[] = [
  {
    image: "",
    title: "Colombian Apartment",
    price: 30,
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
    price: 25,
    address: {
      firstLine: '20 Marrakech Street',
      city: "Marrakech",
      postcode: 123,
      country: "Morocco"
    },
    contact: [ 1234,"ana2023@gmail.com"],
    isAvailable: false
  },
  {
    image: '',
    title: 'London Flat',
    price: 30,
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
    showDetails(you.permissions, card, properties[i].price)
  }
}





populateUser(you.isReturning, you.userName.firstName)

let currentLocation : [string, string, number] = [ 'Brisbane', "6:01pm", 23 ]




showProperties(properties);

function showDetails(authorityStatus: boolean | Permissions, element: HTMLDivElement, price: number){
  if (authorityStatus || authorityStatus === Permissions.ADMIN || Permissions.READ_ONLY ) {
    const priceDisplay = document.createElement('div')
    priceDisplay.innerHTML = price.toString() + '/night'
    element.appendChild(priceDisplay)
  }
}

let count = 0
function addReviews(array: Review[]
): void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            if (reviewContainer)
            reviewContainer.appendChild(card)
        }
        if (container && button)
        container.removeChild(button) 
    }
}

function buttonEvent() {
  if (button)
  button.addEventListener('click', () => addReviews(reviews))
}

buttonEvent();

class MainProperty {
  reviews: Review[]
  src: string
  title: string
  constructor(reviews : Review[], src : string, title: string) {
    this.reviews = reviews
    this.src = src
    this.title = title
  }
}




populateFooter(currentLocation)

