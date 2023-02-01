let arr = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
]

let categories = [
    {
        course: ' SMM',
        count: 0
    },
    {
        course: 'PROGRAMMING',
        count: 0
    },
    {
        course: '     3DSMAX',
        count: 0
    },
    {
        course: ' DIZAYN',
        count: 0
    },
    {       
        course: '   BACKEND',
        count: 0
    },
]

for (let item of categories){
    item.course = item.course.trim()
}


let dobav = { back:[], max:[], diz:[], prog:[], smm:[] }
let sorting_names = []
let sorting_schools = { schools_235:[], schools_444:[], schools_777:[], schools_5555:[], schools_unknown:[] }




let fil = arr.filter((item) =>{
    if(item.info.faculity.slice(item) == 'Backend'){
        dobav.back.push(item)
        categories[0].count = dobav.back.length
    }else if(item.info.faculity.slice(item) == '3dsmax'){
        dobav.max.push(item)
        categories[2].count = dobav.max.length
    }else if(item.info.faculity.slice(item) == 'Dizayn'){
        dobav.diz.push(item)
        categories[1].count = dobav.diz.length        
    }else if(item.info.faculity.slice(item) == 'programming'){
        dobav.prog.push(item)
        categories[3].count = dobav.prog.length
    }else {
        dobav.smm.push(item)
        categories[4].count = dobav.smm.length
    }
})

for(let item of arr){
    let fill_names = sorting_names.push(item.name)
}

sorting_names = sorting_names.sort()

let fill_school = arr.filter((item) =>{
    if(item.info.school.slice(item) == '235'){
        sorting_schools.schools_235.push(item)
    }else if(item.info.school.slice(item) == '444'){
        sorting_schools.schools_444.push(item)
    }else if(item.info.school.slice(item) == '777'){
        sorting_schools.schools_777.push(item)
    }else if(item.info.school.slice(item) == '5555'){
        sorting_schools.schools_5555.push(item)
    }else if(item.info.school.slice(item) == 'ne izvestno'){
        sorting_schools.schools_unknown.push(item)
    }else{
        console.log('Выполнено');
    }
})





console.log(categories);
console.log(dobav);
console.log(sorting_names);
console.log(sorting_schools);