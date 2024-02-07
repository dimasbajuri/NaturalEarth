// ./src/components/Fragments/MenusCardGroup.jsx

import React from 'react'
import Card from '../Elements/MenusCard'

function MenusCardGroup() {
    return (
        <div className='md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-5 mt-10 mb-5 mx-auto items-start'>
            <Card src="https://th.bing.com/th/id/OIG2._Z29mmRESwfk06jIV0VG?pid=ImgGn" name="Teas" price="$12 - $15 per package">
                Our tea selections offer a wide variety of delicious and healthy options that are sourced sustainably and provide a range of wellness properties.
            </Card>
            <Card src="https://th.bing.com/th/id/OIG4.LrAlBY8e5p26ezv_enP.?w=1024&h=1024&rs=1&pid=ImgDetMain" name="Spices" price="$20 - $30 per kilo">
                Our blend of spices provides a unique aroma and a flavorful twist for meals and dishes. Our spices offer a wide range of health benefits and are sourced responsibly.
            </Card>
            <Card src="https://th.bing.com/th/id/OIG4.nnni_pdl2mOXSJJtN6Cv?w=1024&h=1024&rs=1&pid=ImgDetMain" name="Sauces" price="$8 - $12 per package">
                Our sauces offer a variety of flavors and ingredients, ranging from traditional to unique combinations that bring out the flavor of food. Our sauces add a tangy touch to meals and are sourced sustainably.
            </Card>
            <Card src="https://th.bing.com/th/id/OIG1.T.WpY1VqVq_syTGLsu_W?w=1024&h=1024&rs=1&pid=ImgDetMain" name="Meal Kit" price="$45 per kit">
                Natural Earth's meal kits provide delicious meals that are both nutritious and convenient. Each kit includes all the necessary ingredients for a balanced meal for two people. With our meal kits, you can enjoy delicious and balanced meals without having to worry about preparing them from scratch.
            </Card>
        </div>
    )
}

export default MenusCardGroup