<template>
    <div>
        <v-card height="30vh" class="d-flex align-center justify-center text-center">
            <v-card-text class="ma-15">
                <span id="query">QUERY</span>
                <span id="spacing">|</span>
                <span id="builder">BUILDER</span>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import cover from '../../assets/images/desk.jpg';
import {ref} from 'vue'
export default {
    setup () {
        const coverImage = ref(cover)

        return {
            coverImage
        }
    }
}
</script>

<style scoped>
#query{
    margin-top:50%;
    font-size:90px;
    font-weight:bold;
    font-family: 'Times New Roman', Times, serif;
    color:rgb(68, 147, 244);

}
#builder{
    margin-top:50%;
    font-size:80px;
    font-weight:bold;
    font-family:Arial, Helvetica, sans-serif
}
#spacing{
    margin-top:50%;
    font-size:100px;

}
</style>