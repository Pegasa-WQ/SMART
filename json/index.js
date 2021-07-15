const json = `{
    "name":"website_color_scheme",
    "fields":[
        {
            "label":"Choose color scheme",
            "input":{
                "type":"color",
                "colors":["#3366ff","#009933","#990033","#996633"]
            }
        },
        {
            "input":{
                "type":"checkbox",
                "checked":"false"
            },
            "label":"Turn on dark theme?"
        }
    ]
}`;

const h1 = document.getElementsByTagName('h1');
const form2 = document.getElementById('form');

let object = JSON.parse(json);
let arrayKeys = Object.keys(object);
let fields = object.fields;
let label = 0;
let div = 0;

// function createInput(array) {
//     for (let i in array) {
//         let fieldKeys = Object.keys(array[i]);
//         for (let j of fieldKeys) {
//             if (j == 'label') {
//                 label = document.createElement('label');
//                 label.innerHTML = array[i].label;
//                 form2.append(label);
//             } else if (j == 'input') {
//                 let input = document.createElement('input');
//                 inputKeys = Object.keys(array[i].input)
//                 console.log(array[i].input['type'])
//                 if (array[i].input['type'] == 'textarea') {
//                     let textarea = document.createElement('textarea');
//                     textarea.setAttribute("required", 'true');
//                     form2.append(textarea);
//                 }
//                 for (let k of inputKeys) {
//                     if (k == 'colors') {
//                         arrayColors = array[i].input[k];
//                         for (let l = 0; l < arrayColors.length; l++) {
//                             let input = document.createElement('input');
//                             input.setAttribute("value", arrayColors[l])
//                             input.setAttribute("type", "color")
//                             form2.append(input);
//                         }
//                     } else if (k == 'technologies') {
//                         let select = document.createElement('select');
//                         select.setAttribute("multiple", "true");
//                         form2.append(select);
//                         arrayTeсhnology = array[i].input[k];
//                         for (let p = 0; p < arrayTeсhnology.length; p++) {
//                             let option = document.createElement('option')
//                             option.innerHTML = arrayTeсhnology[p];
//                             select.append(option);
//                         }
//                     } else if (array[i].input[k] !== 'color' && array[i].input['type'] !== 'textarea' && array[i].input['type'] !== 'technology') {
//                         input.setAttribute(k, array[i].input[k])
//                         form2.append(input);
//                     }
//                 }
//             }
//         }
//     }
// }

function createInput2(array) {
    for (let i in array) {
        let fieldKeys = Object.keys(array[i]);
        for (let j of fieldKeys) {
            if (j == 'label') {
                label = document.createElement('label');
                label.innerHTML = array[i].label;
                form2.append(label);
            } else if (j == 'input') {
                inputKeys = Object.keys(array[i].input)
                if (['email', 'password', 'number', 'file', 'text', 'date', 'checkbox'].includes(array[i].input['type'])) {
                    let input = document.createElement('input');
                    input.type = array[i].input['type'];
                    for (let k of inputKeys) {
                        input.setAttribute(k, array[i].input[k])
                        form2.append(input);
                    }
                } else if (array[i].input['type'] == 'textarea') {
                    let textarea = document.createElement('textarea');
                    textarea.setAttribute("required", 'true');
                    form2.append(textarea);
                } else if (array[i].input['colors']) {
                    arrayColors = array[i].input['colors'];
                        for (let l = 0; l < arrayColors.length; l++) {
                            let input = document.createElement('input');
                            input.setAttribute("value", arrayColors[l])
                            input.setAttribute("type", "color")
                            form2.append(input);
                        }
                } else {
                    for (let k of inputKeys) {
                        console.log(inputKeys)
                        if (Array.isArray(array[i].input[k])) {
                            let select = document.createElement('select');
                            select.setAttribute("multiple", "true");
                            form2.append(select);
                            arraySelect = array[i].input[k];
                            for (let p = 0; p < arraySelect.length; p++) {
                                let option = document.createElement('option')
                                option.innerHTML = arraySelect[p];
                                select.append(option);
                            }
                        }
                    }
                }
            }
        }
    }
}

function createReferences(array) {
    div = document.createElement('div')
    form2.append(div);
    for (let i in array) {
        let Keys = Object.keys(array[i]);
        for (let q of Keys) {
            if (q == 'input') {
                let input = document.createElement('input');
                inputKeys = Object.keys(array[i].input)
                for (let k of inputKeys) {
                    if (k !== 'checked') {
                        input.setAttribute(k, array[i].input[k])
                        div.append(input);
                    }
                }
            } else if (q == 'text without ref') {
                span = document.createElement('span');
                span.innerHTML = array[i]['text without ref'];
                div.append(span);
            } else if (q === 'text') {
                a = document.createElement('a');
                a.innerHTML = array[i]['text'];
                a.setAttribute('href', array[i]['ref'])
                div.append(a);
            } else if (q === 'text') {
                a = document.createElement('a');
                a.innerHTML = array[i]['text'];
                a.setAttribute('href', array[i]['ref'])
                div.append(a);
            }
        }
    }
}


function andere(arrayKeys) {
    for (let m in arrayKeys) {
        if (arrayKeys[m] == 'fields') {
            let arrayFields = object[arrayKeys[m]];
            createInput2(arrayFields);
            
        } else if (arrayKeys[m] == 'references') {
            let arrayReferences = object[arrayKeys[m]];
            createReferences(arrayReferences);
        }
        else if (arrayKeys[m] == 'buttons') {
            let button = document.createElement('button');
            button.innerHTML = arrayKeys[m]['text'];
            form2.append(button);
        }
    }
}


andere(arrayKeys);

