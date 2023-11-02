const reviewTotalDisplay = document.querySelector<HTMLHeadingElement>('#reviews')
const userNameDisplay = document.querySelector('#user')
const returningUserDisplay = document.querySelector('#returning-user')

export function populateUser(isReturning : boolean, userName : string ) {
  if(returningUserDisplay === null) return
  if (isReturning){
      returningUserDisplay.innerHTML = 'back'
  }
  if(userNameDisplay === null) return
  userNameDisplay.innerHTML = userName
}

export function showReviewTotal(value : number, reviewer : string, isLoyalty: boolean) {
  const star = isLoyalty ? "⭐" : ""
  if(reviewTotalDisplay === null) return 
  reviewTotalDisplay.innerHTML = 'review total: ' + value.toString() + "| Last reviewed by " + reviewer + " " + star
}

export function recentReview(reviews: any) {
  reviews.sort((a : any, b: any) => {
    const dateA : any = new Date(a.date)
    const dateB : any = new Date(b.date)
  
    return dateA - dateB
  });
  return reviews[0]
  }