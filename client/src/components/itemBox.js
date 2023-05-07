export default function ItemBox(props) {
    return (
        /*
        <div 
            style={{
                background:`url(${props.image}) 50% 50% no-repeat`,
                border: `1px solid ${props.border_color}`,
                width: "100px",
                height: "100px"
            }}
        
        ></div>
        */
       <div>
            <img 
                src={props.image}
                alt={props.market_hash_name}
                style={{
                    objectFit: "cover",
                    border: `1px solid ${props.border_color}`,
                    width: "100px",
                    height: "100px"
                }}
            />
       </div>
    );
}