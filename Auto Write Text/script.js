const text = "My name is Nazre Imam Tahmid";
const text2 = "I am 23 years old";
const text3 = "I am studying CSE at Daffodil International University";
let index = 0;
let i = 0;
let j = 0;

function writeText(){
    document.body.innerText = text.slice(0,index);
    index++;
    if(index > text.length+1){
        document.body.innerText = text2.slice(0,i);
        i++;
        if(i > text2.length+1){
            document.body.innerText = text3.slice(0,j);
            j++;
            if(j > text3.length){
                index = 0;
                i = 0;
                j = 0;
            }
        } 
    }
}

setInterval(() => {
    writeText();
}, 100);

