<template>
   <a-col  style="justify-content: center;display: flex;height: 100vh;" >
                    <form @submit.prevent="handleSubmit" class="formulario"  >
                        <a-row style="display: flex;align-items: baseline;height: 100%;">
                        <a-col class="gutter-row"  style="justify-content: space-between;display: flex;" :span="24"  >
                            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <input type="text" class="form-control" id="validationServer01" v-model="nombre"
                                    placeholder="Name" required  />
                            </a-col>
                        </a-col>
                        <a-col class="gutter-row"  style="justify-content: space-between;display: flex;":span="24"  >
                            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <input type="email" class="form-control " id="exampleFormControlInput1"
                                    placeholder="name@example.com" v-model.trim="email" />
                            </a-col>
                        </a-col>
                        <a-col class="gutter-row" style="justify-content: space-between;display: flex;":span="24"  >
                            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <input type="phone" class="form-control " id="exampleFormControlInput2"
                                placeholder="Phone number" v-model.trim="phone" />
                            </a-col>
                        </a-col>
                        <a-col class="gutter-row"  style="justify-content: space-between;display: flex;" :span="24" >
                                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <textarea class="form-control " id="inputPassubjetsword"
                                placeholder="Your message"
                                v-model="message" required></textarea>
                                </a-col>
                        </a-col>
                        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" >
                                <a-alert  v-if="userStore.timeOut !== false" :message=userStore.mensaje  :type=userStore.typeMensajeAlerta show-icon />
                        </a-col>
                        <a-col class="gutter-row"  style="justify-content: center;display: flex;":span="24"  >
                            <button class="btn  " @click="enviarMensaje()" :span="24" >
                                Envoyer
                            </button>
                        </a-col>
                    </a-row>
                    </form>
                </a-col>
</template>

<script setup>
import { useUserStore } from '../stores/user'
import { ref } from "vue";
import emailjs from "@emailjs/browser";
const userStore = useUserStore();


const nombre = ref("");
const email = ref("");
const message = ref("");
const phone = ref("");

const enviarMensaje = async () => {
    if (( !nombre.value, !email.value, !message.value, !phone.value)) {
        userStore.mensajeAlerta("Please fill out all the fields.","warning");
    } else {
        try {
            const contactParams = {
                nombre: nombre.value,
                email: email.value,
                phone: phone.value,
                message: message.value,
            };

            await emailjs
                .send(
                    "service_60tshnn",
                    "template_gf1uvsv",
                    contactParams,
                    "HRUhOm5hNEc4CjoJQ"
                )
                .then(
                    (result) => {
                            (nombre.value = ""),
                            (email.value = ""),
                            (phone.value = ""),
                            (message.value = ""),
                            userStore.mensajeAlerta(
                                "Very good! The message was sent successfully",
                                "success"
                            );
                    },
                    (error) => {
                        userStore.mensajeAlerta("Oops! Something didn't work",
                            "error"
                        );
                    }
                );
        } catch (error) {
            console.log(error);
        }
    }
};
function closeModal() {
    userStore.modalActive = false;
}

</script>
<style scoped>
.formulario {
    background-color: white;
    padding: 2rem ;
    height: 70vh;
    width: 80vw;
    margin: 1.5rem;
    margin:.5rem;
    min-height: 30rem;
 
}

.modal{
    width: 100vw;
    height: 100vh;
    position: fixed;
  background: rgb(31 31 31 / 57%);
  z-index: 1;
  top: 0px;
}
label{
  font-weight: 700;
  font-size: 1rem;
}
input,textarea{
    border-style: solid;
    border-width: 2px;
    border-color: #E6E6E6;
    border-radius: 3px;
    background-color: #E6E6E6;
    font-size: 1.2rem;
    width: 100%;
    padding: 5px 15px 5px 10px;
}
textarea{
    height: 8rem;
}
.form-check{
    margin-left: 1rem;
}
.form-check-input:checked {
    background-color: #D6C983;
    border-color: #D6C983;
}
.form-check label{
  font-weight:600;

}
h1,
h2,
h3,
h4 {
    font-family: "Lato", serif !important;
  font-weight: 600;
  font-style: normal;
  z-index: 1;
  position: relative;
  letter-spacing: 0%;
}
.btn {
    font-weight: 500;
    font-family: inherit;
    font-size: 1.2rem;
    color: white;
    line-height: 1.15;
    cursor: pointer;
    background-color:#297373;
    display: inline-block !important;
    margin: 0px !important;
    padding: 0px !important;
    width: 100%;
    height: 3rem;
}


.btn:hover {
  background-color: #328a8a;
  color: white;
  transition: ease;
  font-size: 1.3rem;


}
</style>