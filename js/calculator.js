const getElementText = (id, value) =>{
    const getId = document.getElementById(id).value = value;
    return getId;
};
const number = (id) =>{
    const getId = document.getElementById(id).innerText;
    const getString = parseFloat(getId);
    return getString;
};
document.getElementById('calculator').addEventListener('click', function(event){
    const calculatorBtn = event.target.innerText;
    const inputField = document.getElementById('input-fields');
    const fieldValue = inputField.value;

    if(isNaN(calculatorBtn)){
        if(calculatorBtn === 'AC'){
            inputField.value = '';
        }
        else if(calculatorBtn === 'Del'){
            const del = fieldValue.split('');
            del.pop();
            const lastDigit = del.join('');
            getElementText('input-fields',lastDigit);
        }
    }
    else{
        const num = fieldValue + calculatorBtn;
        inputField.value = num;
    };
});

// const multiple_pi =()=>{

//     if(calculatorBtn === 'pi'){
//         const pi = 3.14;
//         // const piSum = inputField.value * pi ;
//         getElementText('input-fields', pi);
//     }
// }