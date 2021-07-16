const json = `{
    "name":"register",
    "fields":[
    {
        "input":{
            "type":"text",
            "required":true,
            "placeholder":"Enter full name"
        }
    },
    {
        "input":{
            "type":"email",
            "required":true,
            "placeholder":"Enter email"
        }
    },
    {
        "input":{
            "type":"password",
            "required":true,
            "placeholder":"password"
        }
    },
    {
        "input":{
            "type":"password",
            "required":true,
            "placeholder":"Confirm password"
        }
    }
    ],
    "references":[
        {
            "text without ref":"Already have account?",
            "text":"Login",
            "ref":"signin"
        }
    ],
    "buttons":[
    {
        "text":"Sign Up"
    }
]
}`;

const h1 = document.getElementsByTagName('h1');
const form = document.getElementById('form');

let object = JSON.parse(json);
let objectKeys = Object.keys(object);
let label = 0;
let div = 0;

function createInput(array) {
    for (let i in array) {
        let arrayKeys = Object.keys(array[i]);
        for (let key of arrayKeys) {
            if (key == 'label') {
                label = document.createElement('label');
                label.innerHTML = array[i].label;
                form.append(label);
            } else if (key == 'input') {
                inputKeys = Object.keys(array[i].input)
                if (['email', 'password', 'number', 'file', 'text', 'date', 'checkbox'].includes(array[i].input['type'])) {
                    let input = document.createElement('input');
                    for (let k of inputKeys) {
                        console.log(k)
                        if (inputKeys.includes('mask')) {
                            array[i].input['type'] = 'text';
                            let im = new Inputmask(array[i].input['mask']);
                            im.mask(input);
                        } 
                        if (k !== 'mask' && k !== 'filetype' && k !== 'checked') {
                            input.setAttribute(k, array[i].input[k])
                        } else if (k == 'mask') {
                            input.setAttribute("placeholder", array[i].input[k]);
                        } else if (k == 'filetype') {
                            input.setAttribute('accept', `.${array[i].input[k].join(', .')}`)
                        }
                        form.append(input);
                    }
                } else if (array[i].input['type'] == 'textarea') {
                    let textarea = document.createElement('textarea');
                    textarea.setAttribute("required", 'true');
                    form.append(textarea);
                } else if (array[i].input['type'] == 'color') {
                    arrayColors = array[i].input['colors'];
                    for (let j = 0; j < arrayColors.length; j++) {
                        let input = document.createElement('input');
                        input.setAttribute("value", arrayColors[j])
                        input.setAttribute("type", "color")
                        form.append(input);
                    }
                } else {
                    let select = document.createElement('select');
                    for (let elem of inputKeys) {
                        if (Array.isArray(array[i].input[elem])) {
                            for (let el of array[i].input[elem]) {
                                select.innerHTML += `<option>${el}</option>`;
                            }
                        } else if (elem != 'type') {
                            select.setAttribute(elem, array[i].input[elem])
                        }
                    }
                    form.append(select);
                }
            }
        }
    }
}


function createReferences(array) {
    div = document.createElement('div')
    form.append(div);
    for (let i in array) {
        let arrayKeys = Object.keys(array[i]);
        for (let elem of arrayKeys) {
            if (elem == 'input') {
                let input = document.createElement('input');
                inputKeys = Object.keys(array[i].input)
                for (let k of inputKeys) {
                    console.log(k)
                    if (k !== 'checked') {
                        input.setAttribute(k, array[i].input[k])
                        div.append(input);
                    }
                }
            } else if (elem == 'text without ref') {
                span = document.createElement('span');
                span.innerHTML = array[i]['text without ref'];
                div.append(span);
            } else if (elem === 'text') {
                a = document.createElement('a');
                a.innerHTML = array[i]['text'];
                a.setAttribute('href', array[i]['ref'])
                div.append(a);
            } else if (elem === 'text') {
                a = document.createElement('a');
                a.innerHTML = array[i]['text'];
                a.setAttribute('href', array[i]['ref'])
                div.append(a);
            }
        }
    }
}

function createButton(element) {
    let button = document.createElement('button');
    button.innerHTML = element.text;
    return button;
}

function andere(objectKeys) {
    for (let key in objectKeys) {
        if (objectKeys[key] == 'fields') {
            let arrayFields = object[objectKeys[key]];
            createInput(arrayFields);

        } else if (objectKeys[key] == 'references') {
            let arrayReferences = object[objectKeys[key]];
            createReferences(arrayReferences);
        }
        else if (objectKeys[key] == 'buttons') {
            object[objectKeys[key]].forEach(el => form.append(createButton(el)));
        }
    }
}


andere(objectKeys);

