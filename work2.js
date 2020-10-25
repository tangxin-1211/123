// 第一题

function mean1() {

  let sum = 0

  let s =0;

  for(let i=0; i <arguments.length; i++) {

​      sum+=(arguments[i]);

  }

  s =sum/arguments.length

  return s;

}

let a = mean1(1,2,3,4,5)

console.log(a)



// 第二题

function mean2(num){

  const sum =num.reduce((sum,curVal)=>sum+curVal)/num.length;

  return sum; 

}

let a = mean2([1,2,3,4,5])

console.log(a)



// 第三题

const abd = []; //新数组存储偶数

const mean2 = () => {

    let l = abd.length;

    let Avg = abd.reduce((abd, sum) => asd + sum) / l;

    console.log(Avg)

} 

const mean3 = (arr1, callback) => {

    const arr2 = arr1.map((sum) => {

        if (sum % 2 == 0) {

            return sum

        }

    }) 
   

    arr2.forEach(

        item => {

            if (item) {

                abd.push(item)

            }

        }

    ) 

    if (typeof (callback) === "function") {

        callback()

    } 

}

mean3([1, 2, 3, 4, 5, 6, 7, 8], mean2)
