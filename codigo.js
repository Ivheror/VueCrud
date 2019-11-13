document.addEventListener('DOMContentLoaded', function () {
    
        Vue.component('modal', {
            template: '#modal-template'
        })
      

            new Vue({
                el: '#appPacientes',
                data: {
                    nombre: null,
                    edad: null,
                    formActualizar: false,
                    idActualizar: -1,
                    idPorElQueVoy:0,
                    nombreActualizar: '',
                    edadActualizar: '',
                    pacientes: [],
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
                            //console.log(this.edad)
                            this.pacientes.push({id:this.idPorElQueVoy+1,nombre:this.nombre, edad: this.edad})
                            this.idPorElQueVoy++; //sin esto siempre sacaría el id 1
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
                            this.idPorElQueVoy = 0;  // esto me borra los ids en el que caso de que no haya ninguno en el array
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
