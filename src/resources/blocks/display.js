import javascriptGenerator from '../javascriptGenerator';
import registerBlock from '../register';

const categoryPrefix = 'display_';
const categoryColor = '#f73030';

function register() {
    registerBlock(`${categoryPrefix}displaychattext`, {
        message0: 'display %1 in chat',
        args0: [
            {
                "type": "input_value",
                "name": "TEXT1"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor,
    }, (block) => {
        const TEXT1 = javascriptGenerator.valueToCode(block, 'TEXT1', javascriptGenerator.ORDER_ATOMIC);
        const code = `ModAPI.displayToChat({msg: ${TEXT1}});`;
        return `${code}\n`;
    })
    registerBlock(`${categoryPrefix}currentscreen`, {
        message0: 'current screen name',
        args0: [],
        output: "String",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        return [`ModAPI.currentScreen()`, javascriptGenerator.ORDER_ATOMIC];
    })
    registerBlock(`${categoryPrefix}getdisplayHeight`, {
        message0: 'display Height (px)',
        args0: [],
        output: "String",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        return [`ModAPI.getdisplayHeight()`, javascriptGenerator.ORDER_ATOMIC];
    })
    registerBlock(`${categoryPrefix}getdisplayWidth`, {
        message0: 'display Width (px)',
        args0: [],
        output: "String",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        return [`ModAPI.getdisplayWidth()`, javascriptGenerator.ORDER_ATOMIC];
    })
    registerBlock(`${categoryPrefix}drawstring`, {
        message0: 'draw %1 to x: %2 and y: %3 on screen with color %4',
        args0: [
            {
                "type": "input_value",
                "name": "TEXT1"
            }
        ],
        args1: [
            {
                "type": "input_value",
                "name": "TEXT2"
            }
        ],
        args2: [
            {
                "type": "input_value",
                "name": "TEXT3"
            }
        ],
        args3: [
            {
                "type": "input_value",
                "name": "TEXT4"
            }
        ],
        args4: [
            {
                "type": "input_value",
                "name": "TEXT5"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor,
    }, (block) => {
        const TEXT1 = javascriptGenerator.valueToCode(block, 'TEXT1', javascriptGenerator.ORDER_ATOMIC);
        const TEXT2 = javascriptGenerator.valueToCode(block, 'TEXT1', javascriptGenerator.ORDER_ATOMIC);
        const TEXT3 = javascriptGenerator.valueToCode(block, 'TEXT1', javascriptGenerator.ORDER_ATOMIC);
        const TEXT4 = javascriptGenerator.valueToCode(block, 'TEXT1', javascriptGenerator.ORDER_ATOMIC);
        const TEXT5 = javascriptGenerator.valueToCode(block, 'TEXT1', javascriptGenerator.ORDER_ATOMIC);
        const code = `ModAPI.drawString({msg: ${TEXT1}, x: ${TEXT2}, y: ${TEXT3}, color: ${TEXT4}});`;
        return `${code}\n`;
    })
    registerBlock(`${categoryPrefix}drawstringwithshadow`, {
        message0: 'draw %1 to x: %2 and y: %3 on screen with color %4 with shadow',
        args0: [
            {
                "type": "input_value",
                "name": "TEXT1"
            }
        ],
        args1: [
            {
                "type": "input_value",
                "name": "TEXT2"
            }
        ],
        args2: [
            {
                "type": "input_value",
                "name": "TEXT3"
            }
        ],
        args3: [
            {
                "type": "input_value",
                "name": "TEXT4"
            }
        ],
        args4: [
            {
                "type": "input_value",
                "name": "TEXT5"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor,
    }, (block) => {
        const TEXT1 = javascriptGenerator.valueToCode(block, 'TEXT1', javascriptGenerator.ORDER_ATOMIC);
        const TEXT2 = javascriptGenerator.valueToCode(block, 'TEXT1', javascriptGenerator.ORDER_ATOMIC);
        const TEXT3 = javascriptGenerator.valueToCode(block, 'TEXT1', javascriptGenerator.ORDER_ATOMIC);
        const TEXT4 = javascriptGenerator.valueToCode(block, 'TEXT1', javascriptGenerator.ORDER_ATOMIC);
        const TEXT5 = javascriptGenerator.valueToCode(block, 'TEXT1', javascriptGenerator.ORDER_ATOMIC);
        const code = `ModAPI.drawStringWithShadow({msg: ${TEXT1}, x: ${TEXT2}, y: ${TEXT3}, color: ${TEXT4}});`;
        return `${code}\n`;
    })
}

export default register;
