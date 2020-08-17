/**
 * Examples of object types in TypeScript
 */
interface LabeledObjWithInterfaceKeyword {
  label: string;
  value: number;
}

function printLabelWithInterfaceKeyword(
  labeledObj: LabeledObjWithInterfaceKeyword
) {
  console.log(labeledObj.label, labeledObj.value);
}

type LabeledObjWithTypeKeyword = {
  label: string;
  value: number;
};

function printLabelWithTypeKeyword(labeledObj: LabeledObjWithTypeKeyword) {
  console.log(labeledObj.label, labeledObj.value);
}

/**
 * Examples of arra types in TypeScript
 */
const arrayOfNumbers1: number[] = [1, 2, 3, 4, 5];

const arrayOfNumbers2: Array<number> = [1, 2, 3, 4, 5];

interface ExampleObject {
  label: string;
  value: number;
}

const arrayOfExampleObjects: Array<ExampleObject> = [
  { label: "label1", value: 1 },
  { label: "label2", value: 2 },
  { label: "label3", value: 3 },
];
