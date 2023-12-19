<script>
</script>

<ul>
    <li>
        <a href="#">
            <i class="fa-brands fa-facebook-f"></i>
            <span>-Facebook</span>
        </a>
    </li>
    <li>
        <a href="#">
            <i class="fa-brands fa-x-twitter"></i>
            <span>-Twitter</span>
        </a>
    </li>
    <li>
        <a href="#">
            <i class="fa-brands fa-tiktok"></i>
            <span>-Tik Tok</span>
        </a>
    </li>
    <li>
        <a href="#">
            <i class="fa-brands fa-instagram"></i>
            <span>-Instagram</span>
        </a>
    </li>
</ul>

<style>
    @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400");
    @import url("https://use.fontawesome.com/releases/v6.4.2/css/all.css");
    ul {
        font-family: "Roboto Condensed", sans-serif;
        display: flex;
        justify-content: space-around;
        
        flex-wrap: wrap;
    }
    li {
        list-style: none;
        margin: 5rem 5px;
        transform: rotate(-30deg) skew(25deg);
        
    }

    .fa-brands {
        color: #262626;
        font-size: 2rem;
        line-height: 60px;
        transition: 0.5s;
        padding-right: 14px;
    }

    a {
        border:1px solid #b1b1b1;
        width: 180px;
        height: 60px;
        background-color: white;
        text-decoration: none;
        display: block;
        text-align: left;
        padding-left: 20px;
        transform: translate(0, 0);
    }

    a span {
        color: #262626;
        padding: 0;
        margin: 0;
        position: absolute;
        top: 20px;
        letter-spacing: 4px;
        font-size: 1rem;
        transition: 0.5s;
    }

    a::before {
        content: "";
        position: absolute;
        height: 100%;
        width: 20px;
        background: #b1b1b1;
        top: 10px;
        left: -20px;
        transform: skewY(-45deg);
    }

    a::after {
        content: "";
        position: absolute;
        height: 20px;
        width: 100%;
        background: #b1b1b1;
        bottom: -20px;
        left: -10px;
        transform: skewX(-45deg);
    }

    a:hover {
        transform:translate(10px, -15px);
        box-shadow: -50px 50px 50px #00000080;
    }

    li:hover .fa-brands,
    li:hover span {
        color: #fff;
    }

    li:hover:nth-child(1){
    & a{
        background: #3b5998;

        &::before{
        background: #365492;
        }
        
        &::after{
        background: #365492;
        }
    }
    }

    li:hover:nth-child(2){
    & a{
        background: #00aced;

        &::before{
        background: #097aa5;
        }
        
        &::after{
        background: #53b9e0;
        }
    }
    }

    li:hover:nth-child(3){
    & a{
        background: #dd4b39;

        &::before{
        background: #b33a2b;
        }
        
        &::after{
        background: #b33a2b;
        }
    }
    }

    li:hover:nth-child(4){
    & a{
        background: #e4405f;

        &::before{
        background: #d81c3f;
        }
        
        &::after{
        background: #e46880;
        }
    }
    }
</style>