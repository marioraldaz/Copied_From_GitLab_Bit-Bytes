<script>
    
</script>

<div class="MyProfile">
    <div class="MyProfile__menu">
        <ul class="MyProfile__menu__list">
            <li class="MyProfile__menu__list-elem"><a href="#myinfo">My info</a></li>
            <li class="MyProfile__menu__list-elem"><a href="#savedproducts">Saved Products</a></li>
            <li class="MyProfile__menu__list-elem"><a href="#boughtproducts">Bought Products</a></li>
            <li class="MyProfile__menu__list-elem"><a href="#myaddresses">My Addresses</a></li>
            <li class="MyProfile__menu__list-elem"><a href="#savedconfigurations">Saved PC Configurations</a></li>
            <li class="MyProfile__menu__list-elem"><a href="#stats">Stats</a></li>
            <li class="MyProfile__menu__list-elem"><a href="#mycomments">My comments</a></li>
            <li class="MyProfile__menu__list-elem"><a href="#myreturns">My returns</a></li>
        </ul>        
    </div>

    <div class="MyProfile__top">
        <img src="/src/lib/header/profile/i5.png" alt="MyProfile" class="MyProfile__top__image" />
        <h1 class="MyProfile__top__name">Nombre</h1>
        <h2 class="MyProfile__top__email">Email</h2>
    </div>

    <div class="MyProfile__changePassword">
        <a href="/profile/changePassword" class="MyProfile__changePassword__text">
            Cambiar contraseña
        </a>
    </div>
    <div class="MyProfile__savedProducts"></div>
    <div class="MyProfile__Address"></div>
    <div class="MyProfile__boughtProducts"></div>
    <div class="MyProfile__PC_Configs"></div>
    <div class="MyProfile__stats"></div>
    <div class="MyProfile__comments"></div>
    <div class="MyProfile__returns"></div>
</div>


<style lang="scss">
    .MyProfile{
        background-color: white;
        width:80%;
        min-height: 100vh;
        align-self: center;
        border-radius: 2rem;
        margin-top:10rem;
        &__menu{
            width: 25rem;
            display: block;
            position: fixed;
            top: 20%;
            right: 12%;
            border-radius: 3rem;
            background-color:rgb(255, 255, 255);
            border: 0.2rem black;
            padding: 1rem;
            align-items: center; 
            padding:2rem;
            z-index: 0;  
            &ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                overflow: hidden;
                background-color: #333;
            }
            li a {
                display: block;
                color: white;
                text-align: center;
                text-decoration: none;
                font-size: 1.5rem;
                height: 3.5rem;
                width:100%;
                color:black;
            }

            li a:hover {
                background-color:  rgb(94, 176, 208);
            }
        }

        &__top{
            display: flex;
            flex-direction: row;
            &__image{
                display:flex;
                width:15em;
                height:15rem;
            }
            &__name{
                margin-left:4rem;
                display:flex;
                width:25rem;
                height: 5rem;
                font-size:3rem;
            }
            &__email{
                display:flex;
                width:5rem;
                height: 5rem;
                font-size: 2rem;
            }
        }
        &__changePassword{
            margin: 5rem;
            padding: 1rem;
            width:26rem;
            &:hover{
                border-radius: 2rem;
                transform: scale(110%);
                background-color:  rgb(94, 176, 208);
            }
            &__text{
                font-size: 2rem;
                color:black;
                text-decoration: none;
            }
        }
        &__Address{
            width: 80%;
        }

        &__PC_Configs{

        }
        &__savedroducts{

        }
        &__boughtproducts{

        }
        &__stats{

        }

        &__comments{

        }
        &__returns{
            
        }

    }
</style>