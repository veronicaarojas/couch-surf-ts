const reviewTotalDisplay = document.querySelector<HTMLHeadingElement>('#reviews')

const reviews = [
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

function showReviewTotal(value : number, reviewer : string, loyalty: boolean) {
  const star = loyalty ? "⭐" : ""
  if(reviewTotalDisplay === null) return 
  reviewTotalDisplay.innerHTML = 'review total: ' + value.toString() + ", Last reviewed by " + reviewer + " " + star
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