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
                    <a href="#"><img src="img/user.png" alt=""></a>
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

createNav()