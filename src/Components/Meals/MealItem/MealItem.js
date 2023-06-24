const MealItem  = prop => {
    let price = String(prop.price)
    if(Number.isFinite(prop.price)){
      price = new Intl.NumberFormat('vi-VN').format(prop.price)
    }
    return(
        <li>
            <div><h3>{prop.name}</h3></div>
            <div>{prop.description}</div>
            <div>{price}</div>
        </li>

    )


}

export default MealItem