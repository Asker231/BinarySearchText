import {v4} from 'uuid'


interface IData{
    numericalId:number
    id:string,
    text:string
}

const arrayText:IData[] = [
    {
        numericalId:1,
        id:v4(),
        text: 'Some text1'
    },
    {
        numericalId:2,
        id: v4(),
        text: 'Some text2'
    },
    {
        numericalId:3,
        id: v4(),
        text: 'Some text3'
    },
    {
        numericalId:4,
        id: v4(),
        text: 'Some text4'
    },
]

function BinarySearchText(arrayText:IData[],id:number):IData|undefined{
    let start = 0;
    let end = arrayText.length;
    let middle;
    
    while(start <= end){
        middle = Math.floor((start+end)/2)
        if(id == arrayText[middle].numericalId){
            console.log(arrayText[middle]);
            return arrayText[middle]
        }
        if(arrayText[middle].numericalId < id){
            start = arrayText[middle].numericalId + 1
        }
        if(arrayText[middle].numericalId > id){
            end   = arrayText[middle].numericalId - 1
        }
    }
}
BinarySearchText(arrayText,2)
