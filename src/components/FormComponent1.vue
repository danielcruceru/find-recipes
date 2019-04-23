<template>
    <div class="col-md-12 form">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div>
                        <h2 >Contact us</h2>
                        <p style="padding-bottom:30px;"> If you have questions feel free to send a message! </p>
                        <form @submit.prevent="handleSubmit">
                            <div class="form-group">Your Name</label>
                                <input type="text" v-model="user.firstName" id="firstName" name="firstName" class="form-control" :class="{ 'is-invalid': submitted && $v.user.firstName.$error }" />
                                <div v-if="submitted && !$v.user.firstName.required" class="invalid-feedback">Name is required</div>
                            </div>
                           
                            <div class="form-group">
                                <label for="email">Your Email</label>
                                <input type="email" v-model="user.email" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                                <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.email.required">Email is required</span>
                                    <span v-if="!$v.user.email.email">Email is invalid</span>
                                </div>
                            </div>
                             <div class="form-group">
                                <label for="lastName">Your Message</label>
                        <textarea v-model="user.lastName" id="lastName" name="lastName" class="form-control" :class="{ 'is-invalid': submitted && $v.user.lastName.$error }" />
                                <div v-if="submitted && !$v.user.lastName.required" class="invalid-feedback">Message is required </textarea></div>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

  <div class="col-md-12" style="padding-bottom:50px; padding-top:30px;">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9530.589821233867!2d23.79369107308326!3d44.330633768367484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sro!4v1555750530748!5m2!1sen!2sro"
         width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>


    </div>


</template>

<script>
    import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

    export default {
        name: "app1",
        data() {
            return {
                user: {
                    firstName: "",
                    lastName: "",
                    email: "",
                
                },
                submitted: false
            };
        },
        validations: {
            user: {
                firstName: { required },
                lastName: { required },
                email: { required, email },
                
            }
        },
        methods: {
            handleSubmit(e) {
                this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }

                alert("SUCCESS!! :-)\n\n");
            }
        }
    };
</script>

<style>
.form {
    padding-top:50px;
}
.btn-primary {
    color: #fff;
    background-color: #42b883;
    border-color: #42b883;
}

.Cookie--blood-orange .Cookie__button {
    background: #42b883 !important;   
}

</style>