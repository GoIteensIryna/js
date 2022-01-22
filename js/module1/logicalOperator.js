	

// false, 0, null, NaN, underfined, ""

//  &&

// const num = 20;
// const result = num < 10 && num < 30;
// console.log(result); 

// const  a = 0 > 1 && 2 > 1;
// console.log("a", a);




// const num = 40;
// const result = num > 10 && num < 30;
// console.log(result); // false

// const variables = "I'm truthy" && NaN;
// console.log(`"I'm truthy" && NaN =`, variables);

// const variables2 = "I'm truthy" && false && 0;
// console.log(`"I'm truthy" && false && 0 =`, variables2)

// const variables3 = "I'm truthy" && 5 && 0 
// console.log(`"I'm truthy" && 5 && 0 =`, variables3)

// const variable4 =  "I'm truthy" && "It doesnt matter" && 5
// console.log(`"I'm truthy" && "It doesnt matter" && 5 =`, variable4)

// ==================================================

// ||

// const num = 5;
// const result = num < 3|| num > 4;
// console.log(result); 

// const num = 40;
// const result = num < 10 || num > 30;
// console.log(result); // true

// const num = 20;
// const result = num < 10 || num > 30;
// console.log(result); // false

// const a = "truthy string" || false || 10;
// const b =  false || 0 || "hello";
// const c = NaN || "hi" || 0 ;

// console.log(`"truthy string" || false || 10 =`, a);
// console.log(`false || 0 || "hello" = `, b);
// console.log(`NaN || "Hi || 0 = `, c);

// ============================================================
// !

// ===   !==

// console.log(!true); 
// console.log(!false); 
// console.log(!1); 
// console.log(!0); 