const level1 = {
    maxChange: 3,
    colors : ['#0000FF', '#FF0000', '#FFFF00', '#00FF00'], // xanh - đỏ - vàng - lá
    target: 3,
    data: [
        1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 
        1, 0, 0, 0, 1, 0, 3, 3, 3, 3,
        1, 0, 0, 0, 1, 0, 3, 0, 0, 3,
        1, 0, 2, 2, 2, 2, 2, 2, 2, 3, 
        1, 1, 1, 1, 1, 0, 3, 3, 3, 3,
        0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 
        0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 
        0, 0, 2, 2, 2, 2, 2, 2, 2, 0,
    ],
    rows: 8,
    cols: 10,

}
const level2 = {
    maxChange: 4,
    colors : ['#0000FF', '#FF0000', '#FFFF00'],// xanh - đỏ - vàng
    target: 0,
    data: [
        2, 2, 0, 0, 1, 1, 0, 0, 2, 2, 
        0, 2, 2, 2, 1, 1, 2, 2, 2, 0,
        0, 2, 0, 1, 0, 0, 1, 0, 2, 0,
        1, 1, 1, 1, 2, 2, 1, 1, 2, 2, 
        2, 2, 1, 1, 2, 2, 1, 1, 1, 1,
        0, 2, 0, 1, 0, 0, 1, 0, 2, 0, 
        0, 2, 2, 2, 1, 1, 2, 2, 2, 0, 
        2, 2, 0, 0, 1, 1, 0, 0, 2, 2,
    ],
    rows: 8,
    cols: 10,
}





const levels = [
    {
        maxChange: 3,
        colors : ['#0000FF', '#FF0000', '#FFFF00', '#00FF00'], // xanh - đỏ - vàng - lá
        target: 3,
        data: [
            1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 
            1, 0, 0, 0, 1, 0, 3, 3, 3, 3,
            1, 0, 0, 0, 1, 0, 3, 0, 0, 3,
            1, 0, 2, 2, 2, 2, 2, 2, 2, 3, 
            1, 1, 1, 1, 1, 0, 3, 3, 3, 3,
            0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 
            0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 
            0, 0, 2, 2, 2, 2, 2, 2, 2, 0,
        ],
        rows: 8,
        cols: 10,
    
    },
    {
        maxChange: 4,
        colors : ['#0000FF', '#FF0000', '#FFFF00'],// xanh - đỏ - vàng
        target: 0,
        data: [
            2, 2, 0, 0, 1, 1, 0, 0, 2, 2, 
            0, 2, 2, 2, 1, 1, 2, 2, 2, 0,
            0, 2, 0, 1, 0, 0, 1, 0, 2, 0,
            1, 1, 1, 1, 2, 2, 1, 1, 2, 2, 
            2, 2, 1, 1, 2, 2, 1, 1, 1, 1,
            0, 2, 0, 1, 0, 0, 1, 0, 2, 0, 
            0, 2, 2, 2, 1, 1, 2, 2, 2, 0, 
            2, 2, 0, 0, 1, 1, 0, 0, 2, 2,
        ],
        rows: 8,
        cols: 10,
    },
    {
        maxChange: 4,
        colors : ['#0000FF', '#FF0000', '#FFFF00', '#00FF00'],
        target: 0,
        data: [
            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 
            2, 1, 1, 1, 1, 1, 1, 1, 1, 2,
            2, 1, 3, 3, 3, 3, 3, 3, 1, 2,
            2, 1, 3, 0, 0, 0, 0, 3, 1, 2, 
            2, 1, 3, 0, 0, 0, 0, 3, 1, 2,
            2, 1, 3, 3, 3, 3, 3, 3, 1, 2, 
            2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 
            2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        ],
        rows: 8,
        cols: 10,
    }

]

export {
    level1,
    level2,
    levels
}