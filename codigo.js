document.addEventListener('DOMContentLoaded', function () {
    
        Vue.component('modal', {
            template: '#modal-template' //creamos el componente que nos servirá para lanzar los modales
        })
      

            new Vue({
                el: '#appPacientes',
                data: {
                    nombre: null,
                    edad: null,
                    formActualizar: false,
                    idActualizar: -1,
                    nombreActualizar: '',
                    edadActualizar: '',
                    pacientes: [{id:1,nombre:"Pepe", edad: 55},{id:2,nombre:"Sara", edad: 42},{id:3,nombre:"Ivan", edad: 26}],
                    showModal: false,
                    showModalDos:false,
                    showModalActualizar: false,
                    errors:[], //esto para validaciones
                },

                methods:{
                    crearPaciente: function() {
                        let encontrado = false;
                        for(var i=0; i<this.pacientes.length;i++){
                            if(this.pacientes[i].nombre == this.nombre    ){
                                encontrado = true;
                            }                               
                        }
                        if(encontrado){
                            alert("Paciente duplicado")
                            //meter aqui quizás otro modal que nos avise de que el cliente esta duplicado
                            //en lugar del alert, pero eso ya mas tarde que no quiero ahora  :)
                        }else{
                            let idLast = this.pacientes.length+1;
                            this.pacientes.push({id:idLast,nombre:this.nombre, edad: this.edad})
                            this.idLast++; 
                            this.nombre='';
                            this.edad='';
                            this.showModal=true;
                            this.showModalDos=false;
                            this.showModalActualizar=false;
                        }   
                        
                    },
                    verFormActualizar: function (id) {
                        this.idActualizar = id;
                        this.nombreActualizar = this.pacientes[id].nombre;
                        this.edadActualizar = this.pacientes[id].edad;
                        this.formActualizar = true;
                    },
                    guardarActualizacion:function(id){
                        this.formActualizar = false;
                        this.pacientes[id].nombre = this.nombreActualizar;
                        this.pacientes[id].edad = this.edadActualizar;
                        //desactivo si los hay los otros dos modales y muestro el de actualizar
                        this.showModal = false;
                        this.showModalDos = false;
                        this.showModalActualizar =true;
                    },
                    borrarPaciente: function(id){
                        this.pacientes.splice(id,1);
                        if(this.pacientes.length == 0){
                            this.idLast = 0;  // esto me borra los ids en el que caso de que no haya ninguno en el array
                        }
                        this.showModalDos=true;
                        this.showModal =false;
                        this.showModalActualizar=false;
                    },
                    checkForm: function(e){
                        this.errors = [];
                        var re =/^[a-zA-Z]+$/;
                        if(!this.nombre || !re.test(this.nombre)) {
                            this.errors.push("Campo nombre incorrecto use solo letras.");
                        }
                        if(!this.edad) {
                            this.errors.push("Edad requerida.");
                        }    
                        if(this.edad<0 || this.edad>99){
                            this.errors.push("Edad menor que 0 o mayor a 100")
                        }                       
                        if(!this.errors.length) 
                        return true;
                        e.preventDefault();
                        }
                }

            });
              
        });
