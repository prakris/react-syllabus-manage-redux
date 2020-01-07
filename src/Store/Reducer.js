import { USE } from './Action';
import { data } from '../Data'
 
const initialState ={
    subjectData: '',
    std:''
}

 const reducer = ( state = initialState, action ) =>
{ 
    switch(action.type)
    {
        case USE.SUBMIT:
                let selectStd=Object.assign(state.subjectData)
                 selectStd=data.find(match => match.standard == state.std)
                var selectSub=selectStd.content.find(match => match.subject == action.sub)
                return Object.assign({}, state, {
                    subjectData: selectSub
                })
           
        case USE.CHAPADD:
                let newData=Object.assign(state.subjectData)
                 console.log("newData",newData)
                 newData.chapter.push(action.data)
                 return Object.assign({}, state , {
                    subjectData: newData
             })
        
        case USE.TOPADD: 
                let addTop=Object.assign(state.subjectData)
                addTop.chapter[action.index].topic.push(action.value)
                return Object.assign({}, state, {
                    subjectData: addTop
                })

        case USE.CHAPDELETE: 
                let chapDel=Object.assign(state.subjectData)
                chapDel.chapter.splice(action.index,1)
                return Object.assign({}, state , {
                    subjectData: chapDel
                })

        case USE.TOPDELETE: 
                let topDel=Object.assign(state.subjectData)
                topDel.chapter[action.index].topic.splice(action.tindex,1)
                return Object.assign({}, state , {
                    subjectData: topDel
                })

        case USE.CHAPEDIT:
                let chapEdit=Object.assign(state.subjectData)
                chapEdit.chapter[action.index].chapterName= action.value
                return Object.assign({}, state, {
                    subjectData: chapEdit
                })

        case USE.TOPEDIT:
                let topEdit=Object.assign(state.subjectData)
                    topEdit.chapter[action.tcindex].topic[action.topindex] = action.topValue;
                    return Object.assign({}, state,{
                        subjectData: topEdit
                    })

        case USE.IN :
                let take = Object.assign(state.std)  
                take = action.event
                return Object.assign({}, state, {
                    std: take
                })

    }
    return state;
}


export default reducer;