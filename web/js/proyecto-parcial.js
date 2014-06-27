Ext.application({
    name:'ProyectoFinal',
    launch:function(){
   Ext.create('Ext.TabPanel',{
       fullscreen:true,
        tabBarPosition:'bottom',
        items:[
                {
                title:'Primera',
                iconCls:'home',
                items:panelPrimera
                },
                {
                    title:'Segunda',
                    iconCls:'user',
                    html:'SEgunda'
                },
                {
                    title:'Tercera',
                    iconCls:'organize',
                    html:'Tercera'
                }
          ]
   });
    }
});


/*  Creamos los paneles que iran agregandose a cada  contenedor del TabPanel, falta los otros dos
 * pero irian aqui igual que panelPrimera usar un xtype fieldset con lazy inizialization, porque si no el boton
 * no se mueve*/
var panelPrimera={
            xtype:'fieldset',
            instructions:'Todos los campos son requeridos',
            items:[
                {
                    html:['<center><h1>Calculo del interes simple</h1>',
                         '<p>Llena cada uno de los campos y oprime el boton calcular</center>',
                    ].join('')
                },
                {
                  xtype:'textfield',
                  placeHolder:'tasa de interés'
                },
                {
                    xtype:'textfield',
                    placeHolder:'Tiempo en meses'
                },
                {
                    xtype:'textfield',
                    placeHolder:'Cantidad a prestar'
                },
                {
                    xtype:'button',
                    text:'calcular préstamo'
                }
            ]
    
};