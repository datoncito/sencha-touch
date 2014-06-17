Ext.application({
name:'tabuladores',
launch:function(){
   Ext.create('Ext.TabPanel',{
     fullscreen:true,
     tabBarPosition:'bottom',
     items:[
         
            {
                title:'home',
                iconCls:'home',
                items:[panel1]
            },
            {
                title:'Calculos',
                iconCls:'user',
                items:[
                    {
                        xtype:'textfield',
                        label:'Hola'
                    }
                ]
            }
         
     ]
         
     
   });
}
    
});

var panel1=Ext.create('Ext.Panel',{
 fullscreen:true,
 id:'panel1',
 items:[
     {
        html:[
            "<h2>Calculadora</h2>",
            "<p>Este es mi estilo</p>"
            
        ].join("")
    },
     {
         xtype:'textfield',
         label:'nombre'
     }
 ]
});

