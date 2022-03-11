const createNav = () => {
    let nav = document.querySelector('.navbar')

    nav.innerHTML = `
        <div class="nav">
                <img src="img/dark-logo.png" alt="" class="brand-logo">
                <div class="nav-items">
                    <div class="search">
                        <input type="text" class="search-box" placeholder="search brand, product...">
                        <button class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <a>
                        <img src="img/user.png" id="user-img" alt="">
                        <div class="login-logout-popup hide">
                            <span class="account-info">Log in as, name</span>
                            <button class="btn" id="user-btn">Log out</button>
                        </div>
                    <a>
                    <a href="#"><img src="img/cart.png" alt=""></a>
                </div>
            </div>
            <ul class="links-container">
                <li class="link-item"><a href="#" class="link">women</a></li>
                <li class="link-item"><a href="#" class="link">men</a></li>
                <li class="link-item"><a href="#" class="link">kids</a></li>
                <li class="link-item"><a href="#" class="link">accesories</a></li>
            </ul>
        `;

}

createNav();


//nav popup
const userImageBtton = document.querySelector('#user-img');
const userPopUp = document.querySelector('.login-logout-popup');
const popUpText = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');


userImageBtton.addEventListener('click', () => {
    userPopUp.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){ //user is logged in
        popUpText.innerHTML = `Hi, ${user.name}`;
        actionBtn.innerHTML = 'Log out';
        //clear session
        actionBtn.addEventListener('click', () =>{
            sessionStorage.clear();
            location.reload();
        })
    } else{
        popUpText.innerHTML = 'Log in to place order';
        actionBtn.innerHTML = 'Log in';
        actionBtn.addEventListener('click', () =>{
            location.href = '/login';
        })
    }
}

