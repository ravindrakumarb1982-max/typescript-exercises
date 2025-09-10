function mutiplicationTable(num: number, limit: number): void {
    for (let i: number = 1; i <= limit; i++) {
        console.log(`${num} X ${i} = ${num * i}`)
    }
}

let tup: [number, number] = [4, 10];
console.log(" Table Number " + tup[0] + " Limit up to " + tup[1]);
mutiplicationTable(tup[0], tup[1])