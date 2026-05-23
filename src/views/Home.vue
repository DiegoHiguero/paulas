<template>
    <section class="landing" >
        <div class=" ">
        </div>
    </section>
    <section class="eslogan">  
        <h1 class="esloganTituloFondo">Bien-être</h1>
        <h2 class="esloganTitulo">Votre bien etre et votre esthetique est ma mission !</h2>  
    </section>
    <section class="contact">
        <a-row>
            <a-col :span="24">
                <h1 style="text-align: center;width: 100%;">CONTACTEZ NOUS</h1>
            </a-col>
            <a-col :xs="0" :sm="0" :md="0" :lg="14" :xl="14"></a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
                <Formulario/>
            </a-col>
        </a-row>
    </section>
    <section class="soinCorps">
        <a-row justify="start" >
            <a-col :span="24" style="margin-bottom: 2rem;" > 
            <h1 style="text-align: center;color: white;margin-top: 3rem;">Nos Services</h1>
           </a-col>
            <a-row class="precios" :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
            <a-col :span="24"  > 
                <h4>SOINS CORPS</h4>
                <ul>
                    <li>
                        <p>Traitement anti-cellulite</p>
                        <p>50 €</p>
                    </li>
                    <li>
                        <p>Soins exfoliant + soins hydratant</p>
                        <p>45 €</p>
                    </li>
                    <li>
                        <p>Soin drainant anti-eau</p>
                        <p>48 €</p>
                    </li>
                    <li>
                        <p>Massage dos décontracturanT</p>
                        <p>50 €</p>
                    </li>
                    <li>
                        <p>Massage corps apaisant</p>
                        <p>48 €</p>
                    </li>
                    <li>
                        <p>Traitement anti-cellulite</p>
                        <p>50 €</p>
                    </li>
                </ul>
            </a-col>
            <a-col :span="24"  > 
                <h4>SOINS VISAGE POUR ELLE & LUI</h4>
                <ul>
                    <li>
                        <p>Soins purifiant tout type de peau</p>
                        <p>50 €</p>
                    </li>
                    <li>
                        <p>Soins exfoliant + soins hydratant</p>
                        <p>38 €</p>
                    </li>
                </ul>
            </a-col>
        </a-row>
        </a-row>
    </section>
    <section class="regard">
        <a-row justify="start" style="margin: 1rem;">
            <a-row class="precios" :xs="24" :sm="24" :md="13" :lg="13" :xl="13" >
            <a-col :span="24" > 
                <h4>BEAUTE DU REGARD</h4>
            </a-col>
            <a-col :span="24" > 
                <ul>
                    <li>
                        <p>Teinture cils ous sourcils</p>
                        <p>15 €</p>
                    </li>
                    <li>
                        <p>Brow Lift + Teinture</p>
                        <p>60 €</p>
                    </li>
                    <li>
                        <p>Rehaussement de cils  + Teinture</p>
                        <p>60 €</p>
                    </li>
                    <li>
                        <p>Maquillage  pour occasions</p>
                        <p><span class="apartir">A partir de </span>20 €</p>
                    </li>
                </ul>
            </a-col>
        </a-row>
        </a-row>
    </section>
    <section class="mains">
        <a-row justify="start" style="margin: 1rem;" >
            <a-row class="precios" :xs="24" :sm="24" :md="13" :lg="13" :xl="13" >
            <a-col :span="24" > 
                <h4>SOINS MAINS & PIEDS</h4>
            </a-col>
            <a-col :span="24" > 
                <ul>
                    <li>
                        <p>Manicure classique + Soins</p>
                        <p>25 €</p>
                    </li>
                    <li>
                        <p>Pedicure classique + Soins</p>
                        <p>30 €</p>
                    </li>
                    <li style="display: contents;">
                        <ul>
                             <p>Vernis SEMI PERMANENT
                            forfait dépose
                            + préparation de l’ongle 
                            + pose couleur :
                            </p>
                            <li>
                                <p style="padding-left: 1rem;">
                                    Mains
                                </p>
                                <p>
                                    30 €
                                </p>
                            </li>
                            <li>
                                <p style="padding-left: 1rem;">
                                    Pieds
                                </p>
                                <p>
                                    35 €
                                </p>
                            </li>
                        </ul>
                       
                    </li>
                    <li>
                        <p>Pose acrylique sur Ongles Naturels</p>
                        <p>50 €</p>
                    </li>
                    <li>
                        <p>Reconstruction en acrylique de l’ongles</p>
                        <p>60 €</p>
                    </li>
                </ul>
            </a-col>
        </a-row>
        </a-row>
    </section>
    <section class="cire">
        <a-row justify="start" style="margin: 1rem;" >
            <a-row class="precios" :xs="24" :sm="24" :md="13" :lg="13" :xl="13" >
            <a-col :span="24" > 
                <h4>EPILATION A LA CIRE</h4>
            </a-col>
            <a-col :span="24" > 
                <ul>
                    <li>
                        <p>Sourcils</p>
                        <p>10 €</p>
                    </li>
                    <li>
                        <p>Restructuration Sourcils</p>
                        <p>11 €</p>
                    </li>
                    <li>
                        <p>Menton</p>
                        <p>6 €</p>
                    </li>
                    <li>
                        <p>Maillot Simple</p>
                        <p>15 €</p>
                    </li>
                    <li>
                        <p>Maillot brésilien</p>
                        <p>20 €</p>
                    </li>
                    <li>
                        <p>Ventre ou Fesses</p>
                        <p>13 €</p>
                    </li>
                    <li>
                        <p>Aisselles</p>
                        <p>12 €</p>
                    </li>
                    <li>
                        <p>1/2 Bras</p>
                        <p>16 €</p>
                    </li>
                    <li>
                        <p>Bras</p>
                        <p>15 €</p>
                    </li>
                    <li>
                        <p>1/2 Jambes</p>
                        <p>15 €</p>
                    </li>
                    <li>
                        <p>Jambes entières</p>
                        <p>25 €</p>
                    </li>
                </ul>
            </a-col>
       </a-row>
       </a-row>
    </section>
    <section class="fil" >
        <a-row justify="start" style="margin: 1rem;"  >
            <a-row class="precios" :xs="24" :sm="24" :md="13" :lg="13" :xl="13" >
            <a-col :span="24" > 
                <h4>EPILATION AU FIL</h4>
            </a-col>
            <a-col :span="24"> 
                <ul>
                    <li>
                        <p>Restructuration Sourcils + Lévres</p>
                        <p>20 €</p>
                    </li>
                    <li>
                        <p>Entretien Sourcils + Lévres</p>
                        <p>13 €</p>
                    </li>
                </ul>
            </a-col>
        </a-row>
        </a-row>
    </section>
    <Footer/>
</template>

<script setup>
import Formulario from "../components/Formulario.vue";
import Footer from "../components/Footer.vue";
</script>

<style >
html, body { overflow-x: hidden;margin: 0px;background-color: #F5F5F5; }
ul{
    font-family: "Varela Round", serif;
  font-weight: 400;
  font-style: normal;
  padding-left: 1rem;
}
h1{
    font-family: "Varela Round", serif;
    color:#297373;
    font-weight: 600;
}
h4{
    font-family: "Varela Round", serif;
  font-weight: 600;
  font-style: normal;
  width: max-content;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
  text-wrap: balance;
}
li{
    display: flex;
    justify-content: space-between;
    font-family: "Varela Round", serif;
  font-weight: 400;
  font-style: normal;
}

.logo {
    height: 100vh;
    display: flex;
    justify-content: end;
    align-items: center;
}
.logoImagen{
    width: 30vw;
}
.landing {
    background: url('../img/landing.webp')no-repeat center center ; 
    width: 100%;
    height:100vh;
    margin-bottom:-1.5rem;
    margin-top:-2rem;
}
.eslogan{
    height: 80vh;
    background-color: #378C8C;
    justify-content: center;
    display: flex;
    align-items: center;
}
.esloganTituloFondo{
    text-transform: uppercase;
    color: #FBFBFB;
    opacity: 7%;
    text-align: center;
    font-size: 9rem;
    font-family: "Rammetto One", serif;
    font-weight: 400;
    font-style: normal;
    position: absolute;
    padding: 2rem;
    word-spacing: 1rem;
}
.esloganTitulo{
    font-family: "Grand Hotel", serif;
  font-weight: 400;
  font-style: normal;
  color: #FFFFFF;
  font-size: 5rem;
  padding: 2rem;
  text-align: center;
}
.precios{
    padding: 2rem;
    margin: 2rem;
    background-color: rgba(0, 0, 0, 0.3);
    color: #FFFFFF;
    border-radius: 1rem;
    justify-content: center;

}
p{
    font-size: 1.4rem;
}
.contact{
    background: url('../img/delicate-flower-photo.jpg') no-repeat center center ;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 3rem;
    min-height: 40rem;
}
.soinCorps{
    background: url('../img/soinsCorps.jpeg')no-repeat center center ; 
    width: 100%;
    min-height: 40rem;
    display: flex;
    font-size: 2rem;
    justify-content: start;
    align-items: center;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
.regard{
    background: url('../img/regard.jpeg')no-repeat left center ; 
    width: 100%;
    height:100vh;
    min-height: 40rem;
    display: flex;
    justify-content: end;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    
}
.mains{
    background: url('../img/mains.webp')no-repeat right center ; 
    width: 100%;
    height:100vh;
    min-height: 40rem;
    display: flex;
    justify-content: start;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
.cire{
    background: url('../img/pied.jpeg')no-repeat right center ; 
    width: 100%;
    height:100vh;
    min-height: 40rem;
    display: flex;
    justify-content: start;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
.fil{
    background: url('../img/fil.jpeg')no-repeat center center ; 
    width: 100%;
    height:100vh;
    min-height: 40rem;
    display: flex;
    justify-content: start;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
@media (max-width:768px) {
    ul{
        padding-left: .4rem;
    }
    p{
        font-size: .9rem;        
    }
    .apartir{
        font-size: .7rem;
    }
    h4{
        font-size: 1.3rem;
        text-wrap: balance;
        width: fit-content;
    }
    .esloganTituloFondo{
    font-size: 6.5rem;
}
    .esloganTitulo{
  font-size: 3rem;
}
.contact{
    padding: 0rem;
    padding-top: 3rem;
}
    .precios{
        margin: 0rem;
        padding: .5rem;
    }
    .formulario {
    padding: .7rem;
    margin: 0rem;
}
}
</style>