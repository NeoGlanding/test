/*
buatlah sebuah fungsi untuk mengubah urutan sebuah text 
dengan cara mengubah urutan dengan aturan:
1. text tersebut dibelah menjadi 2 bagian dari tengah
3. jika panjang text tersebut adalah ganjil, maka 
huruf tengah dibiarkan
2. bagian depan diurutkan terbalik, dan bagian belakang 
dibiarkan tetap
​*/

// contoh :
// genap
// text = "asikasik"
// step 1 =  "asik"|"asik"
// step 2 = "kisa" | "asik"
// step 3 = "kisaasik"
// ​
// ​
// ganjil
// text = "pratama"
// step 1 =  "pra"|"t"|"ama"
// step 2 = "arp" |"t"|"ama"
// step 3 = "arptama"

function change(text) {
    let complete = '';
    let middle = '';
    console.log(text)
    if (text.length % 2 === 1) {
       middle = (text.length - 1) / 2;
       console.log(text[middle])
       for (let i = middle - 1;i>=0;i--) complete += text[i];
    } else {
        middle = (text.length / 2) - 1;
        console.log(text[middle]);
        for (let i = middle;i>=0;i--) complete += text[i]
    }
    for (let i = middle + 1;i<text.length;i++) complete += text[i];
    console.log(complete)
}

change('ihsan')