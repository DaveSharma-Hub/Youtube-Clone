function searchFunction(list,token,keyList,caseSensitivityFlag){
    const searchResultList = [];
    const lowerCaseToken = token.toString().toLowerCase();
    list.map((item)=>{
        keyList.map((key)=>{
            const listValue = item[key].toString().toLowerCase();
            if(lowerCaseToken.includes(listValue) ||
                listValue.includes(lowerCaseToken)
            ){
                searchResultList.push(item);
            }
        })
    })
    return searchResultList;
}

module.exports = {
    searchFunction : searchFunction
}