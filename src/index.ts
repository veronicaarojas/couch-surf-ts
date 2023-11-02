const reviewTotalDisplay = document.querySelector<HTMLHeadingElement>('#reviews')
const userNameDisplay = document.querySelector('#user')
const returningUserDisplay = document.querySelector('#returning-user')

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

function showReviewTotal(value : number, reviewer : string, isLoyalty: boolean) {
  const star = isLoyalty ? "⭐" : ""
  if(reviewTotalDisplay === null) return 
  reviewTotalDisplay.innerHTML = 'review total: ' + value.toString() + "| Last reviewed by " + reviewer + " " + star
}

showReviewTotal(reviews.length, recentReview(reviews).name, recentReview(reviews).loyaltyUser)

function recentReview(reviews: any) {
reviews.sort((a : any, b: any) => {
  const dateA : any = new Date(a.date)
  const dateB : any = new Date(b.date)

  return dateA - dateB
});
return reviews[0]
}

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
  
}[] = [
  {}
]


function populateUser(isReturning : boolean, userName : string ) {
  if(returningUserDisplay === null) return
  if (isReturning){
      returningUserDisplay.innerHTML = 'back'
  }
  if(userNameDisplay === null) return
  userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.userName.firstName)