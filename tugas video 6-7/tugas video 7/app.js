// core module
//file system

const fs = require('fs');
console.log(fs);

// try {
//     fs.writeFileSync('test.txt', 'Hello World secara synchronous!');
// } catch (e) {
//     console.log(e);
// }

//menuliskan string ke file
// fs.writeFile('test.txt', 'Hello world secara Asynchronous', (e) =>{
//     console.log(e);
// });

// //membaca isi file (synchronous)
// const data = fs.readFileSync('data/contacts.json', 'utf-8');
// console.log(data);

//membaca isi file (Asynchronous)
// fs.readFile('test.txt', 'utf-8', (err, data) =>{
//     if (err) throw err;
//     console.log(data);
// });de

//readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukkan nama anda : ', (nama) => {
    rl.question('Masukkan no HP anda : ', (noHP) => {
    const contact = { nama, noHP};
    const file = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts = JSON.parse(file);
    console.log(contacts);

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log('Terimakasih sudah memasukkan data.');

    rl.close();
    });
});