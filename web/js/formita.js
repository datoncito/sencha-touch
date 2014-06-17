Ext.application({
    name:'formita',
    launch:function(){
     var forma=   Ext.create('Ext.form.Panel',{
            fullscreen:true,
            id:'formita',
    

           
            items:[
                {
                    xtype:'textfield',
                    id:'nombre',
                    name:'nombre',
                    placeHolder:'ingresa tu nombre'
                },
                {
                    xtype:'button',
                    ui:'confirm',
                    text:'oprimir',
                    handler:function(){
                     //   Ext.Msg.alert('Me haz oprimido pedazo de caca');
                  Ext.Ajax.request({
                       method:'get',
            url:'/curso-soluciones-spring/soluciones/servicios/hola',
            params:{
                
            },
  
    success: function(response){
        var texto = response.responseText;
       Ext.getCmp('nombre').setValue(texto);
    },
    failure:function(response){
        Ext.Msg.alert("No hay conexion");
    }
});
                        
                    }
                },
                {
                    html:'<center><h2>Hola mundo</h2></center>'
                }
            ]
            
        });
    }
});
