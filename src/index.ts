import { populateUser, showReviewTotal, recentReview } from "./utils";

const propertyContainer = document.querySelector(".properties")

const reviews : {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string
}[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]



showReviewTotal(reviews.length, recentReview(reviews).name, recentReview(reviews).loyaltyUser)



const you : {
  userName: {
    firstName: string;
    lastName: string;
  }
  isReturning: boolean;
  age: number;
  stayedAt: string[];
} = {
  userName: {firstName: 'Bobby', lastName: 'Brown'},
  isReturning: true,
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
contact: string | number;
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
    contact: "jamesrodriguez@gmail.com",
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
    contact: "ana2023@gmail.com",
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
    contact: 'andyluger@aol.com',
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
  contact: string | number;
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