'use strict'

//let,const
/*
const port = 4000
port = 2000
*/

function f() {

    {
        let x {

            const x = 'sneaky'
            let z = 'zzzz'
            var b = 'bbb'
        }
        console.log(b);
        let y = 'inner'
    }
}

f()
