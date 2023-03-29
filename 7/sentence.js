
function sentence(List) {
    const sortedList = List.sort( (a,b) =>{
      const aValue = Number(Object.keys(a)[0])
      const bValue = Number(Object.keys(b)[0])    
      return aValue - bValue;
    } ) 
    
    const result = sortedList.map( (item) =>{
      return Object.values(item)[0]
    })
      return result.join(' ');
    }


       
const checkSentence = () => {
    const expectedResult = 'Vatsan took his dog for a spin'
    

    const result = sentence([
            {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, 
            {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
        ])
    console.log(result, expectedResult)
}     
module.exports = {
    checkSentence
}