"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const arrayText = [
    {
        numericalId: 1,
        id: (0, uuid_1.v4)(),
        text: 'Some text1'
    },
    {
        numericalId: 2,
        id: (0, uuid_1.v4)(),
        text: 'Some text2'
    },
    {
        numericalId: 3,
        id: (0, uuid_1.v4)(),
        text: 'Some text3'
    },
    {
        numericalId: 4,
        id: (0, uuid_1.v4)(),
        text: 'Some text4'
    },
];
function BinarySearchText(arrayText, id) {
    let start = 0;
    let end = arrayText.length;
    let middle;
    console.log(arrayText.length);
    while (start <= end) {
        middle = Math.floor((start + end) / 2);
        if (id == arrayText[middle].numericalId) {
            console.log(arrayText[middle]);
            return arrayText[middle];
        }
        if (arrayText[middle].numericalId < id) {
            start = arrayText[middle].numericalId + 1;
        }
        if (arrayText[middle].numericalId > id) {
            end = arrayText[middle].numericalId - 1;
        }
    }
}
BinarySearchText(arrayText, 2);
