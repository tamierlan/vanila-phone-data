var state = [
  {
    id: 0,
    name: 'iphone 5',
    brand_new: true,
    desc: "iphone 5 white, 128gb, brand new, with box",
    price: '99.99',
    detail: 'Efficiently manage your busy lifestyle with this iPhone 7 in black. Great for enhancing your user experience, this smartphone is equipped with a quad-core processor so that you can switch seamlessly between your apps. This model features 128 GB of internal memory for easy access to all of your media',
    in_stock: 5,
    img_url: 'https://img.pngio.com/iphone-5s-png-98-images-in-collection-page-1-iphone-5-png-804_1012.png'
  },
  {
    id: 1,
    name: 'iphone 6',
    brand_new: false,
    desc: "iphone 5 white, 16gb, used , some scratches on screen",
    price: '149.99',
    detail: 'Efficiently manage your busy lifestyle with this iPhone 7 in black. Great for enhancing your user experience, this smartphone is equipped with a quad-core processor so that you can switch seamlessly between your apps. This model features 128 GB of internal memory for easy access to all of your media',
    in_stock: 8,
    img_url: 'https://sa.pricenacdn.com/img?d=ax300&src=https%3A%2F%2Fcf2.s3.souqcdn.com%2Fitem%2F2015%2F05%2F07%2F82%2F55%2F63%2F2%2Fitem_XL_8255632_7812799.jpg'
  },
  {
    id: 2,
    name: 'iphone 7',
    brand_new: true,
    desc: "iphone 7 white, 32gb, brand new",
    price: '199.99',
    detail: 'Efficiently manage your busy lifestyle with this iPhone 7 in black. Great for enhancing your user experience, this smartphone is equipped with a quad-core processor so that you can switch seamlessly between your apps. This model features 128 GB of internal memory for easy access to all of your media',
    in_stock: 2,
    img_url: 'https://mydigitech.in/ecommerce/img/Frontend/iphone7plus.jpg'
  },
  {
    id: 3,
    name: 'iphone x',
    brand_new: true,
    desc: "iphone x white, 128gb, brand new, with box",
    price: '249.99',
    detail: 'Efficiently manage your busy lifestyle with this iPhone 7 in black. Great for enhancing your user experience, this smartphone is equipped with a quad-core processor so that you can switch seamlessly between your apps. This model features 128 GB of internal memory for easy access to all of your media',
    in_stock: 5,
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ-Qzvl-InC6QUOZ1XgyLZa8MOvUKyxDQiiQB-Sw46BQGb5H2BpKxWXVtxqtY6QRpNqQRvPHh3&usqp=CAc'
  },
  {
    id: 4,
    name: 'iphone xr',
    brand_new: false,
    desc: "iphone xr white, 16gb, used , some scratches on screen",
    price: '347',
    detail: 'Efficiently manage your busy lifestyle with this iPhone 7 in black. Great for enhancing your user experience, this smartphone is equipped with a quad-core processor so that you can switch seamlessly between your apps. This model features 128 GB of internal memory for easy access to all of your media',
    in_stock: 5,
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4ZHc7_Ygn825WzLWFJP-dRX-wE4h_bRIBMQ&usqp=CAU'
  },
  {
    id: 5,
    name: 'iphone xs max',
    brand_new: true,
    desc: "iphone xs max white, 32gb, brand new",
    price: '530',
    detail: 'Efficiently manage your busy lifestyle with this iPhone 7 in black. Great for enhancing your user experience, this smartphone is equipped with a quad-core processor so that you can switch seamlessly between your apps. This model features 128 GB of internal memory for easy access to all of your media.',
    in_stock: 2,
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS18FBSGOsOrcUWgDHCOAVZRfwHuTg2sQO1nIGK3nopcuKEKybAOOPmxBUAeKM&usqp=CAc'
  },
  {
    id: 6,
    name: 'iphone 11',
    brand_new: true,
    desc: "iphone 11 white, 128gb, brand new, with box",
    price: '249.99',
    detail: 'Efficiently manage your busy lifestyle with this iPhone 7 in black. Great for enhancing your user experience, this smartphone is equipped with a quad-core processor so that you can switch seamlessly between your apps. This model features 128 GB of internal memory for easy access to all of your media.',
    in_stock: 5,
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7uQizWajBArylZcm0H1m1A4FWLX-ViGkVU3gsoO0b7c7uFLTZQQ&usqp=CAc'
  },
  {
    id: 7,
    name: 'iphone 11 pro',
    brand_new: false,
    desc: "iphone 11 pro white, 16gb, used , some scratches on screen",
    price: '300.99',
    detail: 'Efficiently manage your busy lifestyle with this iPhone 7 in black. Great for enhancing your user experience, this smartphone is equipped with a quad-core processor so that you can switch seamlessly between your apps. This model features 128 GB of internal memory for easy access to all of your media.',
    in_stock: 5,
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQN-Qu9TMtIfDS-iW9oSakWRpiBNpQf18hsF78-c2zgJ7kLGqnoCJ4zSDadHprwi81Os5rle1Ic&usqp=CAc'
  },
  {
    id: 8,
    name: 'iphone 6',
    brand_new: true,
    desc: "iphone 6 white, 32gb, brand new",
    price: '199.99',
    detail: 'Efficiently manage your busy lifestyle with this iPhone 7 in black. Great for enhancing your user experience, this smartphone is equipped with a quad-core processor so that you can switch seamlessly between your apps. This model features 128 GB of internal memory for easy access to all of your media',
    in_stock: 2,
    img_url: 'https://www.vippng.com/png/detail/527-5279975_xs-max-gb-apple-iphone-xs-max.png'
  },
  {
    id: 9,
    name: 'iphone 5',
    brand_new: true,
    desc: "iphone 5 white, 128gb, brand new, with box",
    price: '249.99',
    detail: 'Efficiently manage your busy lifestyle with this iPhone 7 in black. Great for enhancing your user experience, this smartphone is equipped with a quad-core processor so that you can switch seamlessly between your apps. This model features 128 GB of internal memory for easy access to all of your media',
    in_stock: 5,
    img_url: 'https://img.pngio.com/iphone-5s-png-98-images-in-collection-page-1-iphone-5-png-804_1012.png'
  },
  {
    id: 10,
    name: 'iphone 6',
    brand_new: false,
    desc: "iphone 5 white, 16gb, used , some scratches on screen",
    price: '149.99',
    detail: 'Efficiently manage your busy lifestyle with this iPhone 7 in black. Great for enhancing your user experience, this smartphone is equipped with a quad-core processor so that you can switch seamlessly between your apps. This model features 128 GB of internal memory for easy access to all of your media',
    in_stock: 8,
    img_url: 'https://sa.pricenacdn.com/img?d=ax300&src=https%3A%2F%2Fcf2.s3.souqcdn.com%2Fitem%2F2015%2F05%2F07%2F82%2F55%2F63%2F2%2Fitem_XL_8255632_7812799.jpg'
  },
  {
    id: 11,
    name: 'iphone 7',
    brand_new: true,
    desc: "iphone 7 white, 32gb, brand new",
    price: '280',
    detail: 'Efficiently manage your busy lifestyle with this iPhone 7 in black. Great for enhancing your user experience, this smartphone is equipped with a quad-core processor so that you can switch seamlessly between your apps. This model features 128 GB of internal memory for easy access to all of your media',
    in_stock: 2,
    img_url: 'https://mydigitech.in/ecommerce/img/Frontend/iphone7plus.jpg'
  },
  {
    id: 12,
    name: 'iphone x',
    brand_new: true,
    desc: "iphone x white, 128gb, brand new, with box",
    price: '310',
    detail: 'Efficiently manage your busy lifestyle with this iPhone 7 in black. Great for enhancing your user experience, this smartphone is equipped with a quad-core processor so that you can switch seamlessly between your apps. This model features 128 GB of internal memory for easy access to all of your media',
    in_stock: 5,
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ-Qzvl-InC6QUOZ1XgyLZa8MOvUKyxDQiiQB-Sw46BQGb5H2BpKxWXVtxqtY6QRpNqQRvPHh3&usqp=CAc'
  },
  {
    id: 13,
    name: 'iphone xr',
    brand_new: false,
    desc: "iphone xr white, 16gb, used , some scratches on screen",
    price: '280',
    detail: 'Efficiently manage your busy lifestyle with this iPhone 7 in black. Great for enhancing your user experience, this smartphone is equipped with a quad-core processor so that you can switch seamlessly between your apps. This model features 128 GB of internal memory for easy access to all of your media',
    in_stock: 5,
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4ZHc7_Ygn825WzLWFJP-dRX-wE4h_bRIBMQ&usqp=CAU'
  },
  {
    id: 14,
    name: 'iphone xs max',
    brand_new: true,
    desc: "iphone xs max white, 32gb, brand new",
    price: '780',
    detail: 'Efficiently manage your busy lifestyle with this iPhone 7 in black. Great for enhancing your user experience, this smartphone is equipped with a quad-core processor so that you can switch seamlessly between your apps. This model features 128 GB of internal memory for easy access to all of your media.',
    in_stock: 2,
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS18FBSGOsOrcUWgDHCOAVZRfwHuTg2sQO1nIGK3nopcuKEKybAOOPmxBUAeKM&usqp=CAc'
  },
  {
    id: 15,
    name: 'iphone 11',
    brand_new: true,
    desc: "iphone 11 white, 128gb, brand new, with box",
    price: '900',
    detail: 'Efficiently manage your busy lifestyle with this iPhone 7 in black. Great for enhancing your user experience, this smartphone is equipped with a quad-core processor so that you can switch seamlessly between your apps. This model features 128 GB of internal memory for easy access to all of your media.',
    in_stock: 5,
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7uQizWajBArylZcm0H1m1A4FWLX-ViGkVU3gsoO0b7c7uFLTZQQ&usqp=CAc'
  },
  {
    id: 16,
    name: 'iphone 11 pro',
    brand_new: false,
    desc: "iphone 11 pro white, 16gb, used , some scratches on screen",
    price: '650',
    detail: 'Efficiently manage your busy lifestyle with this iPhone 7 in black. Great for enhancing your user experience, this smartphone is equipped with a quad-core processor so that you can switch seamlessly between your apps. This model features 128 GB of internal memory for easy access to all of your media.',
    in_stock: 5,
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQN-Qu9TMtIfDS-iW9oSakWRpiBNpQf18hsF78-c2zgJ7kLGqnoCJ4zSDadHprwi81Os5rle1Ic&usqp=CAc'
  },
  {
    id: 17,
    name: 'iphone 6',
    brand_new: true,
    desc: "iphone 6 white, 32gb, brand new",
    price: '180',
    detail: 'Efficiently manage your busy lifestyle with this iPhone 7 in black. Great for enhancing your user experience, this smartphone is equipped with a quad-core processor so that you can switch seamlessly between your apps. This model features 128 GB of internal memory for easy access to all of your media',
    in_stock: 2,
    img_url: 'https://www.vippng.com/png/detail/527-5279975_xs-max-gb-apple-iphone-xs-max.png'
  }
]

var nav = document.createElement('nav');
document.body.appendChild(nav);

var logo = document.createElement('img');
logo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQrTPZDPx8jzZQCnHOnfpj197C9DshAswdTQ&usqp=CAU";
logo.className = 'logo';
logo.addEventListener('click', function reload() {
  location.reload()
})
nav.appendChild(logo);

var cartIcon = document.createElement('img');
cartIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdRNWTvlqmTLWT3VTYeEQhmmpJ-jfD9dkgVQ&usqp=CAU";
cartIcon.className = 'cartIcon';
nav.appendChild(cartIcon)
cartIcon.addEventListener("click", cart_items)

function cart_items() {
  if (!localStorage.getItem('togle')) {
    localStorage.setItem('togle','togle')
    var cart_icon = document.createElement('div');
    cart_icon.className = 'modal';
    document.body.appendChild(cart_icon);

    var cart_det = document.createElement('div');
    cart_det.className = 'detail cart-detail';
    cart_icon.appendChild(cart_det)

    var counter = document.createElement('div');
    counter.className = 'counter';
    cart_icon.appendChild(counter)

    var clearCard = document.createElement('button');
    clearCard.className = 'clearCard';
    clearCard.style.margin = '20px';
    clearCard.innerHTML = 'Clear Card';
    counter.appendChild(clearCard)
    clearCard.addEventListener('click', clear_card)

    var subTotal = document.createElement('p');
    var subCount = 0
    var tot = 0
    subTotal.style.margin = '10px';
    for (var i = 0; i < state.length; i++) {
      if (localStorage.getItem('amount'+i)) {
        subCount = subCount += state[i].price * localStorage.getItem('amount'+i)
      }}
    subTotal.innerHTML = 'Sub: ' + ' ' + ' $'+subCount.toFixed(2)
    counter.appendChild(subTotal);
    var tax = document.createElement('p');
    var taX = subCount * 0.08
    tax.style.margin = '10px';
    tax.innerHTML = 'Tax: ' + ' ' + ' $'+taX.toFixed(2);
    counter.appendChild(tax)

    var total = document.createElement('p');
    total.style.margin = '10px';
    total.innerHTML = 'total: ' + (subCount + taX).toFixed(2)
    counter.appendChild(total)
    var order = document.createElement('button');
    order.style.margin = '20px';
    order.innerHTML = 'Order';
    counter.appendChild(order);

    var cart_row = document.createElement('div');
    cart_row.className = 'row cart-row';
    cart_det.appendChild(cart_row);

    for (var x = 0; x < state.length; x++) {
      if (localStorage.getItem("id"+x)) {
        var id = localStorage.getItem("id"+ x)

        var cart_col = document.createElement('div');
        cart_col.className = 'col';
        cart_row.appendChild(cart_col);

        var content_wrapper = document.createElement('div');
        content_wrapper.className = 'content-wrapper';
        cart_col.appendChild(content_wrapper);

        var card = document.createElement('div');
        card.className = 'cart-card';
        content_wrapper.appendChild(card);

        var img = document.createElement('img');
        img.src = state[id].img_url;
        img.className = 'cart-img';
        card.appendChild(img);

        var name = document.createElement('h3');
        name.textContent = state[id].name;
        name.style.margin = "6px";
        content_wrapper.appendChild(name);

        var price = document.createElement('p');
        price.textContent = "$"+state[x].price
        price.style.margin = "6px";
        price.className = 'cart-price'
        content_wrapper.appendChild(price);

        var adder = document.createElement('div');
        adder.className = 'adder';
        content_wrapper.appendChild(adder);

        var decrement = document.createElement('div');
        decrement.textContent = '-';
        decrement.className = 'decrement';

        decrement.setAttribute('decrId', state[x].id)
        decrement.addEventListener('click', decrId);
        adder.appendChild(decrement)

        var amount = document.createElement('div');
        amount.textContent = localStorage.getItem('amount'+state[x].id);
        amount.className = 'amount' + ' cart' + state[x].id;
        adder.appendChild(amount)

        var increment = document.createElement('div');
        increment.textContent = '+';
        increment.className = 'increment';

        increment.setAttribute('incId', state[x].id)
        increment.addEventListener('click', incId);
        adder.appendChild(increment)
      }
    }
  } else {
    localStorage.removeItem('togle')
    return location.reload()
  }
}

var row = document.createElement('div');
row.className = 'row';
document.body.appendChild(row);

if (state.length < 1) {
  var noItem = document.createElement('div');
  noItem.className = 'noItem';
  document.body.appendChild(noItem);
} else {
  for (var x = 0; x < state.length; x++) {
    var col = document.createElement('div');
    col.className = 'col';
    this.row.appendChild(col);

    var content_wrapper = document.createElement('div');
    content_wrapper.className = 'content-wrapper';
    this.col.appendChild(content_wrapper);

    var card = document.createElement('div');
    card.className = 'card';
    this.content_wrapper.appendChild(card);

    var img = document.createElement('img');
    img.src = state[x].img_url;
    this.card.appendChild(img);


    var title = document.createElement('h2');
    title.textContent = state[x].name;
    this.content_wrapper.appendChild(title);

    var price = document.createElement('p');
    price.textContent = state[x].price;
    this.content_wrapper.appendChild(price);

    var desc_wrapper = document.createElement('div');
    desc_wrapper.className = 'desc-wrapper';
    this.content_wrapper.appendChild(desc_wrapper);

    var desc = document.createElement('p');
    desc.textContent = state[x].desc;
    this.desc_wrapper.appendChild(desc);

    var button = document.createElement('button');
    var p = document.createElement('p');
    p.textContent = 'Check Out';
    button.setAttribute('id', state[x].id)
    button.appendChild(p)
    this.content_wrapper.appendChild(button);
    button.addEventListener('click', product);

    var addCart = document.createElement('button');
    addCart.className = 'add-cart adding'+state[x].id
    addCart.setAttribute('cart-id', state[x].id)
    if (localStorage.getItem("id"+state[x].id)) {
      this.addCart.textContent = 'Added';
      this.content_wrapper.appendChild(addCart)
    } else {
      this.addCart.textContent = 'Add Cart';
      this.content_wrapper.appendChild(addCart)
      this.addCart.addEventListener('click', add_to_cart)
    }
  }
}

function clear_card() {
  for (var x = 0; x < state.length; x++) {
    if (localStorage.getItem('amount'+x)) {
      localStorage.removeItem('amount'+x)
      localStorage.removeItem('id'+x)
    }
  }
}

function incId() {
  var id = this.getAttribute('incId')
  if (!localStorage.getItem('amount'+id)) {
    var one = 1
    localStorage.getItem('id'+id)
    localStorage.setItem('amount'+id, one)
    document.getElementsByClassName('cart'+id)[0].innerHTML = localStorage.getItem('amount'+id)
  } else {
    var found = localStorage.getItem('amount'+id)
    ++found
    localStorage.setItem('amount'+id, found)
    document.getElementsByClassName('cart'+id)[0].innerHTML = localStorage.getItem('amount'+id)
  }
}
function decrId() {
  var id = this.getAttribute('decrId')
  if (localStorage.getItem('amount'+id) == 1) {
    localStorage.removeItem('amount'+id)
    localStorage.removeItem('id'+id)
    document.getElementsByClassName('cart'+id)[0].innerHTML = localStorage.getItem('amount'+id)
  } else {

    var found = localStorage.getItem('amount'+id)
    if (!localStorage.getItem('amount'+id)) {
      return
    } else {
      --found
      localStorage.setItem('amount'+id, found)
      document.getElementsByClassName('cart'+id)[0].innerHTML = localStorage.getItem('amount'+id)
    }
  }
}

function add_to_cart() {
  var id = this.getAttribute('cart-id')
  localStorage.setItem("id"+id, id)
  var one = 1
  localStorage.setItem("amount"+id,one)
  document.getElementsByClassName('adding'+id)[0].innerHTML = 'added'
  document.getElementsByClassName('adding'+id)[0].style.background = 'red'

}
function productAdd() {
  var id = this.getAttribute('productId')
  if (localStorage.getItem('amount'+id)) {
    return
  } else {
    localStorage.setItem("id"+id, id)
    var one = 1
    localStorage.setItem("amount"+id,one)
  }
}

function product() {
  var data = state[this.getAttribute('id')];

  var modal = document.createElement('div');
  modal.className = 'modal';
  document.body.appendChild(modal);

  var detail = document.createElement('div');
  detail.className = 'detail';
  modal.appendChild(detail)

  var img = document.createElement('img');
  img.src = data.img_url;
  img.className = "modal-img"
  detail.appendChild(img);

  var name = document.createElement('h1');
  name.textContent = data.name;
  detail.appendChild(name);

  var det = document.createElement('p');
  det.textContent = "$ " + data.price + " " + data.desc + data.detail;
  detail.appendChild(det);

  var addCart = document.createElement('button');
  addCart.textContent = 'Add Cart';
  addCart.setAttribute('productId', data.id)
  addCart.addEventListener('click', productAdd);
  detail.appendChild(addCart)

  var go_to_cart = document.createElement('button');
  go_to_cart.textContent = 'Go To Cart';
  go_to_cart.addEventListener("click", cart_items)
  detail.appendChild(go_to_cart)

  var button = document.createElement('button');
  button.textContent = 'go back';
  button.addEventListener('click', function reload() {
    location.reload()
  })
  detail.appendChild(button)
}
