const scoreReduce = (score) => {
  return score.reduce((prev,curr)=>{
      if(curr.total>prev.total){
        return curr
      }
      return prev
  })
}

export default scoreReduce
