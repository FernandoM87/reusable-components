function Nav({ menuItems }) {
    let key = 0;
    return (
        <div class="flex flex-row">
            <nav>
                <ul>
                    {menuItems.map((item) => { 
                        return <li key={key++}>{item}</li>
                    })}
                </ul>
            </nav>
        </div>
        
    )
}

export default Nav; 