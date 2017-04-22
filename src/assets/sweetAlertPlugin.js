import swal from 'sweetalert2'
import Vue from 'vue'

const swalPlugin = {};

swalPlugin.install = function(Vue){
    Vue.prototype.$swal = swal
};

Vue.use(swalPlugin);
