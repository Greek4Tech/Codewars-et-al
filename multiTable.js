let enterNum = Number(prompt("enter num from 2 to 9"))
if (enterNum >=2 && enterNum <=9) {
    for (let i=0; i<=enterNum; i++) {
        console.log(`${enterNum} * ${i} = ${enterNum*i}`)
    }
} else {
    console.log("enter valid entry")
}

