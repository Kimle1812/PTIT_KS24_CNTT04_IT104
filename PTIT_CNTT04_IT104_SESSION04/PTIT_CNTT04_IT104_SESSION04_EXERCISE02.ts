let numbers: number[] = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
function agv(numbers:number[]):number{
    let sum :number = 0;
    
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i]!;
    }
    return sum;
}
let average: number = agv(numbers) / numbers.length;
console.log(`Giá trị trung bình của mảng là: ${average.toFixed(2)}`);