
let navbar=()=>{
    return `   <!-- navbar -->
    <div class="container-fluid" id="nav_row1">
        <div class="container" >
            <div class="row align-items-center justify-content-center">
                <div class="col-3" >
                    <!-- <div class="container"> -->
                        <div class="row align-items-center">
                            <div class="col-5">
                                <i class="fa-solid fa-bars" id="menubar"></i>
                                <img id="logo" src="https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2425ae4b0d70964ee66e0/1505806763887/12NNNOWLOGODESKTOP.png" >
                            </div>
                            <div class="col-1"><span class="v-bar">|</span></div>
                            <div class="col-6"> 
                                <i class="fa-solid fa-location-dot"></i>
                                <span class="text-pointer">Store Locator</span>
                            </div>
                        </div>
                    <!-- </div> -->
                </div>

                <div class="col-5">
                  <!-- <div class="container"> -->
                    <div class="row d-flex justify-content-center">
                      <div class="col-2 d-flex justify-content-end">
                         <i class="fa-solid fa-star" id="purpal-star"></i>
                         <i class="fa-solid fa-star" id="yellow-star"></i>
                         <i class="fa-solid fa-star" id="pink-star"></i>
                     </div>
                      <div class="col-6 text-pointer">Check Out Our Newest Arrivals</div>
                      <div class="col-2 d-flex justify-content-start">
                            <i class="fa-solid fa-star" id="pink-star"></i> 
                            <i class="fa-solid fa-star" id="yellow-star"></i>
                            <i class="fa-solid fa-star" id="purpal-star"></i>
                     </div>
                
                    </div>
                  <!-- </div> -->
                </div>

                <div class="col-4">
                    <!-- <div class="container"> -->
                        <div class="row ">
                            <div class="col-3">
                                <i class="fa-solid fa-mobile-screen-button"></i>
                                <span class="text-pointer">Get APP</span>
                            </div>
                            <div class="col-1"> <span >|</span></div>
                            <div class="col-4">
                                <!-- <span class="v-bar">|</span> -->
                                <i class="fa-brands fa-codepen"></i>
                                <span class="text-pointer">Track Order</span>
                            </div>
                            <div class="col-1"> <span >|</span></div>
                            <div class="col-3">
                                <!-- <span class="v-bar">|</span> -->
                                <i class="fa-solid fa-martini-glass"></i>
                                <span class="text-pointer">Loyalty</span>
                            </div>
                        </div>
                    <!-- </div> -->
                </div>


            </div>
        </div>
    </div>

    <!-- Sephora logo  -->
   <div class="container-fluid">
    <!-- <div class="row justify-content-center"> -->
        <div class="container" id="nav_row2">
            <div class="row align-items-center d-flex justify-content-between">
                <div class="col-3 align-items-center justify-content-start" ><i class="fa-solid fa-magnifying-glass" ></i><input id="searchbar" class="border-bottom"placeholder="Search SEPHORA" type="text"></div>
                
                <div class="col-5 d-flex justify-content-center"><a href="../index.html"><img id="sephora-logo" src="https://cdn07.nnnow.com/web-images/master/navtree_metaData/59b2657be4b0e6b6e16a9180/1548053082431/se.png" alt="SEPHORA Logo"></a> </div>

                <div class="col-3 align-items-center d-flex justify-content-around">
                   <div> 
                   <a href="../cart/favourite.html"><i class="fa-regular fa-heart"></i></a>
                   </div>
                    <div>  <span class="v-bar">|</span>
                    <a href="../cart/cart.html"><i class="fa-solid fa-cart-arrow-down"></i></a>
                        </div>
                   <div><span class="v-bar">|</span> <i  onclick="openForm()" class="fa-regular fa-user"></i>
                    <span onclick="openForm()"  id="login">Login</span></div>
                </div>
            </div>
        </div>
    <!-- </div> -->
   </div>


  <!-- product pages  -->
   <div class="container">
        <div class=" row d-flex justify-content-center nav nav-tabs ">
            <!-- <div class="row d-flex justify-content-center"> -->
                <div class=" col-1 nav-item justify-content-center "><a class="nav-link text-center " href="#" >SALE</a></div>

                <div class=" col-1 nav-item justify-content-center " onmouseenter="makeup_d()" onmouseleave="makeup_dl()" id="makeup"><a class="nav-link text-center " href="../categoryProduct/nav_makeup.html" >MAKEUP</a></div>
               
                <div class=" col-2 nav-item justify-content-center " onmouseenter="skincare_d()" onmouseleave="skincare_dl()" id="skincare"><a class="nav-link text-center " href="../categoryProduct/nav_skincare.html" >SKINCARE</a></div>

                <div class=" col-2 nav-item justify-content-center " onmouseenter="fragrance_d()" onmouseleave="fragrance_dl()"  id="fragrance"><a class="nav-link text-center " href="../categoryProduct/nav_fragrance.html" >FRAGRANCE</a></div>

                <div class=" col-2 nav-item justify-content-center " onmouseenter="haircare_d()" onmouseleave="haircare_dl()" id="haircare"><a class="nav-link text-center " href="../categoryProduct/nav_haircare.html" >HAIRCARE</a></div>
                
                <div class=" col-2 nav-item justify-content-center " onmouseenter="brushes_d()" onmouseleave="brushes_dl()"  id="brushes"><a class="nav-link text-center " href="../categoryProduct/nav_tools&brushes.html" >TOOLS & BRUSHES</a></div>
               
                <div class=" col-2 nav-item " id="brands"><a class="nav-link text-center " href="#" >BRANDS</a></div>
            <!-- </div> -->
        </div>
   </div>
   <div class="container-fluid justify-content-center" id="makeup_dropdown">
    <div class="row">
        <ul class="col-1 offset-3">
            <h6>FACE</h6>
            <p> Foundation</p>
            <p> BB & CC Cream</p>
            <p> Concealer</p>
            <p> Face Primer</p>
            <p> Highlighter</p>
            <p> Face Brushes</p>
            <p> Makeup Palette</p>
        </ul>
        <ul class="col-1">
            <h6>EYE</h6>
            <p> Eye Palettes</p>
            <p> Mascara</p>
            <p> Eyeliner</p>
            <p> Eyebrow</p>
            <p> Eyeshadow</p>
            <p> Eye Primer</p>
            <p> Eye Brushes</p>
            <p> Contact Lenses</p>
        </ul>
        <ul class="col-1">
            <h6>LIP</h6>
            <p> Lipstick</p>
            <p> Lip Stain</p>
            <p> Lip Gloss</p>
            <p> Lip Liner</p>
            <p> Lip Balm & Treatment</p>
            <p> Lip Brushes</p>
        </ul>
        <ul class="col-1">
            <h6>CHEEK</h6>
            <p> Blush</p>
            <p> Bronzer</p>
            <p> Highlighter</p>
            <p> Face Oils</p>
        </ul>
        <ul class="col-2">
            <h6>NAIL MAKEUP</h6>
            <p> Nail Polish</p>
            <p> Nail Care</p>
            <p> Manicure & Pedicure Tools</p>
        </ul>
    </div>

   

 </div>

 <div class="container-fluid justify-content-center" id="skincare_dropdown">
    <div class="row justify-content-center">
        <ul class="col-2 offset-1">
            <h6>MOISTURIZERS</h6>
            <p>Moisturizers</p>
            <p>Night Creams</p>
            <p>Mists & Essences</p>
            <p>BB & CC Creams</p>
        </ul>
        <ul class="col-2">
            <h6>CLEANSERS</h6>
            <p>Face Wash & Cleansers</p>
            <p>Makeup Removers</p>
            <p>Face Wipes</p>
            <p>Toners</p>
            <p>Hand Sanitizers</p>
        </ul>
        <ul class="col-2">
            <h6>TREATMENTS & HIGH TECH TOOLS</h6>
            <p>Face Serums</p>
            <p>Cleansing Tools</p>
            <p>Eye Creams & Treatments</p>
        </ul>
        <ul class="col-2">
            <h6>MASKS</h6>
            <p>Face Masks</p>
            <p>Sheet Masks</p>
            <p>Eye Masks</p>
            <p>Nose Masks & Strips</p>
            <p>Lip Masks</p>
            <p>Hair Masks</p>
            <p>Hand Masks</p>
            <p>Foot Masks</p>
        </ul>
    </div>
</div>

<div class="container-fluid justify-container-center" id="fragrance_dropdown">
    <div class="row">
        <ul class="col-2 offset-4">
            <h6> WOMEN</h6>
            <p>Perfume</p>
            <p>Mists and Deodorants</p>
        </ul>
        <ul class="col-2">
            <h6>MEN</h6>
            <p>Perfume</p>
            <p>Body Sprays & Deodorant</p>
        </ul>
      
    </div>
</div>

<div class="container-fluid justify-container-center" id="haircare_dropdown">
    <div class="row">
        <ul class="col-2 offset-4">
            <h6>SHAMPOO & CONDITIONER</h6>
            <p>Shampoo</p>
            <p>Conditioner</p>
        </ul>
        <ul class="col-2">
            <h6>HAIR STYLING & TREATMENTS</h6>
            <p>Hair Spray & Styling Products</p>
            <p>Hair Oil</p>
            <p>Hair Masks</p>
            <p>Hair Clips</p>
        </ul>
    </div>
</div>

<div class="container-fluid justify-container-center" id="brushes_dropdown">
    <div class="row">
        <ul class="col-2 offset-3">
            <h6>  BRUSHES</h6>
            <p>Face Brushes</p>
            <p>Eye Brushes</p>
            <p>Lip Brushes</p>
        </ul>
        <ul class="col-2">
            <h6>TOOLS</h6>
            <p>Sponges & Applicators</p>
            <p>Face Tools</p>
            <p>Hair Clips</p>
            <p>Sharpeners</p>
            <p>Tweezers & Eyebrow Tools</p>
            <p>Eyelash Curlers</p>
            <p>Accessories</p>
            <p>Brush Cleaners</p>
        </ul>
        <ul class="col-2">
            <h6>VEGAN</h6>
            <p>Face Brushes</p>
            <p>Eye Brushes</p>
        </ul>
    </div>
</div>


<!-- login page  -->
    <div id="transparent-div">
        <div class="hidden " id="login-form">
            <i class="fa-solid fa-xmark" onclick="closeForm()" id="x"></i>
            <h2 id="login">LOGIN</h2>
            <label for="login_input">Email or Phone Number</label>
            <input class="fluid email"  type="text" id="login_input">
            <button class="fluid continue-btn" id="login-continue" onclick="login_submit()">CONTINUE</button>
            <h4>————Or————</h4>
            <div class="fluid loginWith-google">
                <img class="logoSVG" src="https://static.nnnow.com/google-social-login.svg" alt="">
                <p class="g-fb-text">Continue with Google</p></div>
            <div class="fluid loginWith-facebook">
            <img class="logoSVG" src="https://static.nnnow.com/facebook.png" alt="">
                <p class="g-fb-text">Continue with Facebook</p></div>
            <p id="login_terms">By proceeding,you agree to <a class="privacy-tag" href="">Privacy Policy</a>, <a class="privacy-tag" href="">Terms & Conditions</a></p>
        </div>
    </div>



    <!-- signup form  -->
    <div id="signup-form">
        <i class="fa-solid fa-chevron-left" id="backtolog" onclick="backtologin()"></i>
        <h1 id="heading">CREATE ACCOUNT</h1>
        <label for="name">Name</label>
        <div class="full-length" id="name">
            <select name="" id="gender">
                <option value="#">Select</option>
                <option value="MR">Mr</option>
                <option value="Ms">Ms</option>
            </select>
            <input type="text" id="user_name">
        </div>
        <label for="user_email">Email</label>
        <input class="full-length" required type="email" id="user_email">
        <label for="user_password">Password</label>
        <input class="full-length" required type="password" id="user_password">
        <label for="user_number">Phone Number</label>
        <input class="full-length" required type="number" id="user_number">
        <button onclick="func()"  class="full-length" id="submit">Continue</button>
    </div>
`
}


export {navbar};