const reviewTotalDisplay = document.querySelector<HTMLHeadingElement>('#reviews')
const userNameDisplay = document.querySelector('#user')
const returningUserDisplay = document.querySelector('#returning-user')
const footer = document.querySelector(".footer")
import { Loyalty } from "./enums"

export function populateUser(isReturning : boolean, userName : string ) {
  if(returningUserDisplay === null) return
  if (isReturning){
      returningUserDisplay.innerHTML = 'back'
  }
  if(userNameDisplay === null) return
  userNameDisplay.innerHTML = userName
}

export function showReviewTotal(value : number, reviewer : string, isLoyalty: Loyalty) : void {
  const star = isLoyalty === Loyalty.GOLD_USER ? "⭐" : ""
  if(reviewTotalDisplay === null) return 
  reviewTotalDisplay.innerHTML =  value.toString() + " " + makeMultiple(value) + " | Last reviewed by " + reviewer + " " + star
}

export function recentReview(reviews: any) {
  reviews.sort((a : any, b: any) => {
    const dateA : any = new Date(a.date)
    const dateB : any = new Date(b.date)
  
    return dateA - dateB
  });
  return reviews[0]
  }

  export function populateFooter(currentLocation: [string, string, number]) {
    if (footer === null) return
    footer.innerHTML = currentLocation[0] + ", " + currentLocation[1] + ", " + currentLocation[2] + " degrees Celsius"
  }

  export function makeMultiple(value: number) : string {
    if (value > 1 || value === 0) {
      return 'reviews'
    } else return 'review'
  }