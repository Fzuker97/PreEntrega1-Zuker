let productos = [
    {id:'1', categoria:'Teclado', name:'Corne Keyboard', price: 3200, foto:'/stock/CorneKeyboard.jpg'},
    {id:'2', categoria:'Teclado', name:'Lily58 Pro', price: 4000, foto:'/stock/Lily58Pro.jpg'},
    {id:'3', categoria:'Teclado', name:'Draculad 35%', price: 2500, foto:'/stock/Draculad35.jpg'},
    {id:'4', categoria:'Pcb', name:'Corne Pcb', price: 1000, foto:'/stock/CornePCB.jpg'},
    {id:'5', categoria:'Pcb', name:'Lily58 Pro Pcb', price: 1200, foto:'/stock/Lily58PCB.jpg'},
    {id:'6', categoria:'Pcb', name:'Draculad 35% Pcb', price: 900, foto:'/stock/DraculadPCB.jpg'},
    {id:'7', categoria:'Plate', name:' Plate Acrilico', price: 700, foto:'/stock/PlateAcrilico.jpg'},
    {id:'8', categoria:'Plate', name:'Plate Madera', price: 800, foto:'/stock/PlateMadera.jpg'},
    {id:'9', categoria:'Keycaps', name:'White Keycaps', price: 400, foto:'/stock/KeycapsBlancas.jpg'},
    {id:'10', categoria:'Keycaps', name:'Black Keycaps', price: 400, foto:'/stock/KeycapsNegras.jpg'}
]

export const gFetch =(id) =>{
    console.log(id)
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(id ? productos.find(prod => prod.id === id) : productos)
        }, 1000)
    })
}