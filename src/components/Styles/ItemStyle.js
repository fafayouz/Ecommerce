const ItemStyle = {
    ItemContainer : {
        width : '90%',
        height:'75vh',
        margin:'0 auto',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'space-around'
    },
    ItemTitle : {
        width:'50%',
        height:'15%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        justifyContent:'space-evenly',


    },
    ItemBox : {
        width:'100%',
        height:'80%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    TitleBox : {
        width:'35%',
        height:'80%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        cursor:'pointer',
        borderBottom:'1px solid black',
        transition: '0.4s ease-in',
        
    },
    TitleBox2 : {
        width:'35%',
        height:'80%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        cursor:'pointer',
        transition: '0.4s ease-in',                
    },
    ItemCard :{
        width:'20%',
        height:'85%',
        background:'white',
        margin:'0rem 1rem',
        cursor:'pointer',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        textDecoration:"none",
        transition:"all 0.3s ease"
    }
}
export default ItemStyle