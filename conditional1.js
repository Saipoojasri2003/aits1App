function Item({name,ispacked})
{
    if(ispacked){
    return<li className="Item">{name} .packed</li>;
    }
    return <li className="Item">{name}</li>;
    }
    export default function PackingList()
    {
        return(
            <section>
            <h1>kusum's packing List</h1>
            <ul>
            <Item 
            ispacked={true}
            name="collar Blazor"
            />
            <Item
            ispacked={true}
            name="Hat with golden leaf"
            />
            <Item
            ispacked={false}
            name="High Heels"
            />
            <Item
            ispacked={true}
            name="Golden Brown Gown"
            />
         </ul>
    </section>
    );
 }
    
