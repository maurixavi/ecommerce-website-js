const createFooter = () => {
    let nav = document.querySelector('.footer')

    nav.innerHTML = `
        <div class="footer-content">
            <img src="img/light-logo.png" alt="" class="logo">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">women</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">pants</a></li>
                    <li><a href="#" class="footer-link">jewelry</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">pants</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">about us</p>
        <p class="info">Cras id quam ac libero elementum vestibulum. In sodales viverra est, non iaculis neque placerat ac. Nunc faucibus tortor mauris, vel vulputate diam pellentesque quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent commodo nibh posuere, interdum ante et, posuere dolor. Integer elementum ipsum mauris, condimentum bibendum urna bibendum id. Aliquam et ipsum venenatis justo sagittis luctus. Cras ultricies ex in quam ultricies ultricies. Etiam nisl enim, consequat quis accumsan vel, dignissim eget turpis.</p>

        <p class="footer-credit">Copyright © 2022 CLOTHING STORE. All rights reserved.</p>
    `;

}

createFooter()