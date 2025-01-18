const mobile_modal = document.querySelector('.modal_mobile');
const mobile_menu_btn = document.querySelector('#mobile_menu');
const links = document.querySelectorAll('.link-item');
const order_btn = document.querySelectorAll('.order-btn');
const modal_notif = document.querySelector('.modal_notif');
const modal_pay = document.querySelector('.modal_payment');
const controlsOrder = document.querySelector('.controls_order');
console.log(order_btn)

const state = {
    isActive:false
}


const openMenu = () => {
    mobile_modal.style.display = 'flex'
    state.isActive = true;
}


const showNotif = () => {
 modal_notif.style.display = 'flex';
 let timeout = setTimeout(() => {
    modal_notif.style.display = 'none';
    clearTimeout(timeout);
},5000)
}

links.forEach(link => {
    link.addEventListener('click',() => {
        if(state.isActive){
            mobile_modal.style.display = 'none'
            state.isActive = false;
        }
    }
    )
})


function openPaymentModal() {
    modal_pay.style.display = 'flex';
}
function closePaymentModal() {
    modal_pay.style.display = 'none';
    showNotif();
    
}


order_btn.forEach(btn => {
    btn.addEventListener('click',openPaymentModal);   
})


mobile_menu_btn.addEventListener('click',openMenu);
controlsOrder.addEventListener('click',closePaymentModal);