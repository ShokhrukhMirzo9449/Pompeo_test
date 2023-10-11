import styled from "styled-components"
import img from './assets/image.png'
import PotteryCollBack from "./assets/collection.png"


export const DivBody=styled.div`
   
`

export const DivBack=styled.div`
    
    background-image: url(${img});
    width: 100%;
    height: 708px;
    flex-shrink: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const DivMain=styled.div`
    display: flex;
    height: 85px;
    font-family: Pacifico;
    justify-content: space-between;
    padding: 13px 135px;
    
`
export const DivLeft=styled.div`
    display: flex;
    flex: 2;
    

`
export const DivRight=styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding: 21px 0;
    font-family: poppins;
    align-items: center;

`
export const CartDiv=styled.div`
   
    border-left: 2px solid #f5f5f5;
    div{
        display: flex;
       
    }
    p{
        padding-left: 10px;
    }
    svg{
        padding-left: 25px;
    }
    
`

export const BackLeft=styled.div`
display: flex;
flex: 1;
flex-direction: column;
justify-content: flex-start;
padding-left: 144px;
align-items: self-start;
span{
        display: flex;
        color: #AC1313;
        font-family: Playfair Display;
        font-size: 68px;
        font-style: normal;
        font-weight: 400;
        line-height: 68px; /* 100% */
        h4{
            position: relative;
            top: -25px;
            left: 5px;
        }
    }
h2{
    color: #D77474;
   
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 171.429% */
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 12px;
}
h1{
    color: #000;
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 58px; /* 120.833% */
}
h3{
    color: #6C6C6C;
    font-family: Libre Franklin;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
    margin-top: 14px;
}
a{
    background: #AC1313;
    color: #FFF;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 183.333% */
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 19px 31px 21px 40px;
    text-decoration: none;
    margin-top: 51px;
}
h4{
    color: #AC1313;
font-family: Playfair Display;
font-size: 68px;
font-style: normal;
font-weight: 400;
line-height: 68px; /* 100% */
}
`
export const BackRight=styled.div`
display: flex;
flex: 1;
    img{
        width: 784px;
        height: 445px;
        flex-shrink: 0;
    }
`
export const ProdCat=styled.div`

`
export const ProdHead=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 40px;
align-items: center;
text-align: center;
margin: 120px 144px 0 144px;

h2{
    color: #D77474;
text-align: center;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 171.429% */
letter-spacing: 2px;
text-transform: uppercase;
}
span{
display: flex;
h1{
    color: #000;
text-align: center;
font-family: Poppins;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 50px; /* 125% */
}
h4{
    color: #AC1313;
text-align: center;
font-family: Playfair Display;
font-size: 68px;
font-style: normal;
font-weight: 400;
line-height: 68px; /* 100% */
padding: 5px;
position: relative;
top: -35px;

        
}
}

`
export const ProdImg=styled.div`
display: flex;
gap: 151px;
justify-content: center;
align-items: center;
padding: 0 75px;
margin-top: 60px;
margin-bottom:90px;
h5{
color: #DBDBDB;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 34px; /* 188.889% */
letter-spacing: 1px;
text-transform: uppercase;
transform: translate(0,100%) rotate(-90deg);
position: absolute;
left: 76px;

}

div{
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 38px; /* 271.429% */
    letter-spacing: 2px;
    text-transform: uppercase;
}

`
export const VasesCoup=styled.div`
    border-radius: 240px;
    border: 30px solid rgba(0, 0, 0, 0.05);
    background: #E4B366;
    width: 180px;
    height: 180px;
    flex-shrink: 0;
    
    
`
export const MugsCoup=styled.div`
    border-radius: 240px;
    border: 30px solid rgba(0, 0, 0, 0.05);
    background: #F05B10;
    width: 180px;
    height: 180px;
    flex-shrink: 0;
    
`
export const PlatesCoup=styled.div`
    border-radius: 240px;
    border: 30px solid rgba(0, 0, 0, 0.05);
    background: #A21010;
    width: 180px;
    height: 180px;
    flex-shrink: 0;
  
  
`
export const ProdArt=styled.div`
    display: flex;
    gap: 133.2px;
    justify-content: center;
    align-items: center;
    padding: 0 144px 120px 144px;

    h2{
        color: #000;
        font-family: Poppins;
        font-size: 29px;
        font-style: normal;
        font-weight: 700;
        line-height: 36px; /* 124.138% */
    }
    p{
        color: #6C6C6C;
        font-family: Libre Franklin;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 171.429% */
        margin-top: 26px;
        width: 501px;
    }
`
export const VaseCat=styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 221px;
padding-bottom: 120px;
border-top: 2px solid #F5F5F5;
border-bottom: 2px solid #F5F5F5;
h5{
color: #DBDBDB;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 34px; /* 188.889% */
letter-spacing: 1px;
text-transform: uppercase;
transform: translate(0,100%) rotate(-90deg);
position: absolute;
right: 49px;

}


`
export const VaseCatPart=styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 210px 86px;
`

export const VaseImgPart=styled.div`
background: #F5F5F5;
width: 500px;
height: 220px;
flex-shrink: 0;
display: flex;
justify-content: center;
align-items: center;

`
export const VaseTextPart=styled.div`
display: flex;
justify-content: space-between;
flex-direction:column;
height: 204px;
margin-top: 20px;
h1{
    color: #000;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 34px; /* 141.667% */
}
h4{
    color: #6C6C6C;
    font-family: Libre Franklin;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    width: 388px;
}
h2{
    color: #000;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 171.429% */
}
`
export const PotteryOnlineMain=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding:120px;
button{
    background: #AC1313;
    color: #FFF;
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 183.333% */
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 20px 26px 20px 40px;
    border: none;
    margin-top: 60px;
    cursor: pointer;
}
button:hover{
    opacity: 0.5;
}
h5{
color: #DBDBDB;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 34px; /* 188.889% */
letter-spacing: 1px;
text-transform: uppercase;
transform: translate(0,100%) rotate(-90deg);
position: absolute;
left: 56px;

}
`
export const PotteryOnlineHeader=styled.div`
h2{
    color: #D77474;
text-align: center;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 171.429% */
letter-spacing: 2px;
text-transform: uppercase;
}
h1{
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 50px; /* 125% */
}
padding-bottom: 60px;
`
export const PotteryOnlinePart=styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 21px 20px

`
export const PotteryCat=styled.div`
border-bottom: 2px solid #F5F5F5;
padding-bottom: 15px;
h4{
    padding-top: 20px;
    color: #6C6C6C;
    font-family: Libre Franklin;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
}
p{
    color: #000;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */ 
};

`
export const PotteryCollectionPart=styled.div`
background-image: url(${PotteryCollBack});
height: 550px;
background-repeat: no-repeat;
background-size: cover;
display: flex;
flex-direction: column;



h2{
    color: #D77474;
font-family: Poppins;
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 171.429% */
letter-spacing: 2px;
text-transform: uppercase;
padding-bottom: 7px;
}
h1{
color: #000;
font-family: Poppins;
font-size: 38px;
font-style: normal;
font-weight: 700;
line-height: 46px; /* 127.778% */
padding-bottom: 13px;
}
span{
    color: #6C6C6C;
font-family: Libre Franklin;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 150% */
width: 450px;
display: flex;
}
p{
    color: #AC1313;
font-family: Libre Franklin;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 24px;
text-decoration-line: underline;
}
div{
    padding: 140px 0px 120px 144px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
};
button{
    color: #FFF;
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 22px; /* 183.333% */
letter-spacing: 1px;
text-transform: uppercase;
background: #AC1313;
width: 195px;
height: 62px;
flex-shrink: 0;
border: none;
margin-top: 30px;
}
`
export const PreFooter=styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
padding: 122px 144px 134px 144px;
gap: 35px;
h5{
color: #DBDBDB;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 34px; /* 188.889% */
letter-spacing: 1px;
text-transform: uppercase;
transform: translate(0,100%) rotate(-90deg);
position: absolute;
right: 56px;

}
h2{
    color: #D77474;
text-align: center;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 171.429% */
letter-spacing: 2px;
text-transform: uppercase;
}
h1{
    color: #000;
text-align: center;
font-family: Poppins;
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: 50px; /* 125% */
padding-bottom: 28px;
}
span{
    color: #AC1313;
text-align: center;
font-family: Playfair Display;
font-size: 68px;
font-style: normal;
font-weight: 400;
line-height: 68px; /* 100% */
position: relative;
bottom: 10px;
padding: 0px 5px;
};
input{
color: #A1A1A1;
font-family: Lato;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
border: 1px solid #EBEBEB;
width: 320px;
height: 45px;
flex-shrink: 0;
padding-left: 30px;

}
input:active{
outline: none;
border: none;
}
button{
    color: #FFF;
text-align: center;
font-family: Lato;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
background: #000;
width: 175px;
height: 45px;
flex-shrink: 0;
border: 2px solid #000;
padding: 13px 7px 13px 7px;
margin-left: 7px;
}
div{
    display: flex;
    justify-content: center;
    align-items: center;
};
p{
    width: 13px;
height: 13px;
flex-shrink: 0;
background: #8534FF;
};
h4{
    color: #A1A1A1;
text-align: center;
font-family: Lato;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
padding-left: 10px;
}

`
export const Footer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:rgba(219, 219, 219, 0.10);
border-top: 2px solid #F5F5F5;
border-bottom: 2px solid #F5F5F5;
`
export const FooterText=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 114px;
padding: 121px 144px 60px 144px;
h1{
    color: #000;
font-family: Pacifico;
font-size: 33px;
font-style: normal;
font-weight: 400;
line-height: 40px; /* 121.212% */
padding-bottom: 30px;
}
p{
    color: #6C6C6C;
text-align: center;
font-family: Libre Franklin;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 171.429% */
}
`
export const FooterContact=styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 200px;
margin-bottom: 80px;
div{
    display: flex;
    flex-direction: column;
    align-items: center;
}
img{
    margin-bottom:10px ;
}
h4{
    margin-bottom: 20px;
    color: #000;
text-align: center;
font-family: Poppins;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 23px; /* 176.923% */
letter-spacing: 1px;
text-transform: uppercase;
}
p{
    color: #6C6C6C;
text-align: center;
font-family: Libre Franklin;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 171.429% */
}
`
export const FooterEnd=styled.div`
display: flex;
height: 85px;
justify-content: center;
align-items: center;
background: rgba(219, 219, 219, 0.10);
p{
    color: #6C6C6C;
text-align: right;
font-family: Libre Franklin;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 183.333% */
margin-right: 10px;
}
a{
    color: #000;
text-align: right;
font-family: Libre Franklin;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 183.333% */
text-decoration: none;
margin-right: 10px;
}
`