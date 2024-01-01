let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};
 
 document.querySelector('#login-btn').onclick = () =>{
   document.querySelector('.login-form-container').classList.toggle('active');
 }
 
 document.querySelector('#close-login-form').onclick = () =>{
   document.querySelector('.login-form-container').classList.remove('active');
 }

var swiper = new Swiper(".food-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});

const btn_cart = document.querySelectorAll("div .btn-add")
//console.log(btn_cart)
btn_cart.forEach(function(btn,index){
   btn.addEventListener("click",function(event){
      var btnItem = event.target
      var product = btnItem.parentElement
      var productName = product.querySelector("h3").innerText
      var productPrice = product.querySelector("div .price span").innerText
      //console.log(productName,productPrice)
      addcart(productName,productPrice)
   })
})
function addcart(productName,productPrice){
   var addtr = document.createElement("tr")
   var cartItem = document.querySelectorAll("tbody tr")
   for (var i = 0;i < cartItem.length;i++){
      var productA = document.querySelectorAll(".titleN")
      if(productA[i].innerHTML == productName){
         alert("Món ăn đã có trong giỏ hàng! Vui lòng vào giỏ hàng để thêm số lượng!")
         return
      }
   }

   var trcontent = '<td><p><span class="titleN">'+productName+'</span></p></td><td><p><span class="prices">'+productPrice+'</span><sup>K</sup></p></td> <td><input style="width: 30px; outline: none" type="number" value="1" min="1"></td><td><span class="del">Xóa</span></td>'
   addtr.innerHTML = trcontent
   var cartTable = document.querySelector("tbody")
   //console.log(cartTable)
   cartTable.append(addtr)
   carttotal()
   delcart()


}

function carttotal(){
   var cartItem = document.querySelectorAll("tbody tr")
   //console.log(cartItem.length)
   var totalT = 0
   for (var i = 0;i < cartItem.length;i++){
      //console.log(i)
      var inputValue = cartItem[i].querySelector("input").value
      //console.log(inputValue)
      var productPrice = cartItem[i].querySelector(".prices").innerHTML
      //console.log(productPrice)
      totalA = inputValue*productPrice
      totalB = totalA.toLocaleString('de-DE')
      //console.log(totalA)
      totalT = totalT + totalA
      //console.log(totalT)
   }
   var carttotalA = document.querySelector(".price-total span")
   var cartPrice = document.querySelector(".final")
   carttotalA.innerHTML = totalT
   cartPrice.innerHTML = totalT
   inputchange()
   //console.log(carttotalA)

}

function delcart(){
   var cartItem = document.querySelectorAll("tbody tr")
   for (var i = 0;i < cartItem.length;i++){
      var productA = document.querySelectorAll(".del")
      productA[i].addEventListener("click",function(event){
         var cartdel = event.target
         var cartItems = cartdel.parentElement.parentElement
         cartItems.remove()
         carttotal()
         //console.log(cartItems)
      })
   }
}
function inputchange(){
   var cartItem = document.querySelectorAll("tbody tr")
   for (var i = 0;i < cartItem.length;i++){
      var inputValue = cartItem[i].querySelector("input")
      inputValue.addEventListener("change",function(){
         carttotal()
      })
   }
}

const cartbtn = document.querySelector("#close-cart")
const cartshow = document.querySelector(".fa-shopping-cart")
cartshow.addEventListener("click",function(){
   document.querySelector(".cart").style.display = 'flex'
})
cartbtn.addEventListener("click",function(){
   document.querySelector(".cart").style.display = 'none'
})


const M = document.querySelector(".morning")
const A = document.querySelector(".afternoon")
const E = document.querySelector(".evening")

TimeOrder()

function TimeOrder(){
   var D = new Date();
   var Time = D.getHours()
   console.log(Time)
   if( Time >=5 && Time <=9){
      M.style.display = "block"
   }
   else if(Time >=10 && Time <=14){
      A.style.display = "block"
   }
   else if(Time >= 15 && Time < 21)
   {
      E.style.display = "block"
   }
}
