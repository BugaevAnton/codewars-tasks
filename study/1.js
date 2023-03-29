const mockData = ['str1', 'str2', 'str3', 'str4'];

const arrayToStr = (arr) => {
    return arr.join('-')
}

function arrayToStrFn (arr) {
    return arr.join('-')
}

const arrayToStrConstFn = function (arr) {
    return arr.join('-')
}

const forEachCb = (trololo, index, arr) => {
    console.log('elem', trololo)
    console.log('index', index)
}

const run = () => {
    // const result1 = arrayToStr(mockData)
    // const result2 = arrayToStrFn(mockData)
    // const result3 = arrayToStrConstFn(mockData)
    // console.log(result1 === result2 && result2 === result3)
    
    // mockData.forEach(forEachCb)

    // reduce -> выводит строку, в которую плюсуется каждый нечетный элемент масива 
    const result = mockData.reduce((acc, item, index) => {        
        // console.log('acc', acc)
        // console.log('item', item)
        // console.log('index', index)
        if(index % 2 === 0) {
            return acc + item
        }
        return acc
    }, '')

    
    // mockData.map((item, i) => item+i).reduce(())
    
}



module.exports = {
    run
}