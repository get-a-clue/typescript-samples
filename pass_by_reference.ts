interface foo {
    bar: string;
    properties: {
        prop1: string;
    };
}

const obj: foo = {
    bar: "bar_string",
    properties: {
        prop1: "1"
    }
};

const test: foo = {
    bar: obj.bar,
    properties: obj.properties
}

test.bar = "sample";
test.properties.prop1 = "WE'RE FUCKED HERE";
// but line below will work correctly
// test.properties = { prop1: "WE'RE FUCKED HERE" };

console.log(obj.bar === "bar_string");      // true
console.log(obj.properties.prop1 === "1");  // false
