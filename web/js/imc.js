//var email = Ext.getCmp('email').getValue();
// Ajustamos un model para llenar nuestro storesito
Ext.define('Usuario', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name:'id',type:'int'},
            {name: 'nombre', type: 'string'},
            {name: 'edad',   type: 'int'}
        ],
        proxy: {
        type: "rest",
        url : "http://localhost:8084/springmaven/servicios/hola/json",
        
    
        reader: {
            type: "json",
            rootProperty: "usuarios"
        } 
     }
    }
});


var store = Ext.create("Ext.data.Store", {
    autoLoad: true,
    model: "Usuario"
  
});


Ext.application({
    
name: 'HolaMundo',
launch: function () {
 var mensaje='';
//Ext.Msg.alert('Bienvenidos la suma es '+z);

 Ext.create('Ext.form.Panel', {
    fullscreen: true,
    id:'panelsote',
    items: [
        {
            xtype: 'fieldset',
            id:'formulario',
            title: 'Cálculo de tu I.M.C.',
            instructions: 'Proporcionanos los siguientes datos',
            items: [
                {
                    xtype: 'textfield',
                    name : 'peso',
                    id:'peso',
                    label: 'Peso:'
                },
                {
                    xtype: 'textfield',
                    name : 'altura',
                    id:'altura',
                    label: 'Altura:'
                },
                {
                    xtype:'button',
                    text:'calcular imc',
                    ui:'confirm',
                    handler:function(){
                     //   var peso=Ext.getCmp('peso').getValue();
                       // var altura=Ext.getCmp('altura').getValue();
                       // var imc=peso/(altura*altura);
                     // Ext.getCmp('altura').setValue(peso);
                    
                     // Ext.getCmp('formulario').setInstructions('Tu imc es:'+imc);
                        //Ext.Msg.alert("El peso ingresado es:"+peso);
                        //2. Load directly from the Model

//GET /users/123
store.load();

var usuarios=Ext.ModelManager.getModel('Usuario') ;    
console.log("Usuarios  cargados "+store.getAllCount());
mensaje=mensaje+"Usuarios  cargados "+store.getAllCount();
 Ext.getCmp('formulario').setInstructions("Usuarios  cargados"); 

/*
 * El siguiente va a hacer que se invoque el metodo put, cuando quieras que se active la siguiente url:
 * @RequestMapping(value="/json/{id}", method=RequestMethod.PUT, headers={"Accept=Application/json"})
    public @ResponseBody String guardarUsuario2(@PathVariable int id,@RequestBody String json){
 */
var usuario2=Ext.create('Usuario',{id:3});
usuario2.save({
    success: function(usuario2) {
        usuario2.set('nombre', 'EL PUTITO QUE LE GUSTA LA MASACUATA DE BURRO');
        usuario2.set('edad',33);
        usuario2.save(); //PUT /users/123
    }
});
/*
 * Si por el contrario hacer una insercion por cada campo, etc, deebras crear tu usuario pero sin el id
 * como en el caso siguiente, en este caso se invocara el servicio, es decir metodo post
 * @RequestMapping(value="/json", method=RequestMethod.POST, headers={"Accept=Application/json"})
    public @ResponseBody String guardarUsuario(@RequestBody String json){
 */
var usuariopost = Ext.create('Usuario', {nombre: 'Ed Spencer', edad:27});

        usuariopost.save({
    success: function(ed) {
        console.log("El nombre que se ha guardado es este:"+ ed.get("nombre"));
        mensaje=mensaje+"El nombre que se ha guardado es este:"+ ed.get("nombre");
    },
    failure:function(ed){
        console.log('nada'+ed.nombre);
    }
}); 
                   /**
                   El siguiente seria el get donde tendrias que crear (Todavia no esta) un metodo get pero con {id}
                   y su codigo es directamente, de otro lado es un amezcla del pathVriable con el regreso de 
                        un json creado por el controller. HAZLO ATU REGRESO DE LA UNITEC Y PRUEBALO!!
          
//2. Load directly from the Model
*/
//GET /users/123
//Usuario.load(123,{     //el siguiente lo puse porque funciona con el di o por nombre, siempre y cuando tenga el correspondiente PathVariable en el controller
Usuario.load(2, {
    success: function(usuario) {
        console.log("holoa"+usuario.getId()); //outputs 123
        mensaje=mensaje+"holoa"+usuario.getId();
    }
});              
                        
         Ext.getCmp('formulario').setInstructions(mensaje);               
                        

                        
                    }
                },{
                    xtype:'button',
                    text:'oprimememe y veras!!',
                    ui:'confirm',
                    handler:function(){
                        Ext.getCmp('panelsote').removeAll(false,true);
                    }
                }
                
                
            ]
        },
        {
            
                  html:'<center><img src="img/modelo.jpg" width="60% height="60%"  /></center>'
                    
                
        }
        
    ]
});

    }
});

