let recipe = {
    'name' : 'Sườn Xào Chua Ngọt',
    'servings' : 2,
    'ingredients' : ['400g sườn thăn',
        '4tbsp nước mắm',
        '5tsp đường',
        '5tsp nước cốt chanh',
        '1/3 bát nước sôi',
        'hành khô, tỏi, ớt, lá chanh',
        '2 quả cà chua',
        'hành tây( ớt chuông)'
    ]
};
console.log('Tên món ăn: ' + recipe.name);
console.log('Khẩu phần ăn: '+ recipe.servings);
console.log('Thành phần: ');

for (let i = 0; i < recipe.ingredients.length; i++) {
    console.log( '- ' + recipe.ingredients[i]);
}