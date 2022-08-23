export const getColor = (count) => {
    if(count === 0){
        return "black"
      }else if(count % 2 === 0){
        return "red"
      }else{
        return "blue"
      }
}