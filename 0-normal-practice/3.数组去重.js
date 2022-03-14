// let arr = [1, 0, 0, 2, 9, 8, 3, 1];
let arr = [{
        name: 'zhangsan',
        age: 20,
        sex: "男"
    }, {
        name: 'zhangsan',
        age: 22,
        sex: "女"
    },
    {
        name: 'lisi',
        age: 22,
        sex: "女"
    }
]

// function unique(arr) {
//     let map = new Map();
//     //let arr1 = new Array();      // 数组用于返回结果
//     let arr1 = []
//     for (let i = 0, len = arr.length; i < len; i++) {
//         if (map.has(arr[i])) { // 判断是否存在该key值
//             map.set(arr[i], true);
//         } else {
//             map.set(arr[i], false);
//             arr1.push(arr[i]);
//         }
//     }
//     console.log(map)
//     return arr1;
// }


function Es6duplicate(arr, type) {
    if (arr.length == 0) {
        return arr;
    } else {
        if (type) {
            var obj = {}
            var newArr = arr.reduce((cur, next) => {
                const key = next[type];
                obj[key] ? "" : obj[key] = true && cur.push(next);
                return cur;
            }, [])
            return newArr;
        } else {
            return Array.from(new Set(arr));
        }
    }
}
console.log(Es6duplicate(arr, 'name'));