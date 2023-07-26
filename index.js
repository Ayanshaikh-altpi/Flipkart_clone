const btn = document.querySelector(".login")
const logout = document.querySelector(".logout")
const parentCon = document.querySelector('.electronic')

const user = JSON.parse(localStorage.getItem('user'))
console.log(user);

if (user) {
    btn.style.display = 'none'
    logout.style.display = 'block'
}

logout.addEventListener('click', function (e) {
    localStorage.removeItem('user')
    localStorage.setItem('user', false)
    if (user) {
        btn.style.display = 'none'
        logout.style.display = 'block'
    }
})

let shoes = [
    { id: 1, name: 'Adidas', price: 500 },
    { id: 2, name: 'Jordan', price: 500 },
    { id: 3, name: 'Nike', price: 500 }
]

let id = 1
let item = []

const data = shoes.find(shoe => shoe.id === id)
item = [...item, data]
localStorage.setItem('item', JSON.stringify(item))

console.log(JSON.parse(localStorage.getItem('item')));

parentCon.addEventListener('click', function (e) {
    const data = e.target
    if (data.getAttribute('src')) {
        item.push(data.src)
        localStorage.setItem('cartItem', JSON.stringify(item))
        console.log(data);
        console.log(item);
    } else {
        console.log('Bahar');
    }

})
